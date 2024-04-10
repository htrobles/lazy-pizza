import React from 'react';
import { Button, Grid } from '@mui/material';
import PizzaPreview from '../../../common/PizzaPreview';
import { ECheese, EMeat, ESauce, EVeggie } from '../../../../enums';
import { ingredients } from '../../../../ingredients';
import { Pizza } from '../../../../types';
import './CartItem.scss';
import { formatPrice } from '../../../../utils';

const getIngredientLabel = (key: ESauce | ECheese | EMeat | EVeggie) => {
  return ingredients.find((ingredient) => ingredient.key === key)?.label;
};
const getPizzaIngredientLabels = (meats: EMeat[], veggies: EVeggie[]) => {
  const labels = [...meats, ...veggies].map((i) => getIngredientLabel(i));

  return labels.join(', ');
};

export interface CartItemType {
  index: number;
  price: number;
  pizza: Pizza;
}

interface CartItemProps {
  cartItem: CartItemType;
  onRemove: (index: number) => void;
}

export default function CartItem({ cartItem, onRemove }: CartItemProps) {
  const { pizza, index, price } = cartItem;

  const { sauce, cheese, meats, veggies } = pizza;

  console.log(price);

  return (
    <div className='pizza-container'>
      <Grid container spacing={4}>
        <Grid item xs={6}>
          <PizzaPreview
            sauce={sauce}
            cheese={cheese}
            meats={meats}
            veggies={veggies}
          />
        </Grid>
        <Grid item xs={6}>
          <h3>
            Pizza {index + 1} - ${formatPrice(price)}
          </h3>
          <p>
            <b>Sauce:</b> {getIngredientLabel(sauce)}
          </p>
          <p>
            <b>Cheese:</b> {getIngredientLabel(cheese)}
          </p>
          <p>
            <b>Ingredients:</b>{' '}
            {getPizzaIngredientLabels(meats as EMeat[], veggies as EVeggie[])}
          </p>
          <Button
            variant='outlined'
            color='inherit'
            onClick={() => onRemove(index)}
          >
            Remove Pizza
          </Button>
        </Grid>
      </Grid>
    </div>
  );
}
