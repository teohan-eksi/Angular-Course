import { Injectable } from "@angular/core";
import { Ingredient } from "../shared/ingredients.modal";

@Injectable({providedIn: 'root'})//makes it application wide
export class ShoppingService{

    private ingredients: Ingredient[] = [
        new Ingredient("potatoes", 2),
        new Ingredient("tomatoes", 2)
    ];

    ingredientsCopy: Ingredient[];
    getIngredients(){
        /*this.ingredientsCopy = this.ingredients.slice();
        return this.ingredientsCopy;*/
        return this.ingredients;        
    }

    addIngredient(ingredient: Ingredient){
        //this.ingredientsCopy.push(ingredient);
        this.ingredients.push(ingredient);
    }


}