import { Component, OnInit} from '@angular/core';
import { MainService, Product } from '../main.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  welcome = 'Twoje produkty';

  show: boolean;

  array = new Array<Product>();

  constructor( private main: MainService) {  }

  ngOnInit(): void {
  this.show = true;
  this.array = this.showProducts();
 }


 showProducts(): Array<Product> {
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

 onDelete(serialNo): void {
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

 routeSerialNo(product): void {
this.main.keepCurrentProduct(product);
 }

}
