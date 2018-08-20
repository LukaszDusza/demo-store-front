import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root' // nowosc od wersji 6.
})

export class MainService {

  currentProduct: Product;

  constructor(private http: HttpClient) { }

localhost = 'http://localhost:8080/api/';
host = '';
api_version_1 = 'v1/';
products = 'products';
categories = 'categories';
producers = 'producers';
deleteProduct = 'products/';

getProducts(): Observable<Array<Product>> {
const result = this.http.get<Array<Product>>(this.localhost + this.api_version_1 + this.products);
  return result;
}

getCategories(): Observable<Array<Category>> {
  const result = this.http.get<Array<Category>>(this.localhost + this.api_version_1 + this.categories);
    return result;
  }

getProducers(): Observable<Array<Producer>> {
  const result = this.http.get<Array<Producer>>(this.localhost + this.api_version_1 + this.producers);
    return result;
  }

delete(serialNo) {
  console.log(serialNo);
   return this.http.delete(this.localhost + this.api_version_1 + this.deleteProduct + serialNo);
}

keepCurrentProduct(product): void {
  this.currentProduct = product;
 }

}

export interface Product {
    name: string;
    description: string;
    categories: string;
    price: number;
    producer: string;
    quantity: number;
    promotion: boolean;
    serialNo: string;
    picture: string;
}

export interface Category {
  name: string;
  description: string;
}

export interface Producer {
  name: string;
  description: string;
}


