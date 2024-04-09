import React, { useState } from 'react';
import Container from '../../common/Container';
import EmailIcon from '@mui/icons-material/Email';
import PasswordIcon from '@mui/icons-material/Password';
import './Register.scss';
import { Button, InputAdornment, TextField } from '@mui/material';
import { NavLink } from 'react-router-dom';

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
                    id="filled-firstName-input"
                    label="First Name"
                    type="text"
                    variant="filled"
                    className='customTextField'
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <EmailIcon /> {/* Icon to be displayed at the start */}
                        </InputAdornment>
                      ),
                    }}
                  />
                </div>
                <div className='form-input'>
                  <TextField
                    id="filled-lastName-input"
                    label="Last Name"
                    type="text"
                    variant="filled"
                    className='customTextField'
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <EmailIcon /> {/* Icon to be displayed at the start */}
                        </InputAdornment>
                      ),
                    }}
                  />
                </div>
                <div className='form-input'>
                  <TextField
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
                  />
                </div>
                <div className='form-input'>
                  <TextField
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
                  />
                </div>
                <div className='form-input'>
                  <TextField
                    id="filled-confirmPassword-input"
                    label="Confirm Password"
                    type="password"
                    variant="filled"
                    className='customTextField'
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <PasswordIcon /> {/* Icon to be displayed at the start */}
                        </InputAdornment>
                      ),
                    }}
                  />
                </div>
              </div>

              <div className='form-right'>
                <div className='form-input'>
                  <TextField
                    id="filled-contact-input"
                    label="Contact Number"
                    type="phone"
                    variant="filled"
                    className='customTextField'
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <EmailIcon /> {/* Icon to be displayed at the start */}
                        </InputAdornment>
                      ),
                    }}
                  />
                </div>
                <div className='form-input'>
                  <TextField
                    id="filled-address1-input"
                    label="Address Line 1"
                    type="address"
                    autoComplete="current-address"
                    variant="filled"
                    className='customTextField'
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <PasswordIcon /> {/* Icon to be displayed at the start */}
                        </InputAdornment>
                      ),
                    }}
                  />
                </div>
                <div className='form-input'>
                  <TextField
                    id="filled-address2-input"
                    label="Address Line 2"
                    type="address"
                    autoComplete="current-address"
                    variant="filled"
                    className='customTextField'
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <PasswordIcon /> {/* Icon to be displayed at the start */}
                        </InputAdornment>
                      ),
                    }}
                  />
                </div>
                <Button sx={{
                  width: '100%',
                  bgcolor: 'white',
                  color: '#E15C31',
                  '&:hover': { bgcolor: 'lightgray' }
                }}
                  variant='contained' size='large'>
                  Register
                </Button>
                <div className='bottomText'>
                  <h5>Already Registered? <NavLink to='/login'> Login  </NavLink></h5>
                </div>
              </div>


            </form>
          </div>



        </div>

        <img className="pizza-bg" src='/pizza-2.png' alt="pizza-bg2" />
      </div>
    </Container>
  );
}
