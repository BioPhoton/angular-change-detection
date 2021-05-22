import {NgModule} from "@angular/core";
import {CdMethodsProjecedComponent} from "./cd-methods-projeced.component";
import {CdProjectedOnPushComponent} from "./cd-projected-on-push.component";
import {UnpatchEventsModule} from "@rx-angular/template";
import {CommonModule} from "@angular/common";
import {DirtyChecksModule} from "../../shared/dirty-checks/dirty-checks.module";
import {CdProjectedDefaultComponent} from "./cd-projected-default.component";


@NgModule({
  imports: [
    CommonModule,
    UnpatchEventsModule,
    DirtyChecksModule
  ],
  declarations: [
    CdMethodsProjecedComponent,
    CdProjectedOnPushComponent,
    CdProjectedDefaultComponent
  ]
})
export class CdMethodsProjectedModule {

}
