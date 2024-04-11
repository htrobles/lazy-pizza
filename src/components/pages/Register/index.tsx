import React, { useState } from 'react';
import Container from '../../common/Container';
import EmailIcon from '@mui/icons-material/Email';
import PasswordIcon from '@mui/icons-material/Password';
import BadgeIcon from '@mui/icons-material/Badge';
import CallIcon from '@mui/icons-material/Call';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import MapIcon from '@mui/icons-material/Map';
import LocationCityIcon from '@mui/icons-material/LocationCity';
import './Register.scss';
import { Button, InputAdornment, TextField } from '@mui/material';
import { NavLink, useNavigate } from 'react-router-dom';
import { registerUser } from '../../../loginApi';
import { MyAlertProps } from '../../../types';
import MyAlert from '../../common/MyAlert';


export default function Register() {
  const navigate = useNavigate();

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [contact, setContact] = useState('');
  const [address1, setAddress1] = useState('');
  const [address2, setAddress2] = useState('');
  const [city, setCity] = useState('');
  const [province, setProvince] = useState('');

  const [errorMsg, setErrorMsg] = useState('');
  const [alertType, setAlertType] = useState<MyAlertProps['alertType'] | null>(null);
  const [open, setOpen] = useState(false);

  const handleClearForm = () => {
    setFirstName('');
    setLastName('');
    setEmail('');
    setPassword('');
    setConfirmPassword('');
    setContact('');
    setAddress1('');
    setAddress2('');
    setCity('');
    setProvince('');
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
          city,
          province,
        };
        await registerUser(input);

        handleClearForm();

        setOpen(true);
        setAlertType('success');
        setErrorMsg('Account successully registered! Login to continue');

        // Navigate back to login page 
        navigate('/login');
      }
      catch (error: any) {
        console.log('reg err:', error.message);
        setOpen(true);
        setAlertType('error');
        setErrorMsg('Registration Failed! Enter details correctly.');
      }
    } else {
      setOpen(true);
      setAlertType('error');
      setErrorMsg('Password does not match! Try again.');
    }
  }

  return (
    <div className='register'>
      <Container >
        <MyAlert
          open={open ?? true}
          alertType={alertType ?? 'info'}
          message={errorMsg ?? 'Please Register to continue your order.'}
        />

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
                          <BadgeIcon />
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
                          <BadgeIcon />
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
                          <CallIcon />
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
                          <EmailIcon />
                        </InputAdornment>
                      ),
                    }}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                      setEmail(event.target.value);
                    }}
                  />
                </div>
                <div className='form-input-password'>
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
                            <PasswordIcon />
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
                            <PasswordIcon />
                          </InputAdornment>
                        ),
                      }}
                      onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                        setConfirmPassword(event.target.value);
                      }}
                    />
                  </div>
                </div>
              </div>

              <div className='form-right'>
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
                          <LocationOnIcon />
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
                          <LocationOnIcon />
                        </InputAdornment>
                      ),
                    }}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                      setAddress2(event.target.value);
                    }}
                  />
                </div>
                <div className='form-input-cp'>
                  <div className='form-input'>
                    <TextField
                      value={city}
                      id='filled-city-input'
                      label='City'
                      type='address'
                      autoComplete='current-city'
                      variant='filled'
                      className='customTextField'
                      required
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position='start'>
                            <LocationCityIcon />
                          </InputAdornment>
                        ),
                      }}
                      onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                        setCity(event.target.value);
                      }}
                    />
                  </div>
                  <div className='form-input'>
                    <TextField
                      value={province}
                      id='filled-province-input'
                      label='Province'
                      type='address'
                      autoComplete='current-province'
                      variant='filled'
                      className='customTextField'
                      required
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position='start'>
                            <MapIcon />
                          </InputAdornment>
                        ),
                      }}
                      onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                        setProvince(event.target.value);
                      }}
                    />
                  </div>
                </div>
                <div className='button-container'>
                  <Button className="login-button"
                    variant='contained' size='large'
                    onClick={handleRegister}>
                    Register
                  </Button>
                </div>
                <div className='bottomText'>
                  <h5>Already Registered? <NavLink className='link' to='/login'> Login  </NavLink></h5>
                </div>
              </div>


            </form>
          </div>

        </div>


      </Container>
      <img className="pizza-bg" src='/pizza-2.png' alt="pizza-bg2" />
    </div>
  );
}
