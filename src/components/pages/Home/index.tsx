import React from 'react';
import './Home.scss';
import Button from '../../common/Button';

export default function Home() {
  return (
    <div className='home'>
      <div className='copy'>
        <h1>We can't do everything for you</h1>
        <a href='/build'>
          <Button color='#E15C31'>BUILD YOUR OWN PIZZA</Button>
        </a>
      </div>
      <img className='pizza' src='/pizza-top-view.png' alt='Delicious pizza' />
    </div>
  );
}
