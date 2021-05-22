import {Component, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-cd-methods-nested',
  template: `
    <h1>ChangeDetection methods in a nested component structure</h1>
    <div class="row">
      <div class="col-6">
        <cd-nested-1></cd-nested-1>
      </div>
      <div class="col-6">
        <cd-nested-2></cd-nested-2>
      </div>
    </div>
  `,
  styles: [
    `
      .cd-nested {
        display: block;
        border: 1px solid red;
        width: 100%;
        padding: 15px;
      }
    `
  ],
  encapsulation: ViewEncapsulation.None
})
export class CdMethodsNestedComponent {

  constructor() { }

}
