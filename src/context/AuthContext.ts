import { createContext } from 'react';
import { User } from '../types';

export const AuthContext = createContext<{
  myProfile: User | null;
  setMyProfile: React.Dispatch<React.SetStateAction<User | null>>;
}>({ myProfile: null, setMyProfile: () => {} });
