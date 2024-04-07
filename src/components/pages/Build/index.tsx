import React from 'react';
import './Build.scss';
import { Box, Button, Container, Grid, Switch } from '@mui/material';

export default function Build() {
  return (
    <Container className='builder'>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        <Grid item xs={1} md={6}>
          <Box className='pizza-container' mb={5}>
            <img className='pizza' src='/builder/crust.png' alt='pizza crust' />
          </Box>
          <div className='cta'>
            <h2>Pizza looks good?</h2>
            <Button variant='outlined' size='large' color='inherit'>
              Add to Cart
            </Button>
            <p>or</p>
            <Button variant='contained' size='large'>
              Proceed to Checkout
            </Button>
          </div>
        </Grid>
        <Grid item xs={1} md={6}>
          <h1 className='mb-5'>
            Go on then.
            <br />
            Start working on your Pizza!
          </h1>
          <p>Add ingredients to your pizza</p>
          <div className='options'>
            <div className='option-section'>
              <h3>Sauce</h3>
              <div className='switch-group'>
                <span>Tomato</span>
                <Switch />
                <span>Alfredo</span>
              </div>
            </div>
            <div className='option-section'>
              <h3>Toppings</h3>
              <div className='toppings-group'>
                <h4>
                  Cheese <span>(Choone one)</span>
                </h4>
                <div className='switch-group'>
                  <Switch />
                  <span>Cheddar</span>
                </div>
                <div className='switch-group'>
                  <Switch />
                  <span>Mozzarella</span>
                </div>
                <div className='switch-group'>
                  <Switch />
                  <span>Parmesan</span>
                </div>
              </div>
              <div className='toppings-group'>
                <h4>
                  Meats <span>($1.25 ceach)</span>
                </h4>
                <div className='switch-group'>
                  <Switch />
                  <span>Pepperoni</span>
                </div>
                <div className='switch-group'>
                  <Switch />
                  <span>Ham</span>
                </div>
                <div className='switch-group'>
                  <Switch />
                  <span>Bacon</span>
                </div>
                <div className='switch-group'>
                  <Switch />
                  <span>Chicken</span>
                </div>
              </div>
              <div className='toppings-group'>
                <h4>
                  Veggies <span>($0.75 ceach)</span>
                </h4>
                <div className='switch-group'>
                  <Switch />
                  <span>Tomatoes</span>
                </div>
                <div className='switch-group'>
                  <Switch />
                  <span>Onions</span>
                </div>
                <div className='switch-group'>
                  <Switch />
                  <span>Bell Peppers</span>
                </div>
                <div className='switch-group'>
                  <Switch />
                  <span>Mushrooms</span>
                </div>
                <div className='switch-group'>
                  <Switch />
                  <span>Black Olives</span>
                </div>
                <div className='switch-group'>
                  <Switch />
                  <span>Pineapples</span>
                </div>
              </div>
            </div>
          </div>
        </Grid>
      </Grid>
    </Container>
  );
}
