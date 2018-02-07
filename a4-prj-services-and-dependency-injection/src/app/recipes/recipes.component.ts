import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';
import { RecipeService, ReciperService } from './recipe.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
  providers: [RecipeService] // passed down to all child components
})
export class RecipesComponent implements OnInit {
  selectedRecipe: Recipe;

  constructor(private recipeService: ReciperService) { }

  ngOnInit() {
    // subscribe to (the event) changes to display in recipe-deatial if user selected
    this.recipeService.recipeSelected.subscribe(
      (recipe: Recipe) => {
        this.selectedRecipe = recipe;
      }
    );
  }

}
