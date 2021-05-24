import {AfterViewInit, Component, ElementRef, Renderer2} from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'dirty-check',
  template: `
    <div class="indicator-ripple">
      <span>{{ numDirtyChecks() }}</span>
    </div>
  `,
  styles: [`
    :host .indicator-ripple {
      border: 1px solid green;
    }`]
})
export class DirtyChecksComponent implements AfterViewInit {
  displayElem;
  dirtyChecks = 0;

  constructor(
    private elementRef: ElementRef,
    private renderer: Renderer2,
  ) {

  }

  ngAfterViewInit() {
    this.displayElem = this.elementRef.nativeElement.children[0].children[0];
    this.numDirtyChecks();
  }

  numDirtyChecks() {
    // tslint:disable-next-line:no-unused-expression
    this.displayElem && this.renderer.setProperty(this.displayElem, 'innerHTML', ++this.dirtyChecks + '');
  }

}
