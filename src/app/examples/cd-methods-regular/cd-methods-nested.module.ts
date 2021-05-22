import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import { DirtyChecksModule } from '../../shared/dirty-checks/dirty-checks.module'
import { CdMethodsRegularNestedComponent } from './cd-methods-nested.component'
import { CdNestedRegular1_2Component } from './cd-nested-1-2.component'
import { CdNestedRegularComponent } from './cd-nested-1.component'
import { CdNestedRegular2_1Component } from './cd-nested-2-1.component'
import { CdNestedRegular2Component } from './cd-nested-2.component'

@NgModule({
  declarations: [
   CdNestedRegular2_1Component,
    CdNestedRegular2Component,
    CdNestedRegularComponent,
    CdNestedRegular1_2Component,
    CdMethodsRegularNestedComponent,
  ],
  imports: [
    CommonModule,
    DirtyChecksModule
  ]
})
export class CdMethodsNestedRegularModule {

}
