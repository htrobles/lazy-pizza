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
import AppDrawer from './components/common/AppDrawer';

function App() {
  const profileStr = localStorage.getItem('myProfile');
  let parsedProfile: User | null = null;
  if (profileStr) {
    parsedProfile = JSON.parse(profileStr);
  }

  const [myProfile, setMyProfile] = useState(parsedProfile);
  const [showDrawer, setShowDrawer] = useState(false);

  return (
    <AuthContext.Provider value={{ myProfile, setMyProfile }}>
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <main>
            <AppDrawer showDrawer={showDrawer} onCloseDrawer={setShowDrawer} />
            <Header showDrawer={showDrawer} onCloseDrawer={setShowDrawer} />
            <div className='content'>
              <AppRoutes />
            </div>
          </main>
        </ThemeProvider>
      </BrowserRouter>
    </AuthContext.Provider>
  );
}

export default App;
