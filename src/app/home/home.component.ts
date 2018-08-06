import { Component, OnInit, Optional } from '@angular/core';
import { MainService } from '../main.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  title = 'Hello World!';

  constructor( private main: MainService) {  }


  //  ngOnChanges() {
  //    console.log('ngOnChanges');
  //  }

   ngOnInit() {

  }


}
