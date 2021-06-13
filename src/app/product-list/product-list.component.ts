import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { ProductService } from '../product.service';
import { ProductModel } from './product.model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  
  title:String = "Product List"

  //Product is the model class for a product item
  products: ProductModel[] = []

  showImage: Boolean = false;

  //image properties
  imageWidth: number = 50;
  imageMargin: number = 2;

  //Creating an object of the product service
  constructor(private productService: ProductService, private http:HttpClient, private router:Router, public auth:AuthService) { }

  toggleImage(): void{
    this.showImage = !this.showImage;
  }

  ngOnInit(): void {
    this.productService.getProducts().subscribe((data)=>{
      this.products=JSON.parse(JSON.stringify(data));
    });
  }
}
