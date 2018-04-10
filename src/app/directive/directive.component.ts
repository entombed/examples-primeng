import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directive',
  templateUrl: './directive.component.html',
  styleUrls: ['./directive.component.css']
})
export class DirectiveComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  color = 'blue';

  clickMe() {
    this.color = (this.color == 'red') ? 'green' : 'red';
    console.log(this.color)
  }
}
