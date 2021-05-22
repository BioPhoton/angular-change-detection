import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-cd-methods-projeced',
  template: `
    <h1>ChangeDetection methods in a projected component structure</h1>
    <div class="row">
      <div class="col-6">
        <cd-projected-default>
          <cd-projectd-on-push>
            <cd-projectd-on-push>
            </cd-projectd-on-push>
          </cd-projectd-on-push>
        </cd-projected-default>
      </div>
      <div class="col-6">
        <cd-projectd-on-push>
          <cd-projected-default>
            <cd-projectd-on-push>
            </cd-projectd-on-push>
          </cd-projected-default>
        </cd-projectd-on-push>
      </div>
    </div>
  `,
  styles: [
    `
      .cd-projected {
        display: block;
        border: 1px solid red;
        width: 100%;
        padding: 15px;
      }
    `
  ],
})
export class CdMethodsProjecedComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }

}
