import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AdminGuard } from './admin.guard';
import { ScannerComponent } from './scanner/scanner.component';

const routes: Routes = [
  { path: '', component: HomeComponent, canActivate: [AdminGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'scanner', component: ScannerComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
