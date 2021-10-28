import { EventEmitter, Injectable, Output } from "@angular/core";
import { Recipe } from "../recipes/recipe.model";
import { Ingredient } from "../shared/ingredients.modal";

@Injectable()
export class RecipeService{

    @Output() sendRecipeEmitter = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        new Recipe(
            "Test recipe", 
            "description of the test recipe",
            "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.Re8FcdH8gx_bTC2RcVfFCAHaHa%26pid%3DApi&f=1",
            [
                new Ingredient("ingredient", 4),
                new Ingredient("ingredient", 4)
            ]
        ),
        new Recipe(
            "Test recipe2", 
            "description of the test recipe2",
            "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.Re8FcdH8gx_bTC2RcVfFCAHaHa%26pid%3DApi&f=1",
            [
                new Ingredient("ingredient", 4),
                new Ingredient("ingredient", 4)
            ]
        )
    ];

    getRecipes(){
        //returns a new array that is the same with the recipes array but with a different reference.
        return this.recipes.slice();
    }

    sendRecipe(recipe: Recipe){
       this.sendRecipeEmitter.emit(recipe); 
    }

}