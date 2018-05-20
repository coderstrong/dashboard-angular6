import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// import your source

// import dashboard
import { DashboardComponent } from '../app/dashboard/dashboard.component';
import { HomeComponent } from '../app/dashboard/home/home.component';

// import user
import { SignUpComponent } from '../app/user/sign-up/sign-up.component';
import { SignInComponent } from '../app/user/sign-in/sign-in.component';
import { ForgotPasswordComponent } from '../app/user/forgot-password/forgot-password.component';

const routes: Routes = [

  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  {
    path: 'dashboard', component: DashboardComponent,
    children: [
      { path: '', component: HomeComponent }
    ]
  },
  { path: 'signup', component: SignUpComponent },
  { path: 'login', component: SignInComponent },
  { path: 'forgot', component: ForgotPasswordComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }