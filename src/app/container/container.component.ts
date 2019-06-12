import { Component, ViewChild, ElementRef } from '@angular/core';
import {CdkDragDrop} from '@angular/cdk/drag-drop';
import { AddComponentService } from '../add-component.service';


@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})

export class ContainerComponent{
  
  componentRef: any;
  componentService;
  color ="red";
  @ViewChild('appAddComponent', { static: true }) addComponent: ElementRef;
    constructor(private addComponentService: AddComponentService) { } 

  components = ['Header','Table','Footer','Time','Dropdown','Spinner','Textbox','Button','Divider'];


  drop(event: CdkDragDrop<string[]>) {
     if (event.previousContainer !== event.container) {

      this.componentService = event.item.element.nativeElement.innerText.toLowerCase();
      this.addComponentService.component = this.componentService;
      } 
  }
  
}
