import {Directive, ElementRef, HostListener, Input} from '@angular/core';

@Directive({
  selector: '[pkmBorderCard]'
})
export class BorderCardDirective {
  private initialColor: string ='#f5f5f5';
  private defaultColor: string ='#009688';
  private defaultHeigh: number = 180;

  constructor(private el:ElementRef) {
    this.setBorder(this.initialColor);
    this.setHeight(this.defaultHeigh);

  }
  @Input('pkmBorderCard') borderColor: string; // avec alias


  @HostListener('mouseenter') onMouseEnter() //mouse enter set new value
  {
    this.setBorder(this.borderColor || this.defaultColor); //on va garder la coleur par default avec un operator or

  }
  @HostListener('mouseleave') onMouseLeave() //when mouse leave set value like before
  {
    this.setBorder(this.initialColor);
  }
  private setBorder(color: string)
  {
    let border = 'solid 4 px ' + color;
    this.el.nativeElement.style.border = border;
  }
  private setHeight(height: number)
  {

    this.el.nativeElement.style.height = `${height}px`;
  }

}
