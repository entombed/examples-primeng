import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-show-blocks',
  templateUrl: './show-blocks.component.html',
  styleUrls: ['./show-blocks.component.css']
})
export class ShowBlocksComponent implements OnInit {

  constructor() { }

  ngOnInit() {

  }

  buttons = {
    item1: {
      name: 'button1',
      status: true,
    },
    item2: {
      name: 'button2',
      status: false,
    },
    item3: {
      name: 'button3',
      status: false,
    }
  }
}

