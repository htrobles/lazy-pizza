import React, { useState } from 'react';
import Container from '../../common/Container';
import EmailIcon from '@mui/icons-material/Email';
import PasswordIcon from '@mui/icons-material/Password';
import BadgeIcon from '@mui/icons-material/Badge';
import CallIcon from '@mui/icons-material/Call';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import './Register.scss';
import { Alert, Button, InputAdornment, TextField } from '@mui/material';
import { NavLink } from 'react-router-dom';
import { loginUser, registerUser } from '../../../loginApi';
import Snackbar from '@mui/material/Snackbar';


export default function Register() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [contact, setContact] = useState('');
  const [address1, setAddress1] = useState('');
  const [address2, setAddress2] = useState('');

  const [errorMsg, setErrorMsg] = useState('');
  const [open, setOpen] = useState(false);
  const [alertType, setAlertType] = useState();

  const handleClearForm = () => {
    setFirstName('');
    setLastName('');
    setEmail('');
    setPassword('');
    setConfirmPassword('');
    setContact('');
    setAddress1('');
    setAddress2('');
  };

  const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  const handleRegister = async () => {
    if (password === confirmPassword) {

      try {
        const input = {
          firstName,
          lastName,
          email,
          password,
          contact,
          address1,
          address2,
        };
        await registerUser(input);
        await loginUser(input);

        handleClearForm();
        setIsLoggedIn(true);

        setErrorMsg('Account successully registered!');
        setOpen(true);
      }
      catch (error: any) {
        console.log('reg err:', error.message);
        setErrorMsg('Registration Failed!');
        setOpen(true);
      }
    } else {
      setErrorMsg('Password does not match');
      setOpen(true);
    }
  }

  return (
    <Container >
      <div className='register'>
        <div className='orangeBox'>
          <div className='header'>
            <h1>HEY THERE!</h1>
          </div>
          <div className='subHeader'>
            <h4>Enter your details to register.</h4>
          </div>
          <div >
            <img className='pizzaIcon' src='/pizza-icon.png' alt='pizza icon' />
          </div>

          <div>
            <form className='form'>

              <div className='form-left'>
                <div className='form-input'>
                  <TextField
                    value={firstName}
                    id="filled-firstName-input"
                    label="First Name"
                    type="text"
                    variant="filled"
                    className='customTextField'
                    required
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <BadgeIcon /> {/* Icon to be displayed at the start */}
                        </InputAdornment>
                      ),
                    }}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                      setFirstName(event.target.value);
                    }}
                  />
                </div>
                <div className='form-input'>
                  <TextField
                    value={lastName}
                    id="filled-lastName-input"
                    label="Last Name"
                    type="text"
                    variant="filled"
                    className='customTextField'
                    required
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <BadgeIcon /> {/* Icon to be displayed at the start */}
                        </InputAdornment>
                      ),
                    }}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                      setLastName(event.target.value);
                    }}
                  />
                </div>
                <div className='form-input'>
                  <TextField
                    value={email}
                    id="filled-email-input"
                    label="Email"
                    type="email"
                    autoComplete="current-email"
                    variant="filled"
                    className='customTextField'
                    required
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
                    id="filled-password-input"
                    label="Password"
                    type="password"
                    autoComplete="current-password"
                    variant="filled"
                    className='customTextField'
                    required
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
                <div className='form-input'>
                  <TextField
                    value={confirmPassword}
                    id="filled-confirmPassword-input"
                    label="Confirm Password"
                    type="password"
                    variant="filled"
                    className='customTextField'
                    required
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <PasswordIcon /> {/* Icon to be displayed at the start */}
                        </InputAdornment>
                      ),
                    }}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                      setConfirmPassword(event.target.value);
                    }}
                  />
                </div>
              </div>

              <div className='form-right'>
                <div className='form-input'>
                  <TextField
                    value={contact}
                    id="filled-contact-input"
                    label="Contact Number"
                    type="phone"
                    variant="filled"
                    className='customTextField'
                    required
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <CallIcon /> {/* Icon to be displayed at the start */}
                        </InputAdornment>
                      ),
                    }}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                      setContact(event.target.value);
                    }}
                  />
                </div>
                <div className='form-input'>
                  <TextField
                    value={address1}
                    id="filled-address1-input"
                    label="Address Line 1"
                    type="address"
                    autoComplete="current-address"
                    variant="filled"
                    className='customTextField'
                    required
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <LocationOnIcon /> {/* Icon to be displayed at the start */}
                        </InputAdornment>
                      ),
                    }}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                      setAddress1(event.target.value);
                    }}
                  />
                </div>
                <div className='form-input'>
                  <TextField
                    value={address2}
                    id="filled-address2-input"
                    label="Address Line 2"
                    type="address"
                    autoComplete="current-address"
                    variant="filled"
                    className='customTextField'
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <LocationOnIcon /> {/* Icon to be displayed at the start */}
                        </InputAdornment>
                      ),
                    }}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                      setAddress2(event.target.value);
                    }}
                  />
                </div>
                <Button className="login-button"
                  variant='contained' size='large'
                  onClick={handleRegister}>
                  Register
                </Button>
                <div className='bottomText'>
                  <h5>Already Registered? <NavLink className='link' to='/login'> Login  </NavLink></h5>
                </div>
              </div>


            </form>
          </div>

        </div>
        <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
          <Alert
            onClose={handleClose}
            severity='info'
            variant="filled"
            sx={{ width: '100%' }}
          >
            {errorMsg}
          </Alert>
        </Snackbar>
        <img className="pizza-bg" src='/pizza-2.png' alt="pizza-bg2" />
      </div>
    </Container>
  );
}
