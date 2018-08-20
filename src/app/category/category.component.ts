import { Component, OnInit } from '@angular/core';
import { Category, MainService } from '../main.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

array = new Array<Category>();

show: boolean;

  constructor(private main: MainService) { }

  ngOnInit() { }

  showCategories(): Array<Category> {
    const array = new Array<Category>();

    this.main.getCategories().subscribe(result => {
      result.map(cat => array.push(cat));
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

}
