import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
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

const usersCollection = collection(db, 'users');

export const loginUser = async (input: { email: string, password: string }) => {
  const { email, password } = input;

  try {
    const { user } = await signInWithEmailAndPassword(auth, email, password);

    const q = query(usersCollection, where('email', '==', user.email));

    const querySnapshot = await getDocs(q);

    const userData = querySnapshot.docs[0].data();

    return userData;
  } catch (error: any) { // explicitly type the error parameter
    console.log({ code: error.code, message: error.message });
    throw new Error('You have entered invalid credentials.');
  }
};

export const registerUser = async (input: {
  firstName: string,
  lastName: string,
  email: string,
  password: string,
  contact: string,
  address1: string,
  address2: string,
}) => {
  try {
    const {
      firstName, lastName, email, password, contact, address1, address2,
    } = input;

    // Check for existing username and email
    const userRef = doc(db, 'users', email);
    const docSnap = await getDoc(userRef);

    if (docSnap.exists()) {
      throw new Error('Email already taken');
    }

    // Create User
    const { user: newUser } = await createUserWithEmailAndPassword(
      auth,
      email,
      password,
    );

    if (newUser) {
      await setDoc(doc(db, 'users', email), {
        firstName,
        lastName,
        email,
        address1,
        address2,
        contact,
        subId: newUser.uid,
      });
    }
  } catch (error: any) { // explicitly type the error parameter
    let messageOutput;

    if (error.code === 'auth/email-already-in-use') {
      messageOutput = 'Email address already in use.';
    } else {
      messageOutput = error.message;
    }

    throw new Error(messageOutput);
  }
};

export const fetchUser = async (email: string) => {
  const userRef = doc(db, 'users', email);

  const user = await getDoc(userRef);

  return { ...user.data(), id: email };
};
