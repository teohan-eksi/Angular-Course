import { Component, Input } from "@angular/core";
import { Ingredient } from "../shared/ingredients.modal";
import { ShoppingService } from "src/app/services/shopping.service";

@Component({
    selector: 'app-shopping-list',
    templateUrl: 'shopping-list.component.html'
})

export class ShoppingListComponent{
    ingredients: Ingredient[];

    constructor(private shoppingService: ShoppingService){}

    ngOnInit(){
        this.ingredients = this.shoppingService.getIngredients();
    }
}