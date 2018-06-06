import { Component, OnInit } from '@angular/core';
// import {trigger, style, transition, animate, keyframes, query, stagger} from '@angular/animations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']

})
export class HomeComponent implements OnInit {

  count_wishes: number;
  submit_text= 'Add here';
  wish= 'default';
  wishes= [];

  constructor() { }

  ngOnInit() {
    this.count_wishes = this.wishes.length;
  }
  addWished(){
    this.wishes.push(this.wish);
    this.wish = '';
    this.count_wishes = this.wishes.length;


  }
  removeItem(i){
    this.wishes.splice(i, 1);

  }

}
