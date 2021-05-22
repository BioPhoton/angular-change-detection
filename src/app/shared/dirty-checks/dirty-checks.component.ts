import {AfterViewInit, Component, ElementRef, Renderer2} from '@angular/core';
import { StatisticsService } from '../../task/statistics.service'

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'dirty-check',
  template: `
      {{ numDirtyChecks() }}
  `,
  styles: [`
    :host{
      border: 1px solid #ffff005f;
    }`]
})
export class DirtyChecksComponent implements AfterViewInit {
  displayElem;
  dirtyChecks = 0;

  constructor(
    private elementRef: ElementRef,
    private statisticsService: StatisticsService,
    private renderer: Renderer2,
  ) {

  }

  ngAfterViewInit() {
    this.displayElem = this.elementRef.nativeElement;
    this.numDirtyChecks();
  }

  numDirtyChecks() {
    // tslint:disable-next-line:no-unused-expression
    this.displayElem && this.renderer.setProperty(this.displayElem, 'innerHTML', ++this.dirtyChecks + '');
    this.statisticsService.registerDirtyCheck()
  }

}
