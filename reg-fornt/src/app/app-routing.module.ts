import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './components/login/login-page/login-page.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { ViewdataComponent } from './components/viewdata/viewdata.component';

const routes: Routes = [
  {
    path:"login",
    component:LoginPageComponent,
    pathMatch:"full"
  },
  {
    path:"registration",
    component:RegistrationComponent,
    pathMatch:"full"
  },
  {
  path:"view",
  component:ViewdataComponent,
  pathMatch:"full"
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
