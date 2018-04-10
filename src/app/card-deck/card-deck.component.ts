import { Component, OnInit, ViewChild } from '@angular/core';
import { DeskComponent } from './desk/desk.component';
import { DeckBlock01Component } from './deck-block-01/deck-block-01.component';

@Component({
  selector: 'app-card-deck',
  templateUrl: './card-deck.component.html',
  styleUrls: ['./card-deck.component.css']
})
export class CardDeckComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    // for (let i = 1; i <= this.maxCardCount; i++) {
    //   this.deckCardsArray.push(
    //     {
    //       name: `${i}.png`,
    //       inverted: false,
    //       moved: false,
    //       id: i-1
    //     }
    //   );
    // }
  }
  @ViewChild(DeskComponent) private deskComponent : DeskComponent;
  @ViewChild(DeckBlock01Component) private deckBlock01Component : DeckBlock01Component;

  tmpCard = null;
  // maxCardCount = 20;
  // deckCardsArray: any = [];
  // elongatedCardsArray: any =[];
  // inverteDeck = false;

  // getParentBySelector(child, selector) {
  //   let node = child;
  //   while (node && !node.classList.contains(selector)) {
  //     node = node.parentElement;
  //   }
  //   return node;
  // }

  // onClick(event, card){
    
  //   if (event.ctrlKey === true) {
  //     let index = this.elongatedCardsArray.indexOf(card);
  //     this.elongatedCardsArray.splice(index, 1);
  //     card.inverted = this.inverteDeck ? true : false;
  //     this.deckCardsArray.splice(card.id, 0, card);
      
  //   }
  //   if (event.altKey === true){
  //     card.inverted = !card.inverted;
  //   }
  // }

  // onDblclick(card){
  //   this.elongatedCardsArray.push(card);
  //   let index = this.deckCardsArray.indexOf(card);
  //   this.deckCardsArray.splice(index, 1);
  // }

  // resort(array) {
  //   let max = array.length;
  //   let tempItem;
  //   let item;
  //     while (max) {
  //       item = Math.floor(Math.random() * max--);
  //       tempItem = array[max];
  //       array[max] = array[item];
  //       array[item] = tempItem;
  //   }
  // }

  // inverte(array) {
  //   this.inverteDeck = !this.inverteDeck;
  //   for (let i = 0; i < array.length; i++){
  //     array[i].inverted =  !array[i].inverted;
  //   }
  // }

  catchCard(card){
    this.tmpCard = card;
    console.log(this.tmpCard);
    this.deskComponent.addToArray(card);
  }

  addToDeck(card){
    this.tmpCard = card;
    console.log(this.tmpCard);
    this.deckBlock01Component.addToArray(card);
  }
}
