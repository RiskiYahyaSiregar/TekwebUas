import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin/admin.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { MaterialDesign } from '../material';
import { ImagesComponent } from './images/images.component';
import { ForgotComponent } from './forgot/forgot.component';
import { GalleryComponent } from '../gallery/gallery.component';
import { ProductComponent } from './product/product.component';
import { ImageUploderComponent } from './image-uploder/image-uploder.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
const routes: Routes = [
  {
    path:'',
    component: AdminComponent,
    children:[
      {
        path:'dashboard',
        component:DashboardComponent
      },
      {
        path: 'images',
        component: ImagesComponent
      },
      {
        path: 'gallery',
        component: GalleryComponent
      },
      {
        path:'product',
        component:ProductComponent
      },
      {
        path:'',
        pathMatch:'full',
        redirectTo:'/admin/dashboard'
      }
    ]
  }  
]
@NgModule({
  declarations: [
    AdminComponent, 
    DashboardComponent,
    ImagesComponent,
    ForgotComponent,
    ProductComponent,
    ImageUploderComponent,
    ProductDetailComponent    
  ],
  entryComponents:[
    
  ],
  imports: [
    CommonModule,   
    RouterModule.forChild(routes),   
    FormsModule,
    MaterialDesign    
  ]
})
export class AdminModule { }