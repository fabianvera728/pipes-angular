import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { Header }  from './components/header/header.component';
import { Body } from './components/body/body.component';
import { TextBox} from './components/textbox/textbox.component';
import { TestBed } from '@angular/core/testing';
import {ViewPasswordPipe} from './pipes/password.pipe';
import {SafeDOMPipe} from './pipes/video.pipe';

@NgModule({
  declarations: [
		  AppComponent,
		  Header,
      Body,
      TextBox,
      ViewPasswordPipe,
      SafeDOMPipe,
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    {
      provide: LOCALE_ID,
      useValue: 'es'
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
