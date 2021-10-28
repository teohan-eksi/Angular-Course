import { Component } from "@angular/core";
import { RecipeService } from "src/app/services/recipe.service";

import { Recipe } from '../recipe.model';

@Component({
    selector: 'app-recipe-list',
    templateUrl: 'recipe-list.component.html'
})

export class RecipeListComponent{
    recipes: Recipe[];

    constructor(private recipeService: RecipeService){}

    ngOnInit(){
        this.recipes = this.recipeService.getRecipes();
    }
}
