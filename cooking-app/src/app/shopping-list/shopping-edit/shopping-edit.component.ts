import { Component, ElementRef, ViewChild } from "@angular/core";
import { Ingredient } from "src/app/shared/ingredients.modal";
import { ShoppingService } from "src/app/services/shopping.service";


@Component({
    selector: 'app-shopping-edit',
    templateUrl: 'shopping-edit.component.html'
})

export class ShoppingEditComponent{

    @ViewChild('nameInput', {static: true}) nameInputElem: ElementRef;
    @ViewChild('amountInput', {static: true}) amountInputElem: ElementRef

    constructor(private shoppingService: ShoppingService){}

    onAddButton(){
        //send ingredient to ShoppingService and add it to ingredients array there.
        if(this.nameInputElem.nativeElement.value != ""){
            this.shoppingService.addIngredient( new Ingredient(this.nameInputElem.nativeElement.value,
                this.amountInputElem.nativeElement.value));
        }
        
        //clean input fields after sending values.
        this.nameInputElem.nativeElement.value = "";
        this.amountInputElem.nativeElement.value = "";
    }
}