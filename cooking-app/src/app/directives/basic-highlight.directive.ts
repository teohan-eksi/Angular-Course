import { Directive, ElementRef, HostListener, OnInit, Renderer2 } from "@angular/core";

@Directive({
    selector: '[appBasicHighlight]'
})

export class BasicHighlightDirective implements OnInit{
    constructor(private elementRef: ElementRef, private renderer: Renderer2){
        
    }

    //use renderer for any DOM manipulations
    ngOnInit(){
        this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'blue');
        this.renderer.setStyle(this.elementRef.nativeElement, 'color', 'white');
    }
    
    @HostListener('mouseenter') mouseHoverEnter(event: Event){
        this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'green');
        this.renderer.setStyle(this.elementRef.nativeElement, 'color', 'white');
    }

    @HostListener('mouseleave') mouseHoverLeave(event: Event){
        this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'blue');
        this.renderer.setStyle(this.elementRef.nativeElement, 'color', 'white');
    }
}