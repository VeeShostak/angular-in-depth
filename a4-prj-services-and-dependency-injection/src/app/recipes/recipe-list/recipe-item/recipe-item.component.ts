import { Component, OnInit, Input} from '@angular/core';
import { Recipe } from '../../recipe.model';
import { ReciperService } from '../../recipe.service';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {

  // take recipe as an input
  @Input() recipe: Recipe;



  constructor(private recipeService: ReciperService) { }

  ngOnInit() {
  }

  onSelected(){
    // emit the recipe if user clicks on it
    this.recipeService.recipeSelected.emit(this.recipe);
  }

}
