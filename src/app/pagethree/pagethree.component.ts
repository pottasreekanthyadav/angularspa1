import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pagethree',
  templateUrl: './pagethree.component.html',
  styleUrls: ['./pagethree.component.css']
})
export class PagethreeComponent implements OnInit {
private varthree:string;
  constructor() { 
    this.varthree="I am From Variabble page Three Three Componet"
  }

  ngOnInit() {
  }

}
