import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-childone',
  templateUrl: './childone.component.html',
  styleUrls: ['./childone.component.css']
})
export class ChildoneComponent implements OnInit {
private varfour:string;
  constructor() {
    this.varfour="I AM FROM VARIABLE FOUR WE R CHILD";
   }

  ngOnInit() {
  }

}
