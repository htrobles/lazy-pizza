import { Button, Grid, Radio, RadioGroup } from '@mui/material';
import { useState } from 'react';
import './PaymentForm.scss';
import { formatPrice } from '../../../../utils';

type PaymentType = 'card' | 'cash';

export interface FormInputType {
  paymentType: string;
  line1: string;
  line2: string;
  city: string;
  province: string;
  cardNumber?: string;
  expiry?: string;
  cvv?: string;
  email: string;
}

interface PaymentFormProps {
  onSubmit: (input: FormInputType) => Promise<boolean>;
  total: number;
}

export default function PaymentForm({ onSubmit, total }: PaymentFormProps) {
  const [paymentType, setPaymentType] = useState<PaymentType>('card');
  const [line1, setLine1] = useState('');
  const [line2, setLine2] = useState('');
  const [city, setCity] = useState('');
  const [province, setProvince] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [expiry, setExpiry] = useState('');
  const [cvv, setCvv] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = () => {
    const input = {
      paymentType,
      line1,
      line2,
      city,
      province,
      cardNumber,
      expiry,
      cvv,
      email,
    };

    const res = onSubmit(input);

    console.log(res);
  };

  return (
    <form className='payment-form'>
      <div className='payment-type'>
        <div className='form-group'>
          <label className='form-group-label'>Payment Type</label>
          <RadioGroup
            defaultValue='outlined'
            name='paymentType'
            value={paymentType}
            onChange={(e, value) => setPaymentType(value as PaymentType)}
          >
            <div>
              <Radio
                className='ingredient-radio'
                value='card'
                color='primary'
              />
              <span>Card</span>
            </div>
            <div>
              <Radio
                className='ingredient-radio'
                value='cash'
                color='primary'
              />
              <span>Cash</span>
            </div>
          </RadioGroup>
        </div>
        <div className='form-group'>
          <label className='form-group-label'>E-mail Address</label>
          <input
            className='form-group-input'
            name='email'
            placeholder='e-mail address'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className='form-group'>
          <label className='form-group-label'>Address</label>
          <input
            className='form-group-input'
            name='line1'
            placeholder='Line 1'
            value={line1}
            onChange={(e) => setLine1(e.target.value)}
          />
          <input
            className='form-group-input'
            name='lune2'
            placeholder='Line 2'
            value={line2}
            onChange={(e) => setLine2(e.target.value)}
          />
          <div className='form-group'>
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <input
                  className='form-group-input'
                  name='city'
                  placeholder='City'
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                />
              </Grid>
              <Grid item xs={6}>
                <input
                  className='form-group-input'
                  name='Province'
                  placeholder='Province'
                  value={province}
                  onChange={(e) => setProvince(e.target.value)}
                />
              </Grid>
            </Grid>
          </div>
          {paymentType === 'card' ? (
            <div className='form-group'>
              <label className='form-group-label'>Card Information</label>
              <input
                type='text'
                className='form-group-input'
                placeholder='Card Number'
                value={cardNumber}
                onChange={(e) => setCardNumber(e.target.value)}
              />
              <Grid container spacing={2}>
                <Grid item xs={8}>
                  <input
                    type='date'
                    className='form-group-input'
                    placeholder='Expires'
                    value={expiry}
                    onChange={(e) => setExpiry(e.target.value)}
                  />
                </Grid>
                <Grid item xs={4}>
                  <input
                    type='text'
                    className='form-group-input'
                    placeholder='CVV'
                    value={cvv}
                    onChange={(e) => setCvv(e.target.value)}
                  />
                </Grid>
              </Grid>
            </div>
          ) : null}
          <h2>TOTAL: ${formatPrice(total)}</h2>
          <Button
            className='submit'
            variant='contained'
            size='large'
            color='primary'
            onClick={handleSubmit}
          >
            Pay Now
          </Button>
        </div>
      </div>
    </form>
  );
}
