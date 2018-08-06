import { Component, OnInit } from '@angular/core';
import { MainService, Product } from '../main.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  welcome = 'Twoje produkty';
  show = true;
  array = new Array<Product>();

  constructor( private main: MainService) {  }


  ngOnInit() {
   this.array = this.showProducts();
 }


 showProducts() {
   const array = new Array<Product>();

   this.main.getProducts().subscribe(result => {
     result.map(product => array.push(product));
   }, err => {
     console.log(err);
    },
    () => {
      console.log(array.length);
     if (array.length === 0) {
       this.show = false;
     }
   });
   return array;
 }

 onDelete(serialNo) {
   this.main.delete(serialNo).subscribe(
     (data) => {
       console.log(data);
     }, err => {
       console.log(err);
     }, () => {
       this.ngOnInit();
       console.log('complete');

     });
 }

 routeSerialNo(product) {

this.main.keepCurrentProduct(product);
 }

}
