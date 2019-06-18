import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pagetwo',
  templateUrl: './pagetwo.component.html',
  styleUrls: ['./pagetwo.component.css']
})
export class PagetwoComponent implements OnInit {
private vartwo:string;
  constructor() {
    this.vartwo="I am From PageTwo Component"
   }

  ngOnInit() {
  }

}
