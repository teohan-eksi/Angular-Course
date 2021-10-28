import { Component } from "@angular/core";
import { RecipeService } from "../services/recipe.service";
import { Recipe } from "./recipe.model";

@Component({
    selector: 'app-recipes',
    templateUrl: 'recipes.component.html',
    providers: [RecipeService]
})

export class RecipesComponent{
    recipe: Recipe;

    constructor(private recipeService: RecipeService){}

    ngOnInit(){
        this.recipeService.sendRecipeEmitter.subscribe((recipe: Recipe)=>{
            this.recipe = recipe;
        });
    }
}