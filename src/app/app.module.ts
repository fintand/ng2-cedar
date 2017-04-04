import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RecaptchaModule } from 'ng-recaptcha';

import { AppComponent } from './app.component';

import { NavbarComponent } from './components/navbar/navbar.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { HomeComponent } from './components/pages/home.component';
import { LessonsComponent } from './components/pages/lessons.component';
import { ServicesComponent } from './components/pages/services.component';
import { PricingComponent } from './components/pages/pricing.component';
import { ContactComponent } from './components/pages/contact.component';

import { routing } from './app.routing';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidenavComponent,
    HomeComponent,
    LessonsComponent,
    ServicesComponent,
    PricingComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    RecaptchaModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
