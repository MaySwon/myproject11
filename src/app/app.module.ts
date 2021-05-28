import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {FormsModule} from "@angular/forms";
import { TableworkersComponent } from './ui/tableworkers/tableworkers.component';
import { AddformWorkerComponent } from './ui/addform-worker/addform-worker.component';


@NgModule({
  declarations: [
    AppComponent,
    TableworkersComponent,
    AddformWorkerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
