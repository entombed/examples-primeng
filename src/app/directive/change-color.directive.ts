import { Directive, ElementRef, HostListener, Input, OnInit, OnChanges } from '@angular/core';

@Directive({
  selector: '[appChangeColor]'
})

export class ChangeColorDirective {
  constructor(public element: ElementRef) { 
    // this.element.nativeElement.style.backgroundColor = 'yellow';
  }
  
  ngOnInit(){
    this.highlight(this.setColor)
  }
  ngOnChanges(){
    this.highlight(this.setColor)
  }


  @Input() setColor: string;

  @HostListener('mouseup') onmouseup() {
    this.highlight('');
  }
  // @HostListener('mouseleave') onmouseleave() {
  //   this.highlight('red');
  // }
  // @HostListener('mouseup') onmouseup() {
  //   this.highlight('blue');
  // }
  // @HostListener('mousedown') onmousedown() {
  //   this.highlight('green');
  // }


  public highlight(color){
    this.element.nativeElement.style.backgroundColor = color;
    // this.element.nativeElement.classList.add('color-changed');
    // if(this.element.nativeElement.classList.contains('color-changed')){
    //   console.log('QQQ')
    // }
  }
}
