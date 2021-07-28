import { ActivatedRoute, Router } from '@angular/router';
import { Product } from './../models/product';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.css']
})
export class ProductUpdateComponent implements OnInit {

  id:any;
  product: Product = new Product();

  constructor(private _route:ActivatedRoute, private _httpClient:HttpClient,private _router:Router) { }

  ngOnInit(): void {
    this.id=this._route.snapshot.paramMap.get('id');
    console.log(this.id);
    this._httpClient.get<Product>('http://localhost:8080/products/products/'+this.id).subscribe(result=>{
      this.product = result;
    },error=>{
      console.log(error);
    })
  }

  
  updateProduct(){
    this._httpClient.post('http://localhost:8080/products/update/'+this.id,this.product).subscribe(result=>{
      alert('Product Updated Successfully');
      this._router.navigate(['/admin/manage-products']);

    }, (error)=>{
      console.log(error);
    })
  }
}
