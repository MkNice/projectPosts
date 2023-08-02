import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { NewsModuleModule } from './dashboard/newsModule/newsModule.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    NewsModuleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
