import React, { useState } from 'react';
import Container from '../../common/Container';
import EmailIcon from '@mui/icons-material/Email';
import PasswordIcon from '@mui/icons-material/Password';
import './Login.scss';
import { Button, InputAdornment, TextField } from '@mui/material';
import { NavLink, useNavigate } from 'react-router-dom';
import MyAlert from '../../common/MyAlert';
import { MyAlertProps } from '../../../types';
import useProfile from '../../../hooks/useProfile';

export default function Login() {
  const { login } = useProfile();
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [errorMsg, setErrorMsg] = useState('');
  const [alertType, setAlertType] = useState<MyAlertProps['alertType'] | null>(
    null
  );
  const [open, setOpen] = useState(false);

  const handleLogin = async () => {
    const input = { email, password };

    try {
      await login(input);
      setOpen(true);
      setAlertType('success');
      setErrorMsg('Login Successful!');
      navigate('/profile');
    } catch (error) {
      setOpen(true);
      setAlertType('error');
      setErrorMsg('Login Failed!');

      console.log('error: ', error);
    }
  };

  return (
    <div className='login'>
      <Container>
        <div className='orangeBox'>
          <img className='pizzaIcon' src='/pizza-icon.png' alt='pizza icon' />

          <div className='header'>
            <h1>WELCOME BACK!</h1>
          </div>
          <div className='subHeader'>
            <h4>Enter your details to login.</h4>
          </div>
          <div className='form'>
            <form>
              <div className='form-input-email'>
                <TextField
                  value={email}
                  required
                  id='filled-email-input'
                  label='Email'
                  type='email'
                  autoComplete='current-email'
                  variant='filled'
                  className='customTextField'
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position='start'>
                        <EmailIcon />
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
                  id='filled-password-input'
                  label='Password'
                  type='password'
                  autoComplete='current-password'
                  variant='filled'
                  className='customTextField'
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position='start'>
                        <PasswordIcon />
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
                onClick={handleLogin}
              >
                Login
              </Button>
              <div className='bottomText'>
                <h5>
                  New Here?{' '}
                  <NavLink className='link' to='/register'>
                    {' '}
                    Create an Account{' '}
                  </NavLink>
                </h5>
              </div>
            </form>
          </div>
        </div>
      </Container>
      <img className='pizza-bg' src='/pizza-2.png' alt='pizza-bg2' />
      <MyAlert
        open={open ?? true}
        alertType={alertType ?? 'info'}
        message={errorMsg ?? 'Please Login to continue your order.'}
      />
    </div>
  );
}
