import {Component} from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'dirty-check-rounded',
  template: `
    <span>{{ checked }}</span>
  `,
  styles: [`
    :host {
      border: 1px solid green;
      border-radius: 100%;
      width: 40px;
      height: 40px;
      display: inline-flex;
      justify-content: center;
      align-items: center;
    }
  `
  ]
})
export class DirtyChecksRoundedComponent {

  private _rendered = 0;
  get checked(): number {
    return this._rendered++;
  }
}
