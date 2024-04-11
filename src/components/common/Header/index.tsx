import './Header.scss';
import useProfile from '../../../hooks/useProfile';
import { Container, IconButton } from '@mui/material';
import { MenuOutlined } from '@mui/icons-material';
import { NavLink } from 'react-router-dom';

interface HeaderProps {
  showDrawer: boolean;
  onCloseDrawer: (value: boolean) => void;
}

export default function Header({ showDrawer, onCloseDrawer }: HeaderProps) {
  const { myProfile, logout } = useProfile();

  const navLinks = [
    {
      href: '/build',
      label: 'Build a Pizza',
    },
    {
      href: '/checkout',
      label: 'Checkout',
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
              <NavLink
                key={href}
                to={href}
                onClick={label === 'Logout' ? logout : undefined}
              >
                {label}
              </NavLink>
            </li>
          ))}
        </ul>
        <div className='drawer-button'>
          <IconButton
            onClick={() => onCloseDrawer(!showDrawer)}
            color='inherit'
          >
            <MenuOutlined />
          </IconButton>
        </div>
      </Container>
    </header>
  );
}
