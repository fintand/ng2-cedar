import {BrowserModule, Meta} from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RecaptchaModule } from 'ng-recaptcha';
import { Angulartics2Module } from 'angulartics2';
import { Angulartics2GoogleAnalytics } from 'angulartics2/ga';

import { AppComponent } from './app.component';

import { NavbarComponent } from './components/navbar/navbar.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { HomeComponent } from './components/pages/home.component';
import { LessonsComponent } from './components/pages/lessons.component';
import { ServicesComponent } from './components/pages/services.component';
import { PricingComponent } from './components/pages/pricing.component';
import { ContactComponent } from './components/pages/contact.component';
import { RoadSignsComponent } from './components/pages/road-signs.component';

import { routing } from './app.routing';
import {RoadSignPipe} from "./components/util/roadSign.pipe";
import {LazyLoadImagesModule} from "ngx-lazy-load-images";
import {SidebarModule} from "ng-sidebar";
import {LinksComponent} from "./components/pages/links.component";

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidenavComponent,
    HomeComponent,
    LessonsComponent,
    ServicesComponent,
    PricingComponent,
    ContactComponent,
    LinksComponent,
    RoadSignsComponent,
    RoadSignPipe
  ],
  imports: [
    BrowserModule,
    RecaptchaModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    routing,
    Angulartics2Module.forRoot([ Angulartics2GoogleAnalytics ]),
    SidebarModule.forRoot(),
    LazyLoadImagesModule
  ],
  providers: [Meta],
  bootstrap: [AppComponent]
})
export class AppModule { }
