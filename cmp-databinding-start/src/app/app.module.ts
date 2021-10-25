import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { AddItemComponent } from './add-item/add-item.component';
import { ShowItemComponent } from './show-item/show-item.component';

@NgModule({
  declarations: [
    AppComponent,
    AddItemComponent,
    ShowItemComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
