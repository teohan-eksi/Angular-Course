import { Component, ElementRef, EventEmitter, Output, ViewChild } from "@angular/core";
import { Ingredient } from "src/app/shared/ingredients.modal";



@Component({
    selector: 'app-shopping-edit',
    templateUrl: 'shopping-edit.component.html'
})

export class ShoppingEditComponent{

    @ViewChild('nameInput', {static: true}) nameInputElem: ElementRef;
    @ViewChild('amountInput', {static: true}) amountInputElem: ElementRef

    @Output() ingredientEmitter = new EventEmitter<Ingredient>();

    onAddButton(){
        //send ingredient to ShoppingListComponent
        if(this.nameInputElem.nativeElement.value != ""){
            this.ingredientEmitter.emit( new Ingredient(this.nameInputElem.nativeElement.value,
                this.amountInputElem.nativeElement.value));
        }
        
        //clean input fields after sending values.
        this.nameInputElem.nativeElement.value = "";
        this.amountInputElem.nativeElement.value = "";
    }
}