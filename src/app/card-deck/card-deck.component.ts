import { Component, OnInit } from '@angular/core';

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
    console.log(card)
  }
}
