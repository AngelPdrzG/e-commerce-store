import { Routes } from '@angular/router';
import { SigninComponent } from './components/auth/signin/signin.component';
import { SignupComponent } from './components/auth/signup/signup.component';
import { HomeComponent } from './components/home/home.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'signin', title: 'Inicia Sesion', component: SigninComponent },
  { path: 'signup', title: 'Registrate', component: SignupComponent },
];
