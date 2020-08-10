import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { WebcamModule } from 'ngx-webcam';
import { DpDatePickerModule } from 'ng2-date-picker';

import { AppComponent } from './app.component';
import { MemberFormComponent } from './member-form/member-form.component';

@NgModule({
  declarations: [AppComponent, MemberFormComponent],
  imports: [
    BrowserModule,
    WebcamModule,
    HttpClientModule,
    ReactiveFormsModule,
    DpDatePickerModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
