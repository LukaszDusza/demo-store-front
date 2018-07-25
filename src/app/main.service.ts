import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MainService {

  constructor(private http: HttpClient) { }

localhost = "http://localhost:8080/api/v1/";
products = "products";
deleteProduct = "products/"

getProducts(): Observable<Array<Product>> {
let result = this.http.get<Array<Product>>(this.localhost+this.products);
  return result;
   
}

delete(serialNo) {
  console.log(serialNo);
   return this.http.delete(this.localhost + this.deleteProduct + serialNo); 
}


currentProduct;
keepCurrentProduct(product){
  this.currentProduct = product;
  console.log(this.currentProduct);

}


}

export interface Product {
    name:string;
    description:string;
    categories:string;
    price:number;
    producer:string;
    quantity:number;
    promotion:boolean;
    serialNo:string;
    picture:string;
}
