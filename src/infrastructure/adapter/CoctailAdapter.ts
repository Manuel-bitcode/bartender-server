import { Ingredients } from "../../domain/entities/Coctail";
import { CoctailDTO } from "../repositories/types";
import { cleanEmptyValues } from "../../helpers";

const mapIngredients = (cocktail: CoctailDTO): Ingredients[] => {
  return Object.keys(cocktail)
    .filter(key => key.startsWith('strIngredient'))
    .map(key => {
      const index = key.replace('strIngredient', '');
      return {
        name: cocktail[`strIngredient${index}` as keyof CoctailDTO],
        measure: cocktail[`strMeasure${index}` as keyof CoctailDTO]
      };
    })
    .filter(({ name, measure }) => name && measure);
};

export const coctailDbToCoctail = (coctail: CoctailDTO) => {
  const coctaiDbcleaned = cleanEmptyValues(coctail);
  const ingredients = mapIngredients(coctaiDbcleaned);
  return {
    id: coctaiDbcleaned.idDrink,
    name: coctaiDbcleaned.strDrink,
    category: coctaiDbcleaned.strCategory,
    instructions: coctaiDbcleaned.strInstructionsES,
    image: coctaiDbcleaned.strDrinkThumb,
    ingredients
  }
}
