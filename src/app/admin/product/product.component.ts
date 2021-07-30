import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ProductDetailComponent } from '../product-detail/product-detail.component';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  title: any;
  book:any={};
  books: any=[];
  constructor(
    public dialog:MatDialog
  ) {
    this.title='product';
  }  
  ngOnInit(): void {
    this.getBooks();
  }
  
  getBooks()
  {
  this.books=[
  {
    title:'Angular untuk Pemula',
    author:'suhendra anang p',
    publisher:'Happy Coding',
    year:2020,
    isbn:'8298377474',
    price:70000
  },
  {
    title:'Tips kaya dari kebun',
    author:'suhendra anang p',
    publisher:'Happy Garden',
    year:2020,
    isbn:'8298377474',
    price:70000
  },
  ];
}

productDetail(data: any,idx: number)
 {
   let dialog=this.dialog.open(ProductDetailComponent, {
     width:'400px',
     data:data
   });
   dialog.afterClosed().subscribe((res: any)=>{
     if(res)
     {
        //jika idx=-1 (penambahan data baru) maka tambahkan data
       if(idx==-1)this.books.push(res);      
        //jika tidak maka perbarui data  
       else this.books[idx]=res; 
     }
   })
 }
 deleteProduct(idx: any)
 {
   var conf=confirm('Mau Hapus Ngk ?');
   if(conf)
   this.books.splice(idx,1);
 }



}