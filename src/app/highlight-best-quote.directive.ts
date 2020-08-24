import { Directive,ElementRef ,HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlightBestQuote]'
})
export class HighlightBestQuoteDirective {

  constructor(private elem:ElementRef) { }

  @HostListener("click") onClicks(){
    this.backgroundColor("#f9c128")
  }

  @HostListener("dblclick") onDoubleClicks(){
    this.backgroundColor("None")
  }

  private backgroundColor(action:string){
  this.elem.nativeElement.style.backgroundColor='#f9c128';
}
}