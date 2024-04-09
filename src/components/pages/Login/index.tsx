import React, { useState } from 'react';
import Container from '../../common/Container';
import EmailIcon from '@mui/icons-material/Email';
import PasswordIcon from '@mui/icons-material/Password';
import './Login.scss';
import { Button, InputAdornment, TextField } from '@mui/material';
import { NavLink } from 'react-router-dom';
import { loginUser, fetchUser } from '../../../loginApi';

export default function Login() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = async () => {
    const input = { email, password };

    try {
      await loginUser(input);
      await fetchUser(email);

      setIsLoggedIn(true);

    }
    catch (error: any) {

    }

  }


  return (
    <Container >
      <div className='login'>
        <div className='orangeBox'>
          <div className='header'>
            <h1>WELCOME BACK!</h1>
          </div>
          <div className='subHeader'>
            <h4>Enter your details to login.</h4>
          </div>
          <div >
            <img className='pizzaIcon' src='/pizza-icon.png' alt='pizza icon' />
          </div>

          <div className='form'>
            <form>
              <div className='form-input-email'>
                <TextField
                  value={email}
                  required
                  id="filled-email-input"
                  label="Email"
                  type="email"
                  autoComplete="current-email"
                  variant="filled"
                  className='customTextField'
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <EmailIcon /> {/* Icon to be displayed at the start */}
                      </InputAdornment>
                    ),
                  }}
                  onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                    setEmail(event.target.value);
                  }}
                />
              </div>
              <div className='form-input'>
                <TextField
                  value={password}
                  required
                  id="filled-password-input"
                  label="Password"
                  type="password"
                  autoComplete="current-password"
                  variant="filled"
                  className='customTextField'
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <PasswordIcon /> {/* Icon to be displayed at the start */}
                      </InputAdornment>
                    ),
                  }}
                  onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                    setPassword(event.target.value);
                  }}
                />
              </div>
              <Button
                className='login-button'
                variant='contained'
                size='large'
                onClick={handleLogin}>
                Login
              </Button>
              <div className='bottomText'>
                <h5>New Here? <NavLink className='link' to='/register'> Create an Account  </NavLink></h5>
              </div>
            </form>
          </div>



        </div>

        <img className="pizza-bg" src='/pizza-2.png' alt="pizza-bg2" />
      </div>
    </Container>
  );
}
