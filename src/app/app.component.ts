import { ApplicationRef, ChangeDetectorRef, Component, NgZone } from '@angular/core'
import { NavigationEnd, Router } from '@angular/router'

@Component({
  selector: 'app-root',
  template: `
    <h1></h1>
    <ul>
      <button routerLink="requirements">Requirements</button>
      <button routerLink="cd-task">Task</button>
    </ul>
    <router-outlet></router-outlet>
  `,
  styles: [`button {
  margin-left: 10px;
  }
  ul {
    border-bottom: 1px solid black;
    margin-bottom: 10px;
    padding-bottom: 10px;
  }`]
})
export class AppComponent {

  constructor(
    private cd: ChangeDetectorRef, private router: Router) { }

  ngOnInit() {
    //this.router.events.subscribe(e => {
    //  if (e instanceof NavigationEnd) {
    //    this.cd.detectChanges()
    //  }
    //})
  }
}
