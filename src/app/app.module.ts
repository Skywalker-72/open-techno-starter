import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { DisplayCardsComponent } from './display-cards/display-cards.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { BusinessSectionComponent } from './business-section/business-section.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LandingPageComponent,
    DisplayCardsComponent,
    BusinessSectionComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
