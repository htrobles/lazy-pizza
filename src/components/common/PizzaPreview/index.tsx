import React from 'react';
import './PizzaPreview.scss';
import { ECheese, EMeat, ESauce, EVeggie } from '../../../enums';

interface PizzPreviewProps {
  sauce?: ESauce;
  cheese?: ECheese;
  meats?: EMeat[];
  veggies?: EVeggie[];
}

export default function PizzaPreview({
  sauce,
  cheese,
  meats,
  veggies,
}: PizzPreviewProps) {
  return (
    <div className='pizza-preview'>
      <img className='pizza' src='/builder/crust.png' alt='pizza crust' />
      {sauce && (
        <img
          className='pizza-ingredient'
          src={`/builder/sauce-${sauce}.png`}
          alt='pizza crust'
        />
      )}
      {cheese && (
        <img
          className='pizza-ingredient'
          src={`/builder/cheese.png`}
          alt='pizza crust'
        />
      )}
      {meats?.length
        ? meats.map((meat) => (
            <img
              className='pizza-ingredient topping'
              src={`/builder/topping-meat-${meat}.png`}
              alt='pizza crust'
            />
          ))
        : null}
      {veggies?.length
        ? veggies.map((veggie) => (
            <img
              className='pizza-ingredient topping'
              src={`/builder/topping-veggies-${veggie}.png`}
              alt='pizza crust'
            />
          ))
        : null}
    </div>
  );
}
