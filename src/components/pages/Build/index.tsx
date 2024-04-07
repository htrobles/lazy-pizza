import React, { useState } from 'react';
import './Build.scss';
import {
  Box,
  Button,
  Container,
  Grid,
  Radio,
  RadioGroup,
  Switch,
} from '@mui/material';
import PizzaPreview from '../../common/PizzaPreview';
import { ECheese, EMeat, ESauce, EVeggie } from '../../../enums';
import { useNavigate } from 'react-router-dom';

const sauceChoices = [
  {
    key: ESauce.tomato,
    label: 'Tomato',
  },
  {
    key: ESauce.alfredo,
    label: 'Alfredo',
  },
];

const cheeseChoices = [
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

const meatChoices = [
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

const veggieChoices = [
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

export default function Build() {
  const [sauce, setSauce] = useState<ESauce>(ESauce.tomato);
  const [cheese, setCheese] = useState<ECheese>(ECheese.mozzarella);
  const [meats, setMeats] = useState<EMeat[]>([]);
  const [veggies, setVeggies] = useState<EVeggie[]>([]);

  const navigate = useNavigate();

  const handleAddtoCart = () => {
    const pizza = {
      sauce,
      cheese,
      meats,
      veggies,
    };

    const cart = JSON.parse(localStorage.getItem('cart') as string);

    if (!cart) {
      console.log(cart);
      localStorage.setItem('cart', JSON.stringify([pizza]));
    } else {
      console.log(cart);
      localStorage.setItem('cart', JSON.stringify([...cart, pizza]));
    }

    setSauce(ESauce.tomato);
    setCheese(ECheese.mozzarella);
    setMeats([]);
    setVeggies([]);
  };

  const handleProceedToCheckout = () => {
    handleAddtoCart();
    navigate('/checkout');
  };

  return (
    <Container className='builder'>
      <Grid container spacing={10} columns={{ xs: 4, sm: 8, md: 12 }}>
        <Grid item xs={12} md={6} order={{ xs: 2, md: 1 }}>
          <Box className='pizza-container' mb={5}>
            <PizzaPreview
              sauce={sauce}
              cheese={cheese}
              meats={meats}
              veggies={veggies}
            />
          </Box>
          <div className='cta'>
            <h2>Pizza looks good?</h2>
            <Button
              variant='outlined'
              size='large'
              color='inherit'
              onClick={handleAddtoCart}
            >
              Add to Cart
            </Button>
            <p>or</p>
            <Button
              variant='contained'
              size='large'
              onClick={handleProceedToCheckout}
            >
              Proceed to Checkout
            </Button>
          </div>
        </Grid>
        <Grid item xs={12} md={6} order={{ xs: 1, md: 2 }}>
          <h1 className='mb-5'>
            Go on then.
            <br />
            Start working on your Pizza!
          </h1>
          <p>Add ingredients to your pizza</p>
          <div className='options'>
            <div className='option-section'>
              <h3>Sauce</h3>
              <RadioGroup
                defaultValue='outlined'
                name='sauce'
                value={sauce}
                onChange={(e, value) => setSauce(value as ESauce)}
              >
                {sauceChoices.map(({ key, label }) => (
                  <div key={key}>
                    <Radio
                      className='ingredient-radio'
                      value={key}
                      color='primary'
                    />
                    <span>{label}</span>
                  </div>
                ))}
              </RadioGroup>
            </div>
            <div className='option-section'>
              <h3>Toppings</h3>
              <div className='toppings-group'>
                <h4>
                  Cheese <span>(Choone one)</span>
                </h4>
                <RadioGroup
                  defaultValue='outlined'
                  name='cheese'
                  value={cheese}
                  onChange={(e, value) => setCheese(value as ECheese)}
                >
                  {cheeseChoices.map(({ key, label }) => (
                    <div key={key}>
                      <Radio
                        className='ingredient-radio'
                        value={key}
                        color='primary'
                      />
                      <span>{label}</span>
                    </div>
                  ))}
                </RadioGroup>
              </div>
              <div className='toppings-group'>
                <h4>
                  Meats <span>($1.25 ceach)</span>
                </h4>
                {meatChoices.map(({ key, label }) => (
                  <div key={key}>
                    <Switch
                      onChange={(e, checked) => {
                        if (checked) {
                          setMeats([...meats, key]);
                        } else {
                          setMeats(meats.filter((m) => m !== key));
                        }
                      }}
                      checked={!!meats.find((m) => m === key)}
                    />
                    <span>{label}</span>
                  </div>
                ))}
              </div>
              <div className='toppings-group'>
                <h4>
                  Veggies <span>($0.75 ceach)</span>
                </h4>
                {veggieChoices.map(({ key, label }) => (
                  <div key={key}>
                    <Switch
                      onChange={(e, checked) => {
                        if (checked) {
                          setVeggies([...veggies, key]);
                        } else {
                          setVeggies(veggies.filter((v) => v !== key));
                        }
                      }}
                      checked={!!veggies.find((v) => v === key)}
                    />
                    <span>{label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Grid>
      </Grid>
    </Container>
  );
}
