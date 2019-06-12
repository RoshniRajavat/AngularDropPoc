import { Directive, ElementRef, Input, SimpleChanges } from '@angular/core';
import { AddComponentService } from './add-component.service';

@Directive({
  selector: '[appAddComponent]',
  exportAs: 'appAddComponent'
})
export class AddComponentDirective {
  @Input() component: string;

  constructor(private addComponentService: AddComponentService, private elementRef: ElementRef) { }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.component) {
      
      this.elementRef.nativeElement.innerHTML = this.addComponentService.getComponent();
    }
  }


}


