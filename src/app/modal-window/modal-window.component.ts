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
  }

  display: boolean = false;
  answerVisible: boolean = false;
  selectedRow: any = null;

  showDialog() {
    this.display = true;
    this.answerVisible = false;
    console.dir(this.selectedRow)
  }

  dataObj = [
    {
      name: 'шаг первый',
      complited: true,
      dataText: 'повернуть на лево',
      step: '1',
      id: 1,
      selected: false
    },
    {
      name: 'шаг второй',
      complited: false,
      dataText: 'взглянуть вверх',
      step: '2',
      id: 2,
      selected: false
    },
    {
      name: 'шаг третий',
      complited: false,
      dataText: 'переступить порог',
      step: '3',
      id: 3,
      selected: false
    },
    {
      name: 'шаг четвертый',
      complited: false,
      dataText: 'подняться по ступеньке',
      step: '4',
      id: 4,
      selected: false
    },
    {
      name: 'шаг пятый',
      complited: '',
      dataText: `подпрыгнуть
asasas asasa
getAnswer(){
  console.log("qqqq")
}`,
      step: '5',
      id: 5,
      selected: false
    },
  ]

  dbClickRow(rowData) {
    this.selectedRow = rowData;
    console.log('dbclick');
    // console.dir(this.selectedRow);
    this.display = true;
  }
  getAnswer() {
    this.answerVisible = true;
  }
  getNext() {
    let item = this._getRandomItem.getItem(0, this.dataObj.length);
    this.selectedRow = this.dataObj[item];
  }
}
