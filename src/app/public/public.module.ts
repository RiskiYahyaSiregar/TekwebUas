import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { PublicComponent } from './public.component';

const routes: Routes = [
  {
    path:'',
    component:PublicComponent,
    children:[
      {
        path:'home',
        component:HomeComponent
      }
    ]
  }
]
@NgModule({
  declarations: [HomeComponent],
  imports: [ 
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class PublicModule { }
