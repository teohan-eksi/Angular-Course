import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Recipe } from '../../recipe.model';

import { SelectRecipeService } from 'src/app/services/select-recipe.service'; 

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent {
  @Input() recipe: Recipe;

  constructor(private selectRecipeService: SelectRecipeService) {}

  //send recipe to SelectRecipeService
  recipeClicked(event: Event, recipe: Recipe){
    event.preventDefault();
    this.selectRecipeService.sendRecipe(recipe);
  }



}
