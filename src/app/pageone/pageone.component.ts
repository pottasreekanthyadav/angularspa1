import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router'

@Component({
  selector: 'app-pageone',
  templateUrl: './pageone.component.html',
  styleUrls: ['./pageone.component.css']
})
export class PageoneComponent implements OnInit {
private varone:string;
  constructor(private route:ActivatedRoute) { 
    this.varone=this.route.snapshot.params['eid']+".."+
                this.route.snapshot.params['ename']+".."+
                this.route.snapshot.params['esal'];


  }

  ngOnInit() {
  }

}
