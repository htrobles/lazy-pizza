import React, { useEffect, useState } from 'react';
import './Profile.scss';
import useProfile from '../../../hooks/useProfile';
import { useNavigate } from 'react-router-dom';
import { Button, Container } from '@mui/material';
import UpdateUser from './UpdateUser';
import MyAlert from '../../common/MyAlert';
import { MyAlertProps } from '../../../types';

const Profile = () => {
  const { myProfile } = useProfile();
  const navigate = useNavigate();
  const [errorMsg, setErrorMsg] = useState<MyAlertProps['message'] | null>(
    null
  );
  const [alertType, setAlertType] = useState<MyAlertProps['alertType'] | null>(
    null
  );
  const [open, setOpen] = useState(false);

  const [isEditing, setIsEditing] = useState(false);

  const handleEditToggle = (errorMessage?:string) => {
    setIsEditing(prevState => !prevState);

    setOpen(true);
    setAlertType('success');
    setErrorMsg(errorMessage as MyAlertProps['message']);
  };

  useEffect(() => {
    if (!myProfile) {
      navigate('/login');
    }
  }, [myProfile, navigate]);

  if (!myProfile) {
    return null;
  }

  return (
    <>
      {isEditing ? (
        <UpdateUser onEditToggle={handleEditToggle} errorMessage={errorMsg as MyAlertProps['message']} />
      ) : (
        <div className='my-profile'>
          <Container>
            <MyAlert
              open={open ?? false}
              alertType={alertType ?? 'info'}
              message={errorMsg ?? 'Loading..'}
            />
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
                    <tr>
                      <td className='detail-label'>City:</td>
                      <td className='detail-value'>{myProfile.city}</td>
                    </tr>
                    <tr>
                      <td className='detail-label'>Province:</td>
                      <td className='detail-value'>{myProfile.province}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className='profile-buttons'>
                <Button
                  className='edit-button'
                  variant='contained'
                  size='large'
                  onClick={() => handleEditToggle(errorMsg as MyAlertProps['message'])}
                >
                  Edit
                </Button>
              </div>
            </div>

          </Container>
          <img className='pizza-bg' src='/pizza-toss.png' alt='pizza-bg2' />
        </div>
      )}
    </>
  );
};

export default Profile;
