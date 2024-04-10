import React, { useState } from 'react';
import Container from '../../common/Container';
import EmailIcon from '@mui/icons-material/Email';
import PasswordIcon from '@mui/icons-material/Password';
import './Login.scss';
import { Button, InputAdornment, TextField } from '@mui/material';
import { NavLink } from 'react-router-dom';
import { loginUser, fetchUser, logoutUser } from '../../../loginApi';
import Profile from '../../common/Profile';
import UpdateUser from '../../common/UpdateUser';
import MyAlert from '../../common/MyAlert';
import { MyAlertProps } from '../../../types';

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [userData, setUserData] = useState<any>(null);
    const [editMode, setEditMode] = useState(false);

    const [errorMsg, setErrorMsg] = useState('');
    const [alertType, setAlertType] = useState<MyAlertProps['alertType'] | null>(null);
    const [open, setOpen] = useState(false);

    const handleLogin = async () => {
        const input = { email, password };

        try {
            await loginUser(input);
            const user = await fetchUser(email);

            localStorage.setItem('myUser', JSON.stringify([user]));
            const myUser = JSON.parse(localStorage.getItem('myUser') as string);

            setUserData(myUser[0]);
            console.log('login:', myUser[0]);

            setIsLoggedIn(true);

            setOpen(true);
            setAlertType('success');
            setErrorMsg('Login Successful!');
        } catch (error: any) {

            setOpen(true);
            setAlertType('error');
            setErrorMsg('Login Failed!');

            console.log("error: ", error);
        }
    }


    const handleLogout = async () => {
        try {
            await logoutUser();

            setIsLoggedIn(false);
            console.log("logout successful");

            setOpen(true);
            setAlertType('success');
            setErrorMsg('Logout Successful!');

        } catch (error: any) {
            console.log("error: ", error);
            setOpen(true);
            setAlertType('error');
            setErrorMsg('Logout Failed!');
        }
    }

    const handleToggleEdit = () => {
        setEditMode(!editMode);
    }

    return (
        <Container>
            <MyAlert
                open={open ?? true}
                alertType={alertType ?? 'info'}
                message={errorMsg ?? 'Please Login to continue your order.'}
            />
            {isLoggedIn && userData && !editMode ? (
                <div className='profile'>
                    <div className='profile-box'>
                        <Profile />
                    </div>
                    <div className='profile-buttons'>
                        <Button
                            className='edit-button'
                            variant='contained'
                            size='large'
                            onClick={handleToggleEdit}>
                            Edit Profile
                        </Button>
                        <Button
                            className='logout-button'
                            variant='contained'
                            size='large'
                            onClick={handleLogout}>
                            Logout
                        </Button>
                    </div>
                </div>
            ) : (
                <>
                    {editMode ? (
                        <UpdateUser userData={userData} onEditToggle={handleToggleEdit} />
                    ) : (
                        <div className='login'>
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
                    )}

                </>

            )}
        </Container>
    );
}
