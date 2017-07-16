import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormatterPipe } from './formatter.pipe';
import { HoverDirective } from './hover.directive';

@NgModule({
  declarations: [
    AppComponent,
    FormatterPipe,
    HoverDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
