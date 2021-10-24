import { Component } from "@angular/core";
import { Ingredient } from "../shared/ingredients.modal";



@Component({
    selector: 'app-shopping-list',
    templateUrl: 'shopping-list.component.html'
})

export class ShoppingListComponent{
    ingredients: Ingredient[] = [
        new Ingredient("potatoes", 2),
        new Ingredient("tomatoes", 2)
    ];

}