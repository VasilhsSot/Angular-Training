import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//importing FormsModule to bind data from HTML form.
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularWaitBarrier } from 'blocking-proxy/built/lib/angular_wait_barrier';

//importing HttpClientModule to app.module.ts
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
