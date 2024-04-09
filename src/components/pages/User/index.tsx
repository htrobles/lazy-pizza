import React, { useState, useEffect } from 'react';
import Container from '../../common/Container';
import EmailIcon from '@mui/icons-material/Email';
import PasswordIcon from '@mui/icons-material/Password';
import { Button, InputAdornment, TextField } from '@mui/material';
import { NavLink } from 'react-router-dom';
import { fetchUser, updateUser, logoutUser } from '../../../loginApi';

interface User {
  firstName: string;
  lastName: string;
  address1: string;
  address2: string;
  contact: string;
  // Add other properties as needed
}

interface Props {
  userEmail: string;
  logged: boolean;
}

export default function User(props: Props) {
  const { userEmail, logged } = props;
  // const [user, setUser] = useState<User | null>(null); // Specify User type for user state
  const [editMode, setEditMode] = useState(false);
  const [email, setEmail] = useState(userEmail);
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(logged);

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [contact, setContact] = useState('');
  const [address1, setAddress1] = useState('');
  const [address2, setAddress2] = useState('');

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const userData = await fetchUser(email); // You might need to pass the user ID here if available
        if (userData) {
          console.log(typeof userData);
          console.log(userData);

        } else {
          
        }
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };
  
    fetchUserData();
  }, [email]);
  
  const handleEdit = () => {
    setEditMode(true);
  };

  const handleSave = async () => {
    const input = {email, password, contact, address1,address2};

    try {
      await updateUser(input);
    }catch (error:any){
      console.log('error saving:',error.message);
    }
    setEditMode(false);
  };

  const handleLogout = async () => {
    try {
      await logoutUser();
    }catch (error:any){
      console.log('error logout:',error.message);
    }
  };

  return (
    <Container>
      <div className='login'>
        <div className='orangeBox'>
          <div className='header'>
            <h1>Welcome Back, {firstName}!</h1>
          </div>
          {editMode ? (
            <div className='form'>
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
                      <EmailIcon />
                    </InputAdornment>
                  ),
                }}
                onChange={(event) => setEmail(event.target.value)}
              />
              {/* Include other fields for editing (address, contact number, password) */}
              <Button onClick={handleSave}>Save</Button>
            </div>
          ) : (
            <>
              <div className='userInfo'>
                <p>Hello, {firstName} {lastName}!</p>
                <p>Welcome Back!</p>
                {/* Display user details (address, contact number, etc.) */}
                <p>Email: {email}</p>
                <p>Address Line 1: {address1}</p>
                <p>Address Line 2: {address2}</p>
                <p>Contact Number: {contact}</p>
              </div>
              <Button onClick={handleEdit}>Edit</Button>
              <Button onClick={handleLogout}>Logout</Button> {/* Logout button */}
            </>
          )}
          <div className='bottomText'>
            <h5>New Here? <NavLink className='link' to='/register'>Create an Account</NavLink></h5>
          </div>
        </div>
      </div>
    </Container>
  );
}
