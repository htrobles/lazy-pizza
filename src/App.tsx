import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './AppRoutes';
import Header from './components/common/Header';
// import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import { ThemeProvider } from '@emotion/react';
import theme from './theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <main>
        <Header />
        <BrowserRouter>
          <AppRoutes />
        </BrowserRouter>
      </main>
    </ThemeProvider>
  );
}

export default App;
