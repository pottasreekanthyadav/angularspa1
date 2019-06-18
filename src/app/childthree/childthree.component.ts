import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-childthree',
  templateUrl: './childthree.component.html',
  styleUrls: ['./childthree.component.css']
})
export class ChildthreeComponent implements OnInit {
private varsix:string;
  constructor() {
    this.varsix="I AM FROM CHILD SIX WE CVARIABLE"
   }

  ngOnInit() {
  }

}
