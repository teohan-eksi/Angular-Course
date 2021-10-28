import { Injectable, Output, EventEmitter } from "@angular/core";
import { Ingredient } from "../shared/ingredients.modal";

@Injectable({providedIn: 'root'})//makes it application wide
export class ShoppingService{

    private ingredients: Ingredient[] = [
        new Ingredient("potatoes", 2),
        new Ingredient("tomatoes", 2)
    ];

    @Output() ingredientsEmitter = new EventEmitter<Ingredient[]>();

    getIngredients(){
        return this.ingredients.slice();        
    }

    addIngredient(ingredient: Ingredient){
        this.ingredients.push(ingredient);
        this.ingredientsEmitter.emit(this.ingredients.slice());
    }

    addIngredients(ingredients: Ingredient[]){
        this.ingredients.push(...ingredients);
        this.ingredientsEmitter.emit(this.ingredients.slice());
    }

}