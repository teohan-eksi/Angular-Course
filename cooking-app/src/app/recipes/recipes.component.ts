import { Component } from "@angular/core";
import { Recipe } from "./recipe.model";



@Component({
    selector: 'app-recipes',
    templateUrl: 'recipes.component.html'
})

export class RecipesComponent{
    recipe: Recipe;

    //get recipe from RecipeListComponent
    getRecipe(recipe){
       this.recipe = recipe; 
    }
}