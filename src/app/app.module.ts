import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { PizzalistComponent } from '../pizzalist/pizza-list.component';
import { PizzaDetailsComponent } from '../pizza-details/pizza-details.component';

@NgModule({
  imports: [BrowserModule, FormsModule],

  declarations: [
    AppComponent,
    HelloComponent,
    PizzalistComponent,
    PizzaDetailsComponent,
  ],

  bootstrap: [AppComponent],
})
export class AppModule {}
