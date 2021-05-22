import { ChangeDetectorRef, Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core'
import { StatisticsService } from '../statistics.service'

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.scss'],
  //changeDetection: ChangeDetectionStrategy.OnPush
})
export class StatisticsComponent implements OnInit {
  checks = 0
  inits = 0

  @ViewChild('checks', { static: false }) checksElem
  @ViewChild('inits', { static: false }) componentInits

  constructor(
    private elementRef: ElementRef,
    private statisticsService: StatisticsService,
    private renderer: Renderer2,
    private cd: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.statisticsService.dirtyChecks.subscribe(c => {
      this.numDirtyChecks(c)
    })

    this.statisticsService.componentInits.subscribe(c => {
      this.numComponentCreations(c)
    })
  }

  numDirtyChecks(value: string | number) {
    if (!this.checksElem) {
      return
    }
    this.renderer.setProperty(this.checksElem.nativeElement, 'innerHTML', value + '')
  }

  numComponentCreations(value: string | number) {
    if (!this.componentInits) {
      return
    }
    this.renderer.setProperty(this.componentInits.nativeElement, 'innerHTML', value + '')
  }
}
