import { Component, OnInit, Optional } from '@angular/core';
import { MainService, Product } from '../main.service';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor( private main: MainService) {  
  
   }

   ngOnInit() {
    this.array = this.showProducts();
  }
  
  welcome: string = 'Twoje produkty';
  show: boolean = true;
  array = new Array<Product>();
  showProducts() {
    let array = new Array<Product>();
    this.main.getProducts().subscribe(r => { 
      r.map(r => array.push(r));
    }, err => {err},
     () => {console.log(array.length);
      if(array.length == 0) {
        this.show = false;
      }
    });
    return array;
  }

  onDelete(serialNo) {  
    this.main.delete(serialNo).subscribe( 
      (data) =>{
        console.log(data);       
      },err => {
        console.log(err);
      }, () => {
        //this.array = this.showProducts();
        this.ngOnInit();
        console.log("complete");
        
      })      
  }

  routeSerialNo(product) {
   
this.main.keepCurrentProduct(product);
  }

}
