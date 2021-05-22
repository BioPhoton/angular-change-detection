import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CdMethodsNestedComponent} from "./cd-methods-nested.component";
import {CdNested1_1_1Component} from "./cd-nested-1-1-1.component";
import {CdNested1_1Component} from "./cd-nested-1-1.component";
import {CdNested1_2Component} from "./cd-nested-1-2.component";
import {CdNested1Component} from "./cd-nested-1.component";
import {UnpatchEventsModule} from "@rx-angular/template";
import {CdNested2Component} from "./cd-nested-2.component";
import {CdNested2_1_1Component} from "./cd-nested-2-1-1.component";
import {CdNested2_1Component} from "./cd-nested-2-1.component";
import {DirtyChecksModule} from "../../shared/dirty-checks/dirty-checks.module";
import {CdNested1_2_1Component} from "./cd-nested-1-2-1.component";

@NgModule({
  declarations: [
    CdMethodsNestedComponent,
    CdNested1Component,
    CdNested1_1Component,
    CdNested1_1_1Component,
    CdNested1_2Component,
    CdNested1_2_1Component,
    CdNested2Component,
    CdNested2_1Component,
    CdNested2_1_1Component
  ],
  imports: [
    CommonModule,
    UnpatchEventsModule,
    DirtyChecksModule
  ]
})
export class CdMethodsNestedModule {

}
