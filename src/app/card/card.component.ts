import { Component, OnInit } from '@angular/core';
import { GetParentElementService } from '../services/get-parent-element.service';
import { DragAndDropItemService } from '../services/drag-and-drop-item.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
  providers: [
    GetParentElementService,
    DragAndDropItemService
  ]
})
export class CardComponent implements OnInit {

  constructor(
    public _getParent:GetParentElementService,
    public _dgragAndDrop:DragAndDropItemService
  ) { }

  ngOnInit() {
    this.showHelloMessage(this.message);
  }

  messageText: string = 'Введите текст в поле, Ctrl + клик по карточке удаляет ее c поля';
  currentTarget: any;

  textArray = [];
  helloMessage = [];
  message = {
    severity:'info',
    summary:'Show primeng card',
    detail: this.messageText
  }
  
  addToArray(event){
    this.textArray.push(event);
  }

  oneClick(id, event){
    if (event.ctrlKey) {
      this.textArray.splice(id, 1);
    }
  }

  showHelloMessage(message) {
    this.helloMessage.push(message);
  }

  public dragStart(event, parentSelector){
    let target = event.target;
    this.currentTarget = this._getParent.getParentBySelector(target, parentSelector);
    this._dgragAndDrop.start(event, this.currentTarget);
    if (this.currentTarget.classList.contains('moved') == false) {
      this.currentTarget.classList.add('moved');
    }
  }

  public dragKeep(event){
    this._dgragAndDrop.drag(event, this.currentTarget);
  }
}
