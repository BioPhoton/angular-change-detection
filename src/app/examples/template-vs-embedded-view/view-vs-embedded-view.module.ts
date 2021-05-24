import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CdEmbeddedViewDirective } from './cdEmbeddedView.directive';
import { TemplateVsEmbeddedViewBasicComponent } from './template-vs-embedded-view-basic.component';
import { TemplateVsEmbeddedViewDetachComponent } from './template-vs-embedded-view-detach.component';
import { TemplateVsEmbeddedViewLazyComponent } from './template-vs-embedded-view-lazy.component';
import { TemplateVsEmbeddedViewComponent } from './template-vs-embedded-view.component';
import { UnpatchEventsModule } from '@rx-angular/template';
import {DirtyChecksModule} from '../../shared/dirty-checks/dirty-checks.module';

@NgModule({
  declarations: [
    CdEmbeddedViewDirective,
    TemplateVsEmbeddedViewComponent,
    TemplateVsEmbeddedViewLazyComponent,
    TemplateVsEmbeddedViewDetachComponent,
    TemplateVsEmbeddedViewBasicComponent
  ],
  imports: [
    CommonModule,
    UnpatchEventsModule,
    DirtyChecksModule
  ]
})
export class ViewVsEmbeddedViewModule {
}
