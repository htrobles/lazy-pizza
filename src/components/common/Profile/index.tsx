import React from 'react';


interface ProfileProps {
  userData: any;
}

const Profile: React.FC<ProfileProps> = ({ userData }) => {

  return (
    <div className='profile'>

      <div className='orangeBox'>
        <div className='header'>
          <h1>Hello, {userData.firstName}!</h1>
        </div>
        <div className='subHeader'>
          <h4>Have you thought about your unique pizza order today?</h4>
        </div>

        <div className='profile-details'>
          <h5>First Name: {userData.firstName}</h5>
          <h5>Last Name: {userData.lastName}</h5>
          <h5>Email: {userData.email}</h5>
          <h5>Contact Number: {userData.contact}</h5>
          <h5>Address Line 1: {userData.address1}</h5>
          <h5>Address Line 2: {userData.address2}</h5>
        </div>
      </div>
    </div>
  );
};

export default Profile;

