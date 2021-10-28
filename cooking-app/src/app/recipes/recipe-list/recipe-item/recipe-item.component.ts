import { Component, Input } from '@angular/core';
import { Recipe } from '../../recipe.model';

import { RecipeService } from 'src/app/services/recipe.service'; 

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent {
  @Input() recipe: Recipe;

  constructor(private recipeService: RecipeService) {}

  //send recipe to RecipeService
  recipeClicked(event: Event, recipe: Recipe){
    event.preventDefault();
    this.recipeService.sendRecipe(recipe);
  }

}
