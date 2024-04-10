import React, { useState } from 'react';
import './Profile.scss';

const Profile = () => {
  const myUser = JSON.parse(localStorage.getItem('myUser') as string);
  const [userData, setUserData] = useState<any>(myUser[0]);
  // setUserData(myUser[0]);
  console.log('PROFILE:', myUser[0]);

  return (
    <div className='my-profile'>
      <div className='profile-orangeBox'>
        <div className='header'>
          <h1>Hello, {userData.firstName}!</h1>
        </div>
        <div className='subHeader'>
          <h4>Have you thought about your unique pizza order today?</h4>
        </div>

        <div className='profile-details'>
          <table>
            <tbody>
              <tr>
                <td className="detail-label">First Name:</td>
                <td className="detail-value">{userData.firstName}</td>
              </tr>
              <tr>
                <td className="detail-label">Last Name:</td>
                <td className="detail-value">{userData.lastName}</td>
              </tr>
              <tr>
                <td className="detail-label">Email:</td>
                <td className="detail-value">{userData.email}</td>
              </tr>
              <tr>
                <td className="detail-label">Contact Number:</td>
                <td className="detail-value">{userData.contact}</td>
              </tr>
              <tr>
                <td className="detail-label">Address Line 1:</td>
                <td className="detail-value">{userData.address1}</td>
              </tr>
              <tr>
                <td className="detail-label">Address Line 2:</td>
                <td className="detail-value">{userData.address2}</td>
              </tr>
            </tbody>
          </table>
        </div>


      </div>
      <img className="pizza-bg" src='/pizza-toss.png' alt="pizza-bg2" />
    </div>
  );
};

export default Profile;

