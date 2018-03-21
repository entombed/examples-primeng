import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  constructor() { }


  ngOnInit() {
  }

  selectedRows: any[] = [];
  selectedSingleRow: any;
  printSelectedRows: boolean;
  tmpSelectedRows: any[] = [];
  todoList = [
    {
      name: 'шаг первый',
      complited: true,
      dataText: 'повернуть на лево',
      step: '1',
      recepts: [
        { item: 'яблоко' },
        { item: 'груша' },
        { item: 'персик' },
      ],
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
      dataText: 'подпрыгнуть',
      step: '5',
      id: 5,
      selected: false
    },
  ]

  setBgColor(data) {
    let colorCss: string;
    if (data === true) {
      colorCss = 'bgBlue';
    } else if (data === false) {
      colorCss = 'bgGreen';
    }
    return colorCss;
  }
  setFontColor(data) {
    let colorCss: string;
    if (data.selected === true) {
      colorCss = 'fontBlue';
    } else if (data.selected === false) {
      colorCss = 'fontGreen';
    }
    return colorCss;
  }
  clickRow(data) {
    // console.log(data);
    data.selected = !data.selected;
  }

  dbClickRow(event) {
    console.log('dbclick');
    console.dir(this.selectedSingleRow);
  }

  unSelectRow(event) {
    console.log('unselect');
    console.log(this.selectedRows);
  }
  showRow() {
    this.tmpSelectedRows = [];
    this.printSelectedRows = !this.printSelectedRows;
    for (let i = 0; i < this.selectedRows.length; i++) {
      this.tmpSelectedRows.push(this.selectedRows[i]);
    }
  }
}
