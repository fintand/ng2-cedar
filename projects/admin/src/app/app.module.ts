import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatButtonModule,
  MatDividerModule,
  MatIconModule,
  MatListModule, MatMenuModule,
  MatSidenavModule,
  MatToolbarModule
} from '@angular/material';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { AuthService } from './core/auth.service';

import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';

import { environment } from '../environments/environment';
import { AdminGuard } from './admin.guard';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { ZXingScannerModule } from '@zxing/ngx-scanner';
import { ScannerComponent } from './scanner/scanner.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    ScannerComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule,
    ZXingScannerModule.forRoot(),
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatDividerModule,
    MatMenuModule
  ],
  providers: [AuthService, AdminGuard],
  bootstrap: [AppComponent]
})
export class AppModule {
}
