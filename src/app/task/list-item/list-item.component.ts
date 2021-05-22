import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnInit } from '@angular/core'
import { IItem } from '../item.interface'
import { StatisticsService } from '../statistics.service'

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.scss'],
  //changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListItemComponent implements OnInit {
  @Input() item: IItem
  @Input() totalItems: number
  counter = 0

  constructor(private cd: ChangeDetectorRef, private statisticsService: StatisticsService) { }

  ngOnInit(): void {
    this.statisticsService.registerComponentInit()
  }

  updateCounter() {
    this.counter++
    //this.cd.detectChanges()
  }
}
