import { Component, OnInit, ViewEncapsulation } from '@angular/core'

@Component({
  selector: 'app-main',
  template: `
    <h1>ChangeDetection example</h1>
    <div class="row">
      <div class="col-6">
        <app-child-one></app-child-one>
      </div>
      <div class="col-6">
        <app-child-two></app-child-two>
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
export class CdNeededMainComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
