import React, { useState } from 'react';
import Container from '../Container';
import EmailIcon from '@mui/icons-material/Email';
import BadgeIcon from '@mui/icons-material/Badge';
import CallIcon from '@mui/icons-material/Call';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import './UpdateUser.scss';
import { Alert, Button, InputAdornment, TextField } from '@mui/material';
import Snackbar from '@mui/material/Snackbar';
import { updateUser } from '../../../loginApi';
import { Navigate } from 'react-router-dom';

interface UpdateUserProps {
  userData: any;
  onEditToggle: () => void;
}

const UpdateUser: React.FC<UpdateUserProps> = ({ userData, onEditToggle }) => {
  const [firstName, setFirstName] = useState(userData.firstName);
  const [lastName, setLastName] = useState(userData.lastName);
  const [email, setEmail] = useState(userData.email);
  const [contact, setContact] = useState(userData.contact);
  const [address1, setAddress1] = useState(userData.address1);
  const [address2, setAddress2] = useState(userData.address2);
  const [errorMsg, setErrorMsg] = useState('');
  const [open, setOpen] = useState(false);

  const handleClose = () => setOpen(false);

  const handleUpdate = async () => {
    try {
      const updatedUser = {
        ...userData,
        firstName,
        lastName,
        email,
        contact,
        address1,
        address2,
      };
      await updateUser(updatedUser);
      setErrorMsg('User information updated successfully!');
      setOpen(true);

      // Call the callback function to update user data in the parent component
      //onUpdate(updatedUserData);

      // Call onEditToggle to close the edit mode
      onEditToggle();
      // Navigate back to login page with isLoggedIn=true
      return <Navigate to="/login" state={{ isLoggedIn: true }} />;

    } catch (error: any) {
      setErrorMsg('Failed to update user information');
      setOpen(true);
    }
  };


  return (
    <Container>
      <div className='register'>
        <div className='orangeBox'>
          <div className='header'>
            <h1>Update Your Information</h1>
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
                    value={email}
                    id="filled-email-input"
                    label="Email"
                    type="email"
                    autoComplete="current-email"
                    variant="filled"
                    className='customTextField'
                    disabled
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
                <Button className="update-button"
                  variant='contained' size='large'
                  onClick={handleUpdate}>
                  Update
                </Button>
                <Button className="cancel-button"
                  variant='contained' size='large'
                  onClick={onEditToggle}>
                  Cancel
                </Button>
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
};

export default UpdateUser;
