import { Routes } from '@angular/router'
import { CdNeededMainComponent } from './examples/cd-methods-needed/cd-needed-main.component'
import { CdMethodsNestedComponent } from './examples/cd-methods-nested/cd-methods-nested.component'
import { CdMethodsProjecedComponent } from './examples/cd-methods-projeced/cd-methods-projeced.component'
import { CdMethodsRegularNestedComponent } from './examples/cd-methods-regular/cd-methods-nested.component'
import { ComponentBoundariesComponent } from './examples/component-boundaries/component-boundaries.component'
import { TemplateVsEmbeddedViewComponent } from './examples/template-vs-embedded-view/template-vs-embedded-view.component'
import { MainComponent } from './task/main/main.component'
import { RequirementsComponent } from './task/requirements/requirements.component'

export const ROUTES: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'requirements'
  },

  {
    path: 'cd-task',
    component: MainComponent
  },
  {
    path: 'requirements',
    component: RequirementsComponent
  }
]
