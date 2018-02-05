import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../../recipe.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {

  // take recipe as an input
  @Input() recipe: Recipe;

  // listen to this event from the outside. someone from outside can listen to this as its state changes
  @Output() recipeSelected = new EventEmitter<void>();

  constructor() { }

  ngOnInit() {
  }

  onSelected(){
    this.recipeSelected.emit();
  }

}
