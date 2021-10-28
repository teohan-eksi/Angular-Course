import { Component, Input } from '@angular/core';
import { ShoppingService } from 'src/app/services/shopping.service';
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
  
  constructor(private shoppingService:ShoppingService){}

  onManageRecipe(){
    this.isOpen = !this.isOpen;
  }

  onAddIngredients(){
    this.shoppingService.addIngredients(this.recipe.ingredients);
  }
}
