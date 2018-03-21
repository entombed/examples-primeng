import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-input-text',
  templateUrl: './input-text.component.html',
  styleUrls: ['./input-text.component.css']
})
export class InputTextComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Output() pushText = new EventEmitter<string>();

  inputValue = '';

  getInputValue(text){
    if(text.length > 0 && text[0] != ' '){
      this.inputValue = '';
      this.pushText.emit(text);
    }
  }
}
