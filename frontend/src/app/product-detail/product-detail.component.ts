import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../models/product';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  id: any;
  product: Product = new Product();

  // GET 6 products from the database
  productList: Product[]

  constructor(private _httpClient:HttpClient, private _router:Router, private _route:ActivatedRoute) { 
    this._router.routeReuseStrategy.shouldReuseRoute = function () {
      return false;
    };
    this._router.onSameUrlNavigation = 'reload';
  }

  ngOnInit(): void {
    this.id = this._route.snapshot.paramMap.get('id');

    this._httpClient.get<Product>('http://localhost:8080/products/products/'+this.id).subscribe(result => {
      this.product=result;
      console.log(result);
    }, error => {
      console.log(error);
    })

    this._httpClient.get<Product[]>('http://localhost:8080/products/products').subscribe(result => {
      this.productList = result;
      console.log(this.productList);
    }, error => {
      console.log(error);
    })
  }

}
