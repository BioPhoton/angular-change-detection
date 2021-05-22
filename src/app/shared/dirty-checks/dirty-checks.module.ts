import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DirtyChecksComponent} from './dirty-checks.component';


@NgModule({
  declarations: [DirtyChecksComponent],
  imports: [
    CommonModule
  ],
  exports: [DirtyChecksComponent]
})
export class DirtyChecksModule {
}
