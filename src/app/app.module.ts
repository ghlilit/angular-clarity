import { BrowserModule } from '@angular/platform-browser';
import { ClarityModule } from 'clarity-angular';
import { NgModule } from '@angular/core';
import { UiModule } from './ui/ui.module';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    UiModule,
    ClarityModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
