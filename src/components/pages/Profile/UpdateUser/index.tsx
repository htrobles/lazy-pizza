import React, { useState } from 'react';
import Container from '../../../common/Container';
import EmailIcon from '@mui/icons-material/Email';
import BadgeIcon from '@mui/icons-material/Badge';
import CallIcon from '@mui/icons-material/Call';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import MapIcon from '@mui/icons-material/Map';
import LocationCityIcon from '@mui/icons-material/LocationCity';
import './UpdateUser.scss';
import { Button, InputAdornment, TextField } from '@mui/material';
import MyAlert from '../../../common/MyAlert';
import { MyAlertProps } from '../../../../types';
import useProfile, { UpdateProfileInput } from '../../../../hooks/useProfile';

interface UpdateUserProps {
  onEditToggle: (errorMessage?: string) => void;
  errorMessage?: string;
}

const UpdateUser: React.FC<UpdateUserProps> = ({ onEditToggle, errorMessage }) => {
  const { myProfile, updateUser } = useProfile();

  const [firstName, setFirstName] = useState(myProfile?.firstName);
  const [lastName, setLastName] = useState(myProfile?.lastName);
  const [contact, setContact] = useState(myProfile?.contact);
  const [address1, setAddress1] = useState(myProfile?.address1);
  const [address2, setAddress2] = useState(myProfile?.address2);
  const [city, setCity] = useState(myProfile?.city);
  const [province, setProvince] = useState(myProfile?.province);

  const [errorMsg, setErrorMsg] = useState<MyAlertProps['message'] | null>(
    null
  )
  const [alertType, setAlertType] = useState<MyAlertProps['alertType'] | null>(
    null
  );
  const [open, setOpen] = useState(false);

  const handleUpdate = async () => {
    try {
      const updatedUser = {
        firstName,
        lastName,
        email: myProfile?.email,
        contact,
        address1,
        address2,
        city,
        province,
      };

      if (!firstName || !lastName || !contact ||
        !address1 || !address2 || !city || !province) {
        setOpen(true);
        setAlertType('error');
        setErrorMsg('All inputs are required! Try again.');
      } else {

        await updateUser(updatedUser as UpdateProfileInput);

        setOpen(true);
        setAlertType('success');
        setErrorMsg('User information updated successfully! Loading update...');

        localStorage.setItem('myProfile', JSON.stringify(updatedUser));

        onEditToggle('User information updated successfully! Loading update...');
        console.log('updated:', myProfile);
      }
    } catch (error: any) {
      setOpen(true);
      setAlertType('error');
      setErrorMsg('Failed to update user information');
      console.log('error: ', error);
    }
  };

  if (!myProfile) {
    return null;
  }

  return (
    <>
      <div className='update-user'>
        <Container>
          <MyAlert
            open={open ?? false}
            alertType={alertType ?? 'info'}
            message={errorMsg ?? 'Loading'}
          />
          <div className='orangeBox'>
            <div className='header'>
              <h1>Update Your Information</h1>
            </div>
            <div className='subHeader'>
              <h4>Edit your details below:</h4>
            </div>
            <div>
              <form className='form'>
                <div className='form-left'>
                  <div className='form-input'>
                    <TextField
                      value={firstName}
                      id='filled-firstName-input'
                      label='First Name'
                      type='text'
                      variant='filled'
                      className='customTextField'
                      required
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position='start'>
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
                      id='filled-lastName-input'
                      label='Last Name'
                      type='text'
                      variant='filled'
                      className='customTextField'
                      required
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position='start'>
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
                      value={myProfile?.email}
                      id='filled-email-input'
                      label='Email'
                      type='email'
                      autoComplete='current-email'
                      variant='filled'
                      className='customTextField'
                      disabled
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position='start'>
                            <EmailIcon />
                          </InputAdornment>
                        ),
                      }}
                    />
                  </div>
                  <div className='form-input'>
                    <TextField
                      value={contact}
                      id='filled-contact-input'
                      label='Contact Number'
                      type='phone'
                      variant='filled'
                      className='customTextField'
                      required
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position='start'>
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
                      id='filled-address1-input'
                      label='Address Line 1'
                      type='address'
                      autoComplete='current-address'
                      variant='filled'
                      className='customTextField'
                      required
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position='start'>
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
                      id='filled-address2-input'
                      label='Address Line 2'
                      type='address'
                      autoComplete='current-address'
                      variant='filled'
                      className='customTextField'
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position='start'>
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
                    <Button
                      className='update-button'
                      variant='contained'
                      size='large'
                      onClick={handleUpdate}
                    >
                      Update
                    </Button>
                    <Button
                      className='cancel-button'
                      variant='contained'
                      size='large'
                      onClick={() => onEditToggle(errorMsg as MyAlertProps['message'])}
                    >
                      Cancel
                    </Button>
                  </div>

                </div>
              </form>
            </div>
          </div>
        </Container>
        <img className='update-pizza-bg' src='/pizza-4.png' alt='pizza-bg2' />
      </div>
    </>
  );
};

export default UpdateUser;
