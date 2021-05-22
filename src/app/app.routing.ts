import {Routes} from '@angular/router';
import {CdMethodsNestedComponent} from './examples/cd-methods-nested/cd-methods-nested.component';
import {CdMethodsProjecedComponent} from './examples/cd-methods-projeced/cd-methods-projeced.component';

export const ROUTES: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'cd-methods-nested'
  },
  {
    path: 'cd-methods-nested',
    component: CdMethodsNestedComponent
  },
  {
    path: 'cd-methods-projected',
    component: CdMethodsProjecedComponent
  }
];
