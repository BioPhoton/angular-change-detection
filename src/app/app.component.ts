import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <h1></h1>
  <ul>
    <li routerLink="cd-methods-nested">CD Nested</li>
    <li routerLink="cd-methods-projected">CD Projected</li>
  </ul>
  <router-outlet></router-outlet>
  `
})
export class AppComponent {
  title = 'change-detection';
}
