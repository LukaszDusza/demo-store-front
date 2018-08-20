import { Component, OnInit } from '@angular/core';
import { Category, MainService, Producer } from '../main.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  constructor(private main: MainService) { }

  title = 'Dodaj nowy produkt.';

  selectedCategory: string;

  categories = new Array<Category>();
  producers = new Array<Producer>();

  ngOnInit() {
    this.categories = this.showCategories();
    this.producers = this.showProducers();
  }

  showCategories(): Array<Category> {
    const array = new Array<Category>();

    this.main.getCategories().subscribe(result => {
      result.map(cat => array.push(cat));
    }, err => {
      console.log(err);
     },
     () => {
      if (array.length === 0) {
        console.warn('empty category list!');
      } else {
        console.log(array);
      }
    });
    return array;
  }

  showProducers(): Array<Producer> {
    const array = new Array<Producer>();

    this.main.getProducers().subscribe(result => {
      result.map(prod => array.push(prod));
    }, err => {
      console.log(err);
     },
     () => {
      if (array.length === 0) {
        console.warn('empty category list!');
      } else {
        console.log(array);
      }
    });
    return array;
  }

}
