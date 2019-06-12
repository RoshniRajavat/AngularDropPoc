import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContainerComponent } from './container/container.component';
import {DragDropModule} from '@angular/cdk/drag-drop';
import { AddComponentDirective } from './add-component.directive';
import { AddComponentService } from './add-component.service';

@NgModule({
  declarations: [
    AppComponent,
    ContainerComponent,
    AddComponentDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DragDropModule
  ],
  providers: [AddComponentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
