import { ChangeDetectionStrategy, Component, HostBinding, Input } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'nested-observable',
  template: `
    <div class="row">
      <div class="col-12">
        <div class="d-flex">
          <h3>$ Passthrough</h3>
          <div><strong>Level: {{ total - level }}</strong></div>
          <div>Dirty Checks: <dirty-check-rounded></dirty-check-rounded></div>
        </div>
        <ng-container *ngIf="level === 0; else: branch">
          <h3>Value: {{value$ | async | json}}</h3>
        </ng-container>
        <ng-template #branch>
          <nested-observable [total]="total" [level]="level-1" [value$]="value$"></nested-observable>
        </ng-template>
      </div>
    </div>`
  ,
  changeDetection: ChangeDetectionStrategy.OnPush,
  styles: [
    `
      :host {
        display: block;
        border: 2px solid green;
      }
    `
  ]
})
export class NestedObservableComponent {

  @HostBinding('style.paddingLeft.px')
  get paddingLeft(): number {
    return (this.total - this.level) * 5;
  }

  @HostBinding('style.borderBottomWidth.px')
  get borderBottomWidth(): number {
    return this.level === (this.total - 1) ? 2 : 0;
  }


  @Input()
  set depth(d) {
    this.total = d;
    this.level = this.total - 1;
  }

  @Input() total: number;
  @Input() level: number;
  @Input() value$: Observable<any>;
}
