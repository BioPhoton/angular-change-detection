import { Routes } from '@angular/router';
import { TemplateVsEmbeddedViewDetachComponent } from './template-vs-embedded-view-detach.component';
import { TemplateVsEmbeddedViewLazyComponent } from './template-vs-embedded-view-lazy.component';
import { TemplateVsEmbeddedViewComponent } from './template-vs-embedded-view.component';

export const ROUTES: Routes = [
  {
    path: '',
    component: TemplateVsEmbeddedViewComponent
  },
  {
    path: 'detach',
    component: TemplateVsEmbeddedViewDetachComponent
  },
  {
    path: 'lazy',
    component: TemplateVsEmbeddedViewLazyComponent
  }
];
