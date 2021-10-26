import { Directive, TemplateRef, Input, ViewContainerRef, HostListener, HostBinding } from '@angular/core';


@Directive({
    selector: '[appDropdown]'
})

export class DropdownDirective{
    // [class.className] = condition
    @HostBinding('class.open') showClass = false;

    @HostListener('click') onHostClick(){
        this.showClass = !this.showClass;
    }
}