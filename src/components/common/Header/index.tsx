import React from 'react';
import './Header.scss';
import Container from '../Container';
// import Container from '../Container';

const navLinks = [
  {
    href: '/build',
    label: 'Build a Pizza',
  },
  {
    href: '/about',
    label: 'About Us',
  },
  {
    href: '/contact',
    label: 'Contact Us',
  },
  {
    href: '/login',
    label: 'Account',
  }, 
];

export default function Header() {
  return (
    <header>
      <Container className='container'>
        <a href='/'>
          <img
            className='header-logo'
            src='/logo-white.png'
            alt='Lazy Pizza Logo'
          />
        </a>
        <ul className='nav'>
          {navLinks.map(({ href, label }) => (
            <li key={label} className='nav-item'>
              <a key={href} href={href}>
                {label}
              </a>
            </li>
          ))}
        </ul>
      </Container>
    </header>
  );
}
