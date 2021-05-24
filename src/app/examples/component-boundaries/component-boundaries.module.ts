import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {UnpatchEventsModule} from '@rx-angular/template';
import { AsyncPipe } from './async.pipe';
import {ComponentBoundariesComponent} from './component-boundaries.component';
import {FormsModule} from '@angular/forms';
import {DirtyChecksModule} from '../../shared/dirty-checks/dirty-checks.module';
import { NestedObservableComponent } from './nested-observable.component';
import { NestedStaticComponent } from './nested-static.component';

@NgModule({
  declarations: [
    ComponentBoundariesComponent,
    NestedObservableComponent,
    AsyncPipe,
    NestedStaticComponent
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
