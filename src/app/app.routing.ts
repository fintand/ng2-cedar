import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/pages/home.component';
import { LessonsComponent } from './components/pages/lessons.component';
import { ServicesComponent } from './components/pages/services.component';
import { PricingComponent } from './components/pages/pricing.component';
import { ContactComponent } from './components/pages/contact.component';
import { RoadSignsComponent } from './components/pages/road-signs.component';
import {LinksComponent} from "./components/pages/links.component";

const appRoutes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'lessons',
    component: LessonsComponent
  },
  {
    path: 'services',
    component: ServicesComponent
  },
  {
    path: 'pricing',
    component: PricingComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path: 'links',
    component: LinksComponent
  },
  {
    path: 'road-signs',
    component: RoadSignsComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
