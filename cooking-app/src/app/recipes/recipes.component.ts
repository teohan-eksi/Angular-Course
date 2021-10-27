import { Component } from "@angular/core";
import { Recipe } from "./recipe.model";

import { SelectRecipeService } from "../services/select-recipe.service";

@Component({
    selector: 'app-recipes',
    templateUrl: 'recipes.component.html',
    providers: [SelectRecipeService]
})

export class RecipesComponent{
    recipe: Recipe;

    constructor(private selectRecipeService: SelectRecipeService){}

    ngOnInit(){
        this.selectRecipeService.sendRecipeEmitter.subscribe((recipe: Recipe)=>{
            this.recipe = recipe;
        });
    }
}