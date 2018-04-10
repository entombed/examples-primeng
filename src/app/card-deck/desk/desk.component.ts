import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-desk',
  templateUrl: './desk.component.html',
  styleUrls: ['./desk.component.css']
})
export class DeskComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  @Output() outAddToDeck = new EventEmitter<any>();
  elongatedCardsArray: any =[];

  addToArray(card){
    this.elongatedCardsArray.push(card);
  }
  onClick(event, card){
    
    if (event.ctrlKey === true) {
      let index = this.elongatedCardsArray.indexOf(card);
      this.elongatedCardsArray.splice(index, 1);
      // card.inverted = this.inverteDeck ? true : false;
      // this.deckCardsArray.splice(card.id, 0, card);
      this.outAddToDeck.emit(card)
    }
    if (event.altKey === true){
      card.inverted = !card.inverted;
    }
  }
}
