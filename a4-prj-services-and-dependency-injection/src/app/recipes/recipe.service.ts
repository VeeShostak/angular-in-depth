export class ReciperService {

    private recipes: Recipe[] = [
        new Recipe('name of recipe', 'this is descr of recime', 'https://static01.nyt.com/images/2015/08/14/dining/14ROASTEDSALMON/14ROASTEDSALMON-articleLarge.jpg'),
        new Recipe('name of second recipe', 'this is descr of recime', 'https://static01.nyt.com/images/2015/08/14/dining/14ROASTEDSALMON/14ROASTEDSALMON-articleLarge.jpg')
      ];

    getRecipes() {
        // return copy of the array
        return this.recipes.slice();
    }
}