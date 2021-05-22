import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { RouterModule } from '@angular/router'
import { AppComponent } from './app.component'

import { ROUTES as APP_ROUTES } from './app.routing'
import { CdMethodsNeededModule } from './examples/cd-methods-needed/cd-methods-needed.module'
import { CdMethodsNestedModule } from './examples/cd-methods-nested/cd-methods-nested.module'
import { CdMethodsProjectedModule } from './examples/cd-methods-projeced/cd-methods-projected.module'
import { CdMethodsNestedRegularModule } from './examples/cd-methods-regular/cd-methods-nested.module'
import { ComponentBoundariesModule } from './examples/component-boundaries/component-boundaries.module'
import { ViewVsEmbeddedViewModule } from './examples/template-vs-embedded-view/view-vs-embedded-view.module'
import { TaskModule } from './task/task.module'

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(APP_ROUTES),
    CdMethodsNestedModule,
    CdMethodsProjectedModule,
    ViewVsEmbeddedViewModule,
    ComponentBoundariesModule,
    CdMethodsNestedRegularModule,
    CdMethodsNeededModule,
    TaskModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
