import { Component, ContentChild, ElementRef, Input} from "@angular/core";



@Component({
    selector: 'app-show-item',
    templateUrl: 'show-item.component.html'
})

export class ShowItemComponent{
    @Input() serverElementsArray = [];
    
    @ContentChild('contentParagraph', {static: false}) paragraph: ElementRef;

    ngOnInit(){
        console.log("ShowItemComponent init");
    }
}