import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from'./auth/login/login.component';
import { RegisterComponent } from'./auth/register/register.component';
import { ForgotComponent } from'./admin/forgot/forgot.component';
import { ImagesComponent } from './admin/images/images.component';
import { ProductComponent } from './admin/product/product.component';
const routes: Routes = [
  {
    path :'login',
    component: LoginComponent
  },
  {
    path: 'forgot',
    component: ForgotComponent
  },
  {
    path:'register',
    component:RegisterComponent
  },
  {
    path : 'admin',
    loadChildren:()=>import('./admin/admin.module').then(mod=>mod.AdminModule)
  },
  {
    path : 'public',
    loadChildren:()=>import('./public/public.module').then(mod=>mod.PublicModule)
  },
  {
    path: 'images',
    component: ImagesComponent
  },
  {
    path:'',
    redirectTo:'login',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

 }
