import React from 'react';
import './Home.scss';
import { Button } from '@mui/material';
import { NavLink } from 'react-router-dom';

export default function Home() {
  return (
    <div className='home'>
      <div className='copy'>
        <h1>We can't do everything for you</h1>
        <NavLink to='/build'>
          <Button variant='contained' size='large'>
            BUILD YOUR OWN PIZZA
          </Button>
        </NavLink>
      </div>
      <img className='pizza' src='/pizza-top-view.png' alt='Delicious pizza' />
    </div>
  );
}
