import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HomeComponent } from '../home/home.component';
import { SigninComponent } from '../signin/signin.component';
import { RegisterComponent } from '../register/register.component';


const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch : 'full' },
  { path: 'login', component : SigninComponent },
  { path : 'register', component : RegisterComponent },
];


@NgModule({
  declarations: [],
  imports:
    [ 
      CommonModule, RouterModule.forRoot(routes)
    ],
  exports: [RouterModule],
})

export class Routing { }
