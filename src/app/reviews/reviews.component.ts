import { Component, OnInit } from '@angular/core';

@Component({
  //selector: 'app-reviews',
  // selector:'[app-reviews]', attribute way
  selector:'.app-reviews', //class way
  templateUrl: './reviews.component.html',
  // styleUrls: ['./reviews.component.css']
  styles:[`
  p {
    color: red;
}`]
})
export class ReviewsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
