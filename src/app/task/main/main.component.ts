import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core'
import { IItem } from '../item.interface'
import { StatisticsService } from '../statistics.service'

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  //changeDetection: ChangeDetectionStrategy.OnPush
})
export class MainComponent implements OnInit {
  items: IItem[] = []

  constructor(private cd: ChangeDetectorRef, private statisticsService: StatisticsService) { }

  ngOnInit(): void {
    this.addItem()
    this.statisticsService.registerComponentInit()
  }

  addItem(): void {
    this.items.push({ name: 'Item' + this.items.length })
    //this.items = [...this.items, { name: 'Item' + this.items.length }]
    //this.cd.detectChanges()
  }

}


