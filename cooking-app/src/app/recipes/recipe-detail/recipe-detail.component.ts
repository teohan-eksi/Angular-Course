import { Component, Input } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent {
  isOpen: boolean = false;

  //got recipe from RecipesComponent
  @Input() recipe: Recipe;
  
  onManageRecipe(){
    this.isOpen = !this.isOpen;
  }
}
