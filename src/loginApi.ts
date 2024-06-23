import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from 'firebase/auth';
import {
  collection,
  doc,
  getDoc,
  getDocs,
  query,
  setDoc,
  where,
} from 'firebase/firestore';
import { auth, db } from './firebase';
import { User } from './types';

const usersCollection = collection(db, 'users');

export const loginUser = async (input: { email: string; password: string }) => {
  const { email, password } = input;

  try {
    const { user } = await signInWithEmailAndPassword(auth, email, password);

    const q = query(usersCollection, where('email', '==', user.email));

    const querySnapshot = await getDocs(q);

    const userData = querySnapshot.docs[0].data();

    return userData;
  } catch (error: any) {
    console.log({ code: error.code, message: error.message });
    throw new Error('You have entered invalid credentials.');
  }
};

export const registerUser = async (input: {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  contact: string;
  address1: string;
  address2: string;
  city: string;
  province: string;
}) => {
  try {
    const {
      firstName,
      lastName,
      email,
      password,
      contact,
      address1,
      address2,
      city,
      province,
    } = input;

    const userRef = doc(db, 'users', email);
    const docSnap = await getDoc(userRef);

    if (docSnap.exists()) {
      throw new Error('Email already taken');
    }

    const { user: newUser } = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );

    if (newUser) {
      await setDoc(doc(db, 'users', email), {
        firstName,
        lastName,
        email,
        address1,
        address2,
        contact,
        city,
        province,
      });
    }
  } catch (error: any) {
    // explicitly type the error parameter
    let messageOutput;

    if (error.code === 'auth/email-already-in-use') {
      messageOutput = 'Email address already in use.';
    } else {
      messageOutput = error.message;
    }

    throw new Error(messageOutput);
  }
};

export const fetchUser = async (email: string): Promise<User | null> => {
  const userRef = doc(db, 'users', email);
  const userDoc = await getDoc(userRef);

  if (!userDoc.exists()) {
    return null; // Return null if the document does not exist
  }

  const userData = userDoc.data();

  const user: User = {
    email,
    firstName: userData.firstName || '',
    lastName: userData.lastName || '',
    contact: userData.contact || '',
    address1: userData.address1 || '',
    address2: userData.address2 || '',
    city: userData.city || '',
    province: userData.city || '',
  };

  return user;
};

export const logoutUser = async (): Promise<void> => {
  try {
    await signOut(auth);
  } catch (error) {
    console.error('Logout error:', error);
    throw new Error('Failed to logout');
  }
};

export const updateUser = async (input: {
  email: string;
  firstName: string;
  lastName: string;
  contact: string;
  address1: string;
  address2: string;
  city: string;
  province: string;
}): Promise<void> => {
  try {
    const { email } = input;
    const userRef = doc(db, 'users', email);
    await setDoc(userRef, input, { merge: true });
  } catch (error) {
    console.error('Update user error:', error);
    throw new Error('Failed to update user');
  }
};
