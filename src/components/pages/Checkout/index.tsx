import { useEffect, useState } from 'react';
import { Pizza } from '../../../types';
import { useNavigate } from 'react-router-dom';
import { Alert, Container, Grid, Snackbar } from '@mui/material';
import CartItem, { CartItemType } from './CartItem';
import PaymentForm, { FormInputType } from './PaymentForm';
import { addDoc, collection } from 'firebase/firestore';
import { db } from '../../../firebase';
import useProfile from '../../../hooks/useProfile';

const getPizzaPrice = ({ meats, veggies }: Pizza) => {
  const meatPrice = (meats?.length || 0) * 1.25;
  const veggiesPrice = (veggies?.length || 0) * 0.75;

  return meatPrice + veggiesPrice + 10;
};

interface Message {
  type: 'success' | 'error';
  message: string;
}

export default function Checkout() {
  const { myProfile } = useProfile();
  const navigate = useNavigate();
  const [alert, setAlert] = useState<Message | null>();

  const cartPizzas: CartItemType[] = localStorage.getItem('cart')
    ? JSON.parse(localStorage.getItem('cart') as string).map(
        (pizza: Pizza) => ({
          pizza,
          price: getPizzaPrice(pizza),
        })
      )
    : null;

  const [cart, setCart] = useState<CartItemType[]>(cartPizzas);

  const handleRemovePizza = (index: number) => {
    const newCart = [...cart];

    newCart.splice(index, 1);
    localStorage.setItem('cart', JSON.stringify(newCart));

    setCart(newCart);
  };

  useEffect(() => {
    if (!cartPizzas?.length) {
      navigate('/build');
    }
  }, [cartPizzas?.length, navigate]);

  if (!cart?.length) {
    return null;
  }

  const total = cart.reduce((prev, curr) => prev + curr.price, 0);

  const handleSubmit = async (input: FormInputType) => {
    const {
      line1,
      line2,
      city,
      province,
      cardNumber,
      expiry,
      cvv,
      paymentType,
    } = input;

    if (!line1 || !line2 || !city || !province) {
      setAlert({ type: 'error', message: 'Please provide complete address' });
      return false;
    }

    if (paymentType === 'card' && (!cardNumber || !expiry || !cvv)) {
      setAlert({
        type: 'error',
        message: 'Please provide complete card details',
      });
      return false;
    }

    const data = {
      items: cart,
      total: total,
      email: myProfile?.email,
      address: {
        line1,
        line2,
        city,
        province,
      },
      orderDate: new Date().toISOString(),
      paymentType,
    };

    const docRef = await addDoc(collection(db, 'orders'), data);

    localStorage.removeItem('cart');

    navigate(`/orders/${docRef.id}`);

    setAlert({
      type: 'success',
      message: 'Your order has been placed. Thank you!',
    });

    return true;
  };

  return (
    <Container>
      <Snackbar
        open={!!alert}
        onClose={() => setAlert(null)}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        autoHideDuration={5000}
      >
        <Alert
          // variant='filled'
          severity={alert?.type}
          action={
            alert?.type === 'success' ? <Grid container gap={2}></Grid> : null
          }
        >
          {alert?.message}
        </Alert>
      </Snackbar>
      <Grid container spacing={10}>
        <Grid item xs={12} md={6}>
          <PaymentForm onSubmit={handleSubmit} total={total} />
        </Grid>
        <Grid item xs={12} md={6}>
          {cart.map((cartItem, index) => (
            <CartItem
              key={`cart-item-${index}`}
              cartItem={cartItem}
              onRemove={handleRemovePizza}
              index={index}
            />
          ))}
        </Grid>
      </Grid>
    </Container>
  );
}
