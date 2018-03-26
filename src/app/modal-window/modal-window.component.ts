import { Component, OnInit } from '@angular/core';
import { GetRandomItemService } from '../services/get-random-item.service';

@Component({
  selector: 'app-modal-window',
  templateUrl: './modal-window.component.html',
  styleUrls: ['./modal-window.component.css'],
  providers: [GetRandomItemService]
})
export class ModalWindowComponent implements OnInit {

  constructor(
    public _getRandomItem: GetRandomItemService
  ) { }

  ngOnInit() {
    this.showDialog();
  }

  display: boolean = false;
  answerVisible: boolean = false;
  selectedRow: any = null;

  showDialog() {
    this.getNext();
    this.display = true;
    // console.dir(this.selectedRow)
  }

  dataObj = [
    {
      question: 'вопрос первый',
      answer: 'повернуть на лево',
    },
    {
      question: 'вопрос второй',
      answer: 'взглянуть вверх',
    },
    {
      question: 'вопрос третий',
      answer: 'переступить порог',
    },
    {
      question: 'вопрос четвертый',
      answer: 'подняться по ступеньке',
    },
    {
      question: 'вопрос пятый',
      answer:`
подпрыгнуть
sasas asasa
  getAnswer(){
    console.log("qqqq")
  }
`
    },
  ]

  getAnswer() {
    this.answerVisible = !this.answerVisible;
  }

  getNext() {
    let item = this._getRandomItem.getItem(0, this.dataObj.length);
    this.selectedRow = this.dataObj[item];
  }
}
