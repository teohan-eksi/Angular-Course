import { Output, EventEmitter, Injectable } from "@angular/core";
import { Recipe } from "../recipes/recipe.model";

@Injectable()

export class SelectRecipeService {
   
    @Output() sendRecipeEmitter = new EventEmitter<Recipe>();
    testVar: number = 0;

    sendRecipe(recipe: Recipe){
        this.sendRecipeEmitter.emit(recipe);
    }
}