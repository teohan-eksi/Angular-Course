import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Recipe } from '../../recipe.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  @Input() recipe: Recipe;
  @Output() sendRecipe = new EventEmitter<Recipe>();

  constructor() { }

  ngOnInit(): void {
  }

  //send recipe to RecipeListComponent
  recipeClicked(event: Event, recipe: Recipe){
    event.preventDefault();
    this.sendRecipe.emit(recipe);    
  }

}
