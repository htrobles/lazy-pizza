import './Header.scss';
import useProfile from '../../../hooks/useProfile';
import { Container } from '@mui/material';

export default function Header() {
  const { myProfile, logout } = useProfile();

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
  ];

  if (myProfile) {
    navLinks.push(
      {
        href: '/profile',
        label: 'Profile',
      },
      {
        href: '/',
        label: 'Logout',
      }
    );
  } else {
    navLinks.push({
      href: '/login',
      label: 'Login',
    });
  }

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
              <a
                key={href}
                href={href}
                onClick={label === 'Logout' ? logout : undefined}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      </Container>
    </header>
  );
}
