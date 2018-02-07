import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  

  recipes: Recipe[];

  // inject our service (here we use shorthand that create a private var an assigns it)
  constructor(private recipeService: RecipeService) { 
  }

  ngOnInit() {
    this.recipes = this.recipeService.getRecipes();
  }



}
