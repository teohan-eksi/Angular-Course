import { Directive, Input, TemplateRef, ViewContainerRef } from "@angular/core";



@Directive({
    // [] makes it a property
    selector: '[appUnless]'
})

export class UnlessDirective{
    //variable name must be same with the selector
    @Input() set appUnless(condition: boolean){
        if(!condition){
            this.vcRef.createEmbeddedView(this.templateRef);
        }else{
            this.vcRef.clear();
        }
    }

    constructor(private templateRef: TemplateRef<any>, private vcRef: ViewContainerRef){}
}