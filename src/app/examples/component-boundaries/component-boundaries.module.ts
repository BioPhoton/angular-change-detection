import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PushModule, UnpatchEventsModule} from '@rx-angular/template';
import {ComponentBoundariesComponent} from './component-boundaries.component';
import {FormsModule} from '@angular/forms';
import {DirtyChecksModule} from '../../shared/dirty-checks/dirty-checks.module';
import {ComponentBoundary1Component} from './component-boundary-1.component';
import {ComponentBoundary1_1Component} from './component-boundary-1-1.component';
import {ComponentBoundary1_1_1Component} from './component-boundary-1-1-1.component';
import {ComponentBoundary2Component} from './component-boundary-2.component';
import {ComponentBoundary2_1Component} from './component-boundary-2-1.component';
import {ComponentBoundary2_1_1Component} from './component-boundary-2-1-1.component';

@NgModule({
  declarations: [
    ComponentBoundariesComponent,
    ComponentBoundary1Component,
    ComponentBoundary1_1Component,
    ComponentBoundary1_1_1Component,
    ComponentBoundary2Component,
    ComponentBoundary2_1Component,
    ComponentBoundary2_1_1Component
  ],
  imports: [
    CommonModule,
    UnpatchEventsModule,
    DirtyChecksModule,
    FormsModule,
    PushModule
  ],
  exports: []
})
export class ComponentBoundariesModule {

}
