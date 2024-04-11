import { Box, Drawer, List, ListItem } from '@mui/material';
import useProfile from '../../../hooks/useProfile';
import './AppDrawer.scss';

interface AppDrawerProps {
  showDrawer: boolean;
  onCloseDrawer: (value: boolean) => void;
}

export default function AppDrawer({
  showDrawer,
  onCloseDrawer,
}: AppDrawerProps) {
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
    <Drawer
      open={showDrawer}
      onClose={() => {
        onCloseDrawer(!showDrawer);
      }}
      PaperProps={{
        style: {
          backgroundColor: 'rgba(225, 92, 49, .8)',
        },
      }}
      className='drawer'
    >
      <Box sx={{ width: 250, padding: 3 }} role='presentation'>
        <List>
          {navLinks.map(({ href, label }, index) => (
            <ListItem key={href}>
              <a
                href={href}
                className='nav-link'
                onClick={label === 'Logout' ? logout : undefined}
              >
                {label}
              </a>
            </ListItem>
          ))}
        </List>
      </Box>
    </Drawer>
  );
}
