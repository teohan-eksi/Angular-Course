import { Directive, ElementRef, HostBinding, HostListener, OnInit, Renderer2 } from "@angular/core";

@Directive({
    selector: '[appBasicHighlight]'
})

export class BasicHighlightDirective implements OnInit{
    @HostBinding('style.backgroundColor') backgroundColor: string = 'blue';
    
    constructor(private elementRef: ElementRef, private renderer: Renderer2){
        
    }

    //use renderer for any DOM manipulations
    ngOnInit(){
        this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'blue');
        this.renderer.setStyle(this.elementRef.nativeElement, 'color', 'white');
    }
    
    @HostListener('mouseenter') mouseHoverEnter(event: Event){
        this.backgroundColor = 'green';
        this.renderer.setStyle(this.elementRef.nativeElement, 'color', 'white');
    }

    @HostListener('mouseleave') mouseHoverLeave(event: Event){
        this.backgroundColor = 'blue';
        this.renderer.setStyle(this.elementRef.nativeElement, 'color', 'white');
    }
}