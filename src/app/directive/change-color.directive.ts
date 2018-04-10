import { Directive, ElementRef, HostListener, Input, OnInit, OnChanges } from '@angular/core';

@Directive({
  selector: '[appChangeColor]'
})

export class ChangeColorDirective {
  constructor(private element: ElementRef) { 
    // this.element.nativeElement.style.backgroundColor = 'yellow';
  }
  
  // ngOnInit(){
  //   this.setBgColor(this.setColor)
  // }

  ngOnChanges(){
    this.setBgColor(this.setColor)
  }

  @Input() setColor: string;

  @HostListener('mouseenter') onmouseenter() {
    this.fontColor('#ffffff');
  }

  @HostListener('mouseleave') onmouseleave() {
    this.fontColor('');
  }

  private fontColor(size){
    this.element.nativeElement.style.color = size;
  }

  private setBgColor(color){
    this.element.nativeElement.style.backgroundColor = color;
  }
}
