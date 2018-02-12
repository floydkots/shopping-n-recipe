import {Recipe} from './recipe.model';
import {EventEmitter} from '@angular/core';

export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is simply a test', 'http://www.bluepoppy.com/images/TAOC.jpg'),
    new Recipe('Another Test Recipe', 'This is simply a test', 'http://www.bluepoppy.com/images/TAOC.jpg')
  ];

  getRecipes() {
    return this.recipes.slice();
  }
}
