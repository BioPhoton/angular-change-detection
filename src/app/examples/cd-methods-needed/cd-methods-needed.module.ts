import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UnpatchEventsModule } from '@rx-angular/template'
import { DirtyChecksModule } from '../../shared/dirty-checks/dirty-checks.module'
import { CdNeededMainComponent } from './cd-needed-main.component';
import { CdNeededChildOneComponent } from './cd-needed-child-one.component';
import { CdNeededChildTwoComponent } from './cd-needed-child-two.component';
import { StoreService } from './store.service'


@NgModule({
  declarations: [CdNeededMainComponent, CdNeededChildOneComponent, CdNeededChildTwoComponent],
  providers: [StoreService],
  imports: [
    CommonModule,
    DirtyChecksModule,
    UnpatchEventsModule
  ]
})
export class CdMethodsNeededModule { }
