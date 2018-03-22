import { EventEmitter } from '@angular/core';

import { Recipe } from './recipe.model';

export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        new Recipe('A test Recipe', 'This is a simply test', 'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg' ),
        new Recipe('Another test Recipe', 'This is a simply test', 'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg' )
      ];

    getRecipes() {
        console.log('getRecipes()');
        return this.recipes.slice();
    }
}
