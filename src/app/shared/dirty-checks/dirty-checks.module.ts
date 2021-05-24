import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import { DirtyChecksRoundedComponent } from './dirty-checks-rounded.component';
import {DirtyChecksComponent} from './dirty-checks.component';


@NgModule({
  declarations: [DirtyChecksComponent, DirtyChecksRoundedComponent],
  imports: [
    CommonModule
  ],
  exports: [DirtyChecksComponent, DirtyChecksRoundedComponent]
})
export class DirtyChecksModule {
}
