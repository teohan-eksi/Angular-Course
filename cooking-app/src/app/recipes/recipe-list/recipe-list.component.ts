import { Component } from "@angular/core";

import { Recipe } from '../recipe.model';

@Component({
    selector: 'app-recipe-list',
    templateUrl: 'recipe-list.component.html'
})

export class RecipeListComponent{
    recipes: Recipe[] = [
        new Recipe("Test recipe", "description of the test recipe",
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.Re8FcdH8gx_bTC2RcVfFCAHaHa%26pid%3DApi&f=1"),
        new Recipe("Test recipe2", "description of the test recipe2",
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.Re8FcdH8gx_bTC2RcVfFCAHaHa%26pid%3DApi&f=1")
    ];

}