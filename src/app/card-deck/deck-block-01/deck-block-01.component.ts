import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-deck-block-01',
  templateUrl: './deck-block-01.component.html',
  styleUrls: ['./deck-block-01.component.css']
})
export class DeckBlock01Component implements OnInit {

  constructor() { }
  @Output() outCard = new EventEmitter<any>();

  ngOnInit() {
    for (let i = 1; i <= this.maxCardCount; i++) {
      this.deckCardsArray.push(
        {
          name: `${i}.png`,
          inverted: false,
          moved: false,
          id: i-1
        }
      );
    }
  }

  maxCardCount = 20;
  deckCardsArray: any = [];
  inverteDeck = false;

  onClick(event, card){
    if (event.altKey === true){
      card.inverted = !card.inverted;
    }
  }
  onDblclick(card){
    // this.elongatedCardsArray.push(card);
    let index = this.deckCardsArray.indexOf(card);
    this.deckCardsArray.splice(index, 1);
    this.outCard.emit(card);
  }

  resort(array) {
    let max = array.length;
    let tempItem;
    let item;
      while (max) {
        item = Math.floor(Math.random() * max--);
        tempItem = array[max];
        array[max] = array[item];
        array[item] = tempItem;
    }
  }

  inverte(array) {
    this.inverteDeck = !this.inverteDeck;
    for (let i = 0; i < array.length; i++){
      array[i].inverted =  !array[i].inverted;
    }
  }

}
