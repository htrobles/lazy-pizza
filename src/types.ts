import { ECheese, EMeat, ESauce, EVeggie } from './enums';

export interface Ingredient<IngredientEnum> {
  key: IngredientEnum;
  label: string;
}

export interface Pizza {
  sauce: ESauce;
  cheese: ECheese;
  meats?: EMeat[];
  veggies?: EVeggie[];
}
