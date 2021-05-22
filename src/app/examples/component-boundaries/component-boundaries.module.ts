import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {UnpatchEventsModule} from '@rx-angular/template';
import {ComponentBoundariesComponent} from './component-boundaries.component';
import {RecursiveStaticComponent} from './recursive-static.component';
import {FormsModule} from '@angular/forms';
import {DirtyChecksModule} from "../../shared/dirty-checks/dirty-checks.module";

@NgModule({
  declarations: [
    ComponentBoundariesComponent,
    RecursiveStaticComponent
  ],
  imports: [
    CommonModule,
    UnpatchEventsModule,
    DirtyChecksModule,
    FormsModule
  ],
  exports: []
})
export class ComponentBoundariesModule {

}
