import {Routes} from '@angular/router';
import { CdMethodsNeededModule } from './examples/cd-methods-needed/cd-methods-needed.module'
import { CdNeededMainComponent } from './examples/cd-methods-needed/cd-needed-main.component'
import {CdMethodsNestedComponent} from './examples/cd-methods-nested/cd-methods-nested.component';
import {CdMethodsProjecedComponent} from './examples/cd-methods-projeced/cd-methods-projeced.component';
import { CdMethodsRegularNestedComponent } from './examples/cd-methods-regular/cd-methods-nested.component'
import { TemplateVsEmbeddedViewDetachComponent } from './examples/template-vs-embedded-view/template-vs-embedded-view-detach.component';
import { TemplateVsEmbeddedViewLazyComponent } from './examples/template-vs-embedded-view/template-vs-embedded-view-lazy.component';
import {TemplateVsEmbeddedViewComponent} from "./examples/template-vs-embedded-view/template-vs-embedded-view.component";
import {ComponentBoundariesComponent} from './examples/component-boundaries/component-boundaries.component';

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
  },
  {
    path: 'template-vs-embedded-view',
    component: TemplateVsEmbeddedViewComponent
  },
  {
    path: 'template-vs-embedded-view/detach',
    component: TemplateVsEmbeddedViewDetachComponent
  },
  {
    path: 'template-vs-embedded-view/lazy',
    component: TemplateVsEmbeddedViewLazyComponent
  },
  {
    path: 'component-boundaries',
    component: ComponentBoundariesComponent
  },
  {
    path: 'cd-methods-regular',
    component: CdMethodsRegularNestedComponent
  },
  {
    path: 'cd-methods-needed',
    component: CdNeededMainComponent
  }
];
