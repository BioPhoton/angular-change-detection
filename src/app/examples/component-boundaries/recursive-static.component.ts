import {ChangeDetectionStrategy, Component, Input} from '@angular/core';

@Component({
  selector: 'recursive-static',
  template: `
    <ng-container *ngIf="level === 0; else: branch">
      <p>Level {{total - level}}</p>
      <dirty-check></dirty-check>
      value: {{value}}
    </ng-container>
    <ng-template #branch>
      <p>Level {{total - level}}</p>
      <dirty-check></dirty-check>
      <rxa-recursive-static [total]="total" [level]="level-1" [value]="value"></rxa-recursive-static>
    </ng-template>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RecursiveStaticComponent {

  @Input()
  set depth(d) {
    this.total = parseInt(d, 10);
    this.level = this.total - 1;
  }

  @Input()
  total = 0;

  @Input()
  level = 0;

  @Input()
  value;

}
