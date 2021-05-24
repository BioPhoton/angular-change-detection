import {ChangeDetectionStrategy, Component} from '@angular/core';
import {Subject} from 'rxjs';
import { scan, startWith } from 'rxjs/operators';

@Component({
  selector: 'template-vs-embedded-view-basic',
  template: `
   <div class="container">
     <h2>
       Component Template vs Embedded View
       <small>Basic behavior</small>
     </h2>
     <div>Parent component dirty checks: <dirty-check-rounded></dirty-check-rounded></div>
     <hr/>
     <div class="row" style="margin-bottom: 1rem;">
       <div class="col-6">
         <button (click)="staticValue = staticValue+1">
           Component: cdRef#detectChanges
         </button>
       </div>
       <div class="col-6"></div>
     </div>
     <div class="row">
       <div class="col-4">
         <div class="view">
           <div><strong>Basic value binding</strong></div>
           <div>value: {{ staticValue }}</div>
           <div>Dirty checks: <dirty-check-rounded></dirty-check-rounded></div>
         </div>
       </div>

       <div class="col-4">
         <div class="view embedded">
           <div><strong>EmbeddedViewRef *ngIf</strong></div>
           <ng-container *ngIf="staticValue">
             <div>value: {{ staticValue }}</div>
             <div>Dirty checks: <dirty-check-rounded></dirty-check-rounded></div>
           </ng-container>
         </div>
       </div>
       <div class="col-4">
         <div class="view embedded">
           <div><strong>EmbeddedViewRef *ngIf</strong></div>
           <ng-container *ngIf="staticValue">
             <div>value: {{ staticValue }}</div>
             <div>Dirty checks: <dirty-check-rounded></dirty-check-rounded></div>
           </ng-container>
         </div>
       </div>
     </div>
   </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  styles: [`
    .container {
      border: 2px solid green;
      padding: 2rem;
    }
    .view {
      border: 3px solid green;
      padding: 1rem;
      height: 100%;
    }
    .embedded {
      border-style: dotted;
    }
  `]
})
export class TemplateVsEmbeddedViewBasicComponent {
  btn1Click$ = new Subject<Event>();
  btn2Click$ = new Subject<Event>();
  staticValue = 1;
  value1$ = this.btn1Click$.pipe(
    scan(a => ++a, 0)
  );
  value2$ = this.btn2Click$.pipe(
    scan(a => ++a, 0)
  );
}
