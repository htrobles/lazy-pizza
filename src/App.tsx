import React from 'react';
import './App.scss';
import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './AppRoutes';
import Header from './components/common/Header';

function App() {
  return (
    <div>
      <Header />
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </div>
  );
}

export default App;
