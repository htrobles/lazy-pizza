import React from 'react';
import './About.scss';
import Container from '../../common/Container';

export default function About() {
  return (
    <Container>
      <div className='about'>
        <div className='header'>
            <h1>LAZY PIZZA</h1>
            <h2>THE BEST PIZZA IN LONDON CITY</h2>
        </div>
          <div className="orangeBox">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div className='content'>
                  <h1 className='content-h1'>Craft Your Own Slice of Heaven, Around the Clock</h1>
                  <p>At Lazy Pizza, we believe that pizza should be as unique as you are. That's why we've revolutionized the traditional pizza shop experience by putting the power in your hands. Say goodbye to fixed menus and hello to endless possibilities with our online pizza builder. Whether you're craving classic flavors or feeling adventurous, our DIY pizza platform allows you to create your own masterpiece, 24/7. No matter the hour, Lazy Pizza is here to satisfy your cravings, one personalized pie at a time. Join us in redefining the pizza experience, where laziness meets creativity!</p>
                </div>
                <img className='pizza-1' src='/about/1.png' alt='pizza-img' />
            </div>
            <img className='pizzaIcon' src='/pizza-icon.png' alt='pizza icon' />
          </div>
          <div className="pizza-steps-grid">
            <img src='/about/8.png' alt="Pizza step 1" />
            <img src='/about/9.png' alt="Pizza step 1" />
            <img src='/about/10.png' alt="Pizza step 1" />
            <img src='/about/11.png' alt="Pizza step 1" />
            <img src='/about/12.png' alt="Pizza step 1" />
            <img src='/about/13.png' alt="Pizza step 1" />
            <img src='/about/14.png' alt="Pizza step 1" />
            <img src='/about/15.png' alt="Pizza step 1" />
            <img src='/about/16.png' alt="Pizza step 1" />
            <img src='/about/17.png' alt="Pizza step 1" />
          </div>
      </div>
    </Container>

  );
}