import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { DirtyChecksModule } from '../shared/dirty-checks/dirty-checks.module'
import { ListItemComponent } from './list-item/list-item.component'
import { ListComponent } from './list/list.component'
import { MainComponent } from './main/main.component'
import { RequirementsComponent } from './requirements/requirements.component'
import { StatisticsService } from './statistics.service'
import { StatisticsComponent } from './statistics/statistics.component'

@NgModule({
  declarations: [MainComponent, RequirementsComponent, ListComponent, ListItemComponent, StatisticsComponent],
  providers: [StatisticsService],
  exports: [
    MainComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    DirtyChecksModule
  ]
})
export class TaskModule {}
