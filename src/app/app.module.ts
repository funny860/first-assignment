import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { warningAlert } from './warning-alert/warning-alert.component';
import { sucessAlert } from './sucess-alert/sucess-alert.component';

@NgModule({
  declarations: [AppComponent, sucessAlert, warningAlert],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
