import React from 'react';


interface ProfileProps {
  userData: any;
}

const Profile: React.FC<ProfileProps> = ({ userData }) => {

  return (
    <div>
      <h1>Welcome, {userData.firstName}!</h1>
      <p>Email: {userData.email}</p>
      <p>Address 1: {userData.address1}</p>

    </div>
  );
};

export default Profile;

