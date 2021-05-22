import {Routes} from '@angular/router';
import {CdMethodsNestedComponent} from './examples/cd-methods-nested/cd-methods-nested.component';
import {CdMethodsProjecedComponent} from './examples/cd-methods-projeced/cd-methods-projeced.component';
import {TemplateVsEmbeddedViewComponent} from './examples/template-vs-embedded-view/template-vs-embedded-view.component';
import {ComponentBoundariesComponent} from './examples/component-boundaries/component-boundaries.component';

export const ROUTES: Routes = [
  {
    path: 'cd-methods-nested',
    component: CdMethodsNestedComponent
  },
  {
    path: 'cd-methods-projected',
    component: CdMethodsProjecedComponent
  },
  {
    path: 'template-vs-embedded-view',
    component: TemplateVsEmbeddedViewComponent
  },
  {
    path: 'component-boundaries',
    component: ComponentBoundariesComponent
  }
];
