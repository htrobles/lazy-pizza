import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth, db, userCollection } from '../firebase';
import { doc, getDocs, query, setDoc, where } from 'firebase/firestore';
import { User } from '../types';

interface LoginInput {
  email: string;
  password: string;
}

interface UpdateProfileInput {
  email: string;
  firstName: string;
  lastName: string;
  contact: string;
  address1: string;
  address2: string;
}

export default function useProfile() {
  const { myProfile, setMyProfile } = useContext(AuthContext);

  const login = async (input: LoginInput) => {
    const { email, password } = input;

    try {
      const { user } = await signInWithEmailAndPassword(auth, email, password);

      const q = query(userCollection, where('email', '==', user.email));

      const querySnapshot = await getDocs(q);

      const userData = querySnapshot.docs[0].data();

      setMyProfile(userData as User);
      localStorage.setItem('myProfile', JSON.stringify(userData));
    } catch (error: any) {
      console.log({ code: error.code, message: error.message });
      throw new Error('You have entered invalid credentials.');
    }
  };

  const logout = () => {
    localStorage.removeItem('myProfile');
    setMyProfile(null);
  };

  const updateUser = async (input: UpdateProfileInput): Promise<void> => {
    try {
      const { email } = input;
      const userRef = doc(db, 'users', email);
      const res = await setDoc(userRef, input, { merge: true });

      console.log(res);
      setMyProfile(input);
    } catch (error) {
      console.error('Update user error:', error);
      throw new Error('Failed to update user');
    }
  };

  return { myProfile, logout, login, updateUser };
}
