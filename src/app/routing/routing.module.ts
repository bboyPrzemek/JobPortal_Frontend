import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HomeComponent } from '../home/home.component';
import { SigninComponent } from '../signin/signin.component';
import { RegisterComponent } from '../register/register.component';
import { AdminpanelComponent } from '../adminpanel/adminpanel.component';
import { ManageOffersComponent } from '../manage-offers/manage-offers.component';
import { AccountSettingsComponent } from '../account-settings/account-settings.component';


const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch : 'full' },
  { path: 'login', component : SigninComponent },
  { path : 'register', component : RegisterComponent },
  {path: 'admin', component : AdminpanelComponent,
    children: [
      { path: 'manage', component: ManageOffersComponent },
      { path: 'settings', component: AccountSettingsComponent }
    ]
  }
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
