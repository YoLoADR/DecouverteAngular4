import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { Component1Component } from './component/component1/component1.component';
import { NgIfAndAsynchronismeComponent } from './component/ng-if-and-asynchronisme/ng-if-and-asynchronisme.component';
import { Renderer2Component } from './component/renderer2/renderer2.component';
import { DirectiveEmailComponent } from './component/directive-email/directive-email.component';
import { AnimationsComponent } from './component/animations/animations.component';

@NgModule({
  declarations: [
    AppComponent,
    Component1Component,
    NgIfAndAsynchronismeComponent,
    Renderer2Component,
    DirectiveEmailComponent,
    AnimationsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
