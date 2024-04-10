import { useState } from 'react';
import './Build.scss';
import {
  Alert,
  Box,
  Button,
  Container,
  Grid,
  Icon,
  Radio,
  RadioGroup,
  Snackbar,
  Switch,
} from '@mui/material';
import PizzaPreview from '../../common/PizzaPreview';
import { ECheese, EMeat, ESauce, EVeggie } from '../../../enums';
import { useNavigate } from 'react-router-dom';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import {
  AlertType,
  cheeseChoices,
  meatChoices,
  sauceChoices,
  veggieChoices,
} from '../../../ingredients';

export default function Build() {
  const [sauce, setSauce] = useState<ESauce>(ESauce.tomato);
  const [cheese, setCheese] = useState<ECheese>(ECheese.mozzarella);
  const [meats, setMeats] = useState<EMeat[]>([]);
  const [veggies, setVeggies] = useState<EVeggie[]>([]);
  const [alert, setAlert] = useState<AlertType | null>(null);

  const navigate = useNavigate();

  const handleAddtoCart = () => {
    setAlert(null);

    const pizza = {
      sauce,
      cheese,
      meats,
      veggies,
    };

    if (!meats.length && !veggies.length) {
      return setAlert({
        type: 'error',
        message: 'Please consider adding at least one topping',
      });
    }

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
    setAlert({
      type: 'success',
      message: 'Your custom pizza has been added to your cart.',
    });
  };

  return (
    <>
      <Container className='builder'>
        <Snackbar
          open={!!alert}
          onClose={() => setAlert(null)}
          anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
          autoHideDuration={alert?.type === 'error' ? 5000 : null}
        >
          <Alert
            // variant='filled'
            severity={alert?.type}
            action={
              alert?.type === 'success' ? (
                <Grid container gap={2}>
                  <Button
                    color='inherit'
                    size='small'
                    variant='outlined'
                    onClick={() => navigate('/checkout')}
                    endIcon={
                      <Icon>
                        <ShoppingCartCheckoutIcon />
                      </Icon>
                    }
                  >
                    Checkout
                  </Button>
                </Grid>
              ) : null
            }
          >
            {alert?.message}
          </Alert>
        </Snackbar>
        <Grid container spacing={10} columns={{ xs: 4, sm: 8, md: 12 }}>
          <Grid item xs={12} md={6} order={{ xs: 2, md: 1 }}>
            <Box mb={5} className='pizza-container'>
              <PizzaPreview
                sauce={sauce}
                cheese={cheese}
                meats={meats}
                veggies={veggies}
              />
              <div className='cta'>
                <h2>Pizza looks good?</h2>
                <Button
                  variant='contained'
                  size='large'
                  color='primary'
                  onClick={handleAddtoCart}
                >
                  Add to Cart
                </Button>
              </div>
            </Box>
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
    </>
  );
}
