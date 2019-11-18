import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FirstComponent } from './components/first/first.component';
import { SecondComponent } from './components/second/second.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { AlramComponent } from './components/alram/alram.component';
import { ChatComponent } from './components/chat/chat.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { DayupdateComponent } from './components/dayupdate/dayupdate.component';
import { ProfileComponent } from './components/profile/profile.component';
import { HelpComponent } from './components/help/help.component';
import { AngularmaterialComponent } from './components/angularmaterial/angularmaterial.component';



const routes: Routes = [
  {path:"",component:HomeComponent},
  {path:"first",component:FirstComponent},
  {path:"second",component:SecondComponent},
  {path:"login",component:LoginComponent},
  {path:"signup",component:SignupComponent},
  {path:"alram",component:AlramComponent},
  {path:"chat",component:ChatComponent},
  {path:"dashboard",component:DashboardComponent},
  {path:"dayupdate",component:DayupdateComponent},
  {path:"profile",component:ProfileComponent},
  {path:"help",component:HelpComponent},
  {path:"angularmaterial",component:AngularmaterialComponent}

  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { } export const
RoutingComponent = [FirstComponent,SecondComponent];