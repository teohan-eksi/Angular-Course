import { Component, Input} from "@angular/core";



@Component({
    selector: 'app-show-item',
    templateUrl: 'show-item.component.html'
})

export class ShowItemComponent{
    @Input() serverElementsArray = [];
    
}