import { Directive, ElementRef, HostBinding, Renderer2 } from '@angular/core';


@Directive({
    selector: '[appDropdown]'
})

export class DropdownDirective{
    // [class.className] = condition
    //true means insert that class; false means removes that class.
    @HostBinding('class.open') showClass = false;

    constructor(elementRef: ElementRef, renderer: Renderer2){
        renderer.listen('window', 'click', (event: Event)=>{
            if(elementRef.nativeElement.contains(event.target)){
                //this means the element with DropdownDirective (host) was clicked.
                //toggle the menu between touches.
                this.showClass = !this.showClass;
            }else{
                //close the dropdown menu if clicked anywhere outside the host.
                this.showClass = false;
            }
        });
    }
}