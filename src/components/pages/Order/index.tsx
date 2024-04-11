import { Container, Grid } from '@mui/material';
import React, { useCallback, useEffect, useState } from 'react';
import { doc, getDoc } from 'firebase/firestore';
import { useParams } from 'react-router-dom';
import { db } from '../../../firebase';
import { Order as OrderType } from '../../../types';
import './Order.scss';
import PizzaPreview from '../../common/PizzaPreview';
import { formatPrice } from '../../../utils';

export default function Order() {
  const [order, setOrder] = useState<OrderType>();
  const [loading, setLoading] = useState(true);
  const { orderId } = useParams();

  const fetchOrder = useCallback(async () => {
    if (!orderId) return;

    try {
      const orderRef = doc(db, 'orders', orderId as string);

      // Fetch the document data
      const orderSnapshot = await getDoc(orderRef);

      // Check if the document exists
      if (orderSnapshot.exists()) {
        // Extract the data from the document snapshot
        const orderData = orderSnapshot.data();
        console.log(orderData);
        setOrder(orderData as OrderType);
      } else {
        console.log('No such document!');
        return null;
      }

      setLoading(false);
    } catch (e) {
      console.error('Error getting document: ', e);
      return null;
    }
  }, [orderId]);

  useEffect(() => {
    fetchOrder();
  }, [fetchOrder]);

  if (loading) {
    return <Container>Loading order...</Container>;
  }

  if (!order) {
    return null;
  }

  return (
    <Container>
      <h1>Order - Pending</h1>
      <h2>{new Date(order.orderDate).toLocaleString()}</h2>
      <h1>TOTAL: ${formatPrice(order?.total || 0)}</h1>
      <h4>Payment Type: {order?.paymentType.toUpperCase()}</h4>
      <h3>Items</h3>
      <Grid container className='order-list' spacing={4}>
        {order?.items.map(({ pizza, price }) => {
          const { sauce, cheese, meats, veggies } = pizza;

          return (
            <Grid item xs={12} sm={6} lg={4}>
              <div className='order-item'>
                <PizzaPreview
                  sauce={sauce}
                  cheese={cheese}
                  meats={meats}
                  veggies={veggies}
                />
                <p>
                  <strong>Price</strong>: ${price}
                </p>
                <p>
                  <strong>Sauce</strong>: {sauce}
                </p>
                <p>
                  <strong>Cheese</strong>: {cheese}
                </p>
                <p>
                  <strong>Meats</strong>: {meats?.join(', ')}
                </p>
                <p>
                  <strong>Veggies</strong>: {veggies?.join(', ')}
                </p>
              </div>
            </Grid>
          );
        })}
      </Grid>
    </Container>
  );
}
