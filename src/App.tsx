import { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './AppRoutes';
import Header from './components/common/Header';
// import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import { ThemeProvider } from '@emotion/react';
import theme from './theme';
import { User } from './types';
import { AuthContext } from './context/AuthContext';

function App() {
  const profileStr = localStorage.getItem('myProfile');
  let parsedProfile: User | null = null;
  if (profileStr) {
    parsedProfile = JSON.parse(profileStr);
  }

  const [myProfile, setMyProfile] = useState(parsedProfile);

  return (
    <AuthContext.Provider value={{ myProfile, setMyProfile }}>
      <ThemeProvider theme={theme}>
        <main>
          <Header />
          <div className='content'>
            <BrowserRouter>
              <AppRoutes />
            </BrowserRouter>
          </div>
        </main>
      </ThemeProvider>
    </AuthContext.Provider>
  );
}

export default App;
