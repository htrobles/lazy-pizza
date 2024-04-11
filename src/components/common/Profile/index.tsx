import React, { useEffect } from 'react';
import './Profile.scss';
import useProfile from '../../../hooks/useProfile';
import { useNavigate } from 'react-router-dom';
import { Container } from '@mui/material';

const Profile = () => {
  const { myProfile } = useProfile();
  const navigate = useNavigate();

  useEffect(() => {
    if (!myProfile) {
      navigate('/login');
    }
  }, [myProfile, navigate]);

  if (!myProfile) {
    return null;
  }

  return (
    <Container>
      <div className='my-profile'>
        <div className='profile-orangeBox'>
          <div className='header'>
            <h1>Hello, {myProfile.firstName}!</h1>
          </div>
          <div className='subHeader'>
            <h4>Have you thought about your unique pizza order today?</h4>
          </div>

          <div className='profile-details'>
            <table>
              <tbody>
                <tr>
                  <td className='detail-label'>First Name:</td>
                  <td className='detail-value'>{myProfile.firstName}</td>
                </tr>
                <tr>
                  <td className='detail-label'>Last Name:</td>
                  <td className='detail-value'>{myProfile.lastName}</td>
                </tr>
                <tr>
                  <td className='detail-label'>Email:</td>
                  <td className='detail-value'>{myProfile.email}</td>
                </tr>
                <tr>
                  <td className='detail-label'>Contact Number:</td>
                  <td className='detail-value'>{myProfile.contact}</td>
                </tr>
                <tr>
                  <td className='detail-label'>Address Line 1:</td>
                  <td className='detail-value'>{myProfile.address1}</td>
                </tr>
                <tr>
                  <td className='detail-label'>Address Line 2:</td>
                  <td className='detail-value'>{myProfile.address2}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <img className='pizza-bg' src='/pizza-toss.png' alt='pizza-bg2' />
      </div>
    </Container>
  );
};

export default Profile;
