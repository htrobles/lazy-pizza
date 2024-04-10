import React, { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from './firebase'; // Assuming you have a firebase.js file exporting your firebase configuration and firestore instance

interface User {
  address1: string;
  address2: string;
  contact: string;
  email: string;
  firstName: string;
  lastName: string;
  subId: string;
}

const UsersComponent: React.FC = () => {
  const [users, setUsers] = useState<Record<string, User>>({}); // Object to store users with email as key
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [message, setMessage] = useState<string>('');

  useEffect(() => {
    setIsLoading(true);
    const fetchUsers = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'users')); // Assuming your collection name is 'users'
        const usersData: Record<string, User> = {}; // Object to store users with email as key

        querySnapshot.forEach(doc => {
          // Construct the user object
          const userData: User = doc.data() as User;
          usersData[userData.email] = userData;
        });

        console.log("Users data from Firestore:", usersData);

        setUsers(usersData);
        setIsLoading(false);
        if (Object.keys(usersData).length === 0) {
          setMessage("There are no users to load.");
        } else {
          setMessage('Users loaded!');
        }
        setTimeout(() => {
          setMessage('');
        }, 3000); // Hide the alert after 3 seconds

      } catch (error) {
        console.error('Error fetching users:', error);
        //setMessage('Error fetching users:', error);
        setTimeout(() => {
          setMessage('');
        }, 3000); // Hide the alert after 3 seconds
      }
    };

    fetchUsers();
  }, []);

  return (
    <div>
      {isLoading && <p>Loading...</p>}
      {message && <p>{message}</p>}
      {Object.keys(users).map(email => (
        <div key={email}>
          <p>Email: {email}</p>
          <p>First Name: {users[email].firstName}</p>
          <p>Last Name: {users[email].lastName}</p>
          <p>Address 1: {users[email].address1}</p>
          <p>Address 2: {users[email].address2}</p>
          <p>Contact: {users[email].contact}</p>
        </div>
      ))}
    </div>
  );
};

export default UsersComponent;
