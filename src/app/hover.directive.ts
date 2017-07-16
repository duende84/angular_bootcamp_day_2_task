import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({ 
  selector: '[appHover]' 
})
export class HoverDirective {
    @Input() appHover: string;

    @HostListener('mouseover') onmouseover() {
      this.hover(this.appHover || '24px');
    }

    @HostListener('mouseout') onmouseout() {
      this.hover('16px');
    }

    constructor(private elementRef: ElementRef) { }
    
    private hover(fontSize:string) {
      this.elementRef.nativeElement.style.fontSize = fontSize;
    }
}
