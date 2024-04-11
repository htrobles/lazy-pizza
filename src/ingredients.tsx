import { ECheese, EMeat, ESauce, EVeggie } from './enums';
import { Ingredient } from './types';

export const sauceChoices: Ingredient<ESauce>[] = [
  {
    key: ESauce.tomato,
    label: 'Tomato',
  },
  {
    key: ESauce.alfredo,
    label: 'Alfredo',
  },
];

export const cheeseChoices: Ingredient<ECheese>[] = [
  {
    key: ECheese.mozzarella,
    label: 'Mozzarella',
  },
  {
    key: ECheese.cheddar,
    label: 'Cheddar',
  },
  {
    key: ECheese.parmesan,
    label: 'Parmesan',
  },
];

export const meatChoices: Ingredient<EMeat>[] = [
  {
    key: EMeat.pepperoni,
    label: 'Pepperoni',
  },
  {
    key: EMeat.ham,
    label: 'Ham',
  },
  {
    key: EMeat.bacon,
    label: 'Bacon',
  },
  {
    key: EMeat.chicken,
    label: 'Chicken',
  },
  {
    key: EMeat.shrimp,
    label: 'Shrimp',
  },
];

export const veggieChoices: Ingredient<EVeggie>[] = [
  {
    key: EVeggie.tomatoes,
    label: 'Tomatoes',
  },
  {
    key: EVeggie.onions,
    label: 'Onions',
  },
  {
    key: EVeggie.bell_peppers,
    label: 'Bell Peppers',
  },
  {
    key: EVeggie.mushrooms,
    label: 'Mushrooms',
  },
  {
    key: EVeggie.black_olives,
    label: 'Black Olives',
  },
  {
    key: EVeggie.pineapples,
    label: 'Pineapples',
  },
];

export const ingredients = [
  ...sauceChoices,
  ...cheeseChoices,
  ...meatChoices,
  ...veggieChoices,
];

export interface AlertType {
  type: 'error' | 'success';
  message: string;
}
