import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './components/pages/Home';
import Build from './components/pages/Build';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import Checkout from './components/pages/Checkout';
import Login from './components/pages/Login';
import Register from './components/pages/Register';
import Profile from './components/pages/Profile';

const appRoutes = [
  {
    key: 'home',
    path: '/',
    element: <Home />,
  },
  {
    key: 'build',
    path: '/build',
    element: <Build />,
  },
  {
    key: 'about',
    path: '/about',
    element: <About />,
  },
  {
    key: 'contact',
    path: '/contact',
    element: <Contact />,
  },
  {
    key: 'checkout',
    path: '/checkout',
    element: <Checkout />,
  },
  {
    key: 'Login',
    path: '/login',
    element: <Login />,
  },
  {
    key: 'Register',
    path: '/register',
    element: <Register />,
  },
  {
    key: 'Profile',
    path: '/profile',
    element: <Profile />,
  },
];

export default function AppRoutes() {
  return (
    <Routes>
      {appRoutes.map(({ key, path, element }) => (
        <Route key={key} path={path} element={element} />
      ))}
    </Routes>
  );
}
