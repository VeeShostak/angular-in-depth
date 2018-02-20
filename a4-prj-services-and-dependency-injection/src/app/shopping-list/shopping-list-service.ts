import { Ingredient } from '../shared/ingredient.model';

export class ShoppingListService {


    private ingredients: Ingredient[] = [
        new Ingredient('Broccoli', 7),
        new Ingredient('Apples', 3)
    ];

    getIngredients() {
        return this.ingredients.slice(); //return copy
    }

    addIngredient(ingredient: Ingredient) {
        this.ingredients.push(ingredient);
        this.ingredientsChanged.emit(this.ingredients.slice());
      }



    
}