import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-childtwo',
  templateUrl: './childtwo.component.html',
  styleUrls: ['./childtwo.component.css']
})
export class ChildtwoComponent implements OnInit {
private varfive:string;
  constructor() {
    this.varfive="I AM FROM CHILD TOW COMPONET "
   }

  ngOnInit() {
  }

}
