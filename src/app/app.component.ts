import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <h1></h1>
  <ul>
    <li routerLink="cd-methods-regular">CD Nested regular</li>
    <li routerLink="cd-methods-needed">CD methods needed</li>
    <li routerLink="cd-methods-regular">CD Nested native</li>
    <li routerLink="cd-methods-nested">CD Nested</li>
    <li routerLink="cd-methods-projected">CD Projected</li>
    <li routerLink="component-boundaries">CD Componet Boundaries</li>
    <li routerLink="template-vs-embedded-view/basic">CD Template vs EmbeddedView - Basic</li>
    <li routerLink="template-vs-embedded-view">CD Template vs EmbeddedView - Custom</li>
    <li routerLink="template-vs-embedded-view/detach">CD Template vs EmbeddedView - Detach</li>
    <li routerLink="template-vs-embedded-view/lazy">CD Template vs EmbeddedView - Lazy</li>
  </ul>
  <router-outlet></router-outlet>
  `
})
export class AppComponent {

}
