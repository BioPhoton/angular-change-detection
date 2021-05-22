import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';

import {ROUTES as APP_ROUTES} from './app.routing';
import {AppComponent} from './app.component';
import {CdMethodsNestedModule} from "./examples/cd-methods-nested/cd-methods-nested.module";
import {CdMethodsProjectedModule} from "./examples/cd-methods-projeced/cd-methods-projected.module";
import { CdMethodsNestedRegularModule } from './examples/cd-methods-regular/cd-methods-nested.module'
import {ViewVsEmbeddedViewModule} from "./examples/template-vs-embedded-view/view-vs-embedded-view.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(APP_ROUTES),
    CdMethodsNestedModule,
    CdMethodsProjectedModule,
    ViewVsEmbeddedViewModule,
    CdMethodsNestedRegularModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
