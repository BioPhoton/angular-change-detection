import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core'
import { IItem } from '../item.interface'
import { StatisticsService } from '../statistics.service'

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
  //changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListComponent implements OnInit {
  @Input() items: IItem[] = []

  constructor(private statisticsService: StatisticsService) { }

  ngOnInit(): void {
    this.statisticsService.registerComponentInit()
  }

  trackBy(item: IItem):string{
    return item.name
  }
}
