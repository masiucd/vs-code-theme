/* eslint-disable @typescript-eslint/interface-name-prefix */
import * as React from 'react';
import userReducer from './user.reducer';

export interface IUser {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
}

export interface IUserState {
  users: IUser[];
  user: IUser | null;
  loading: boolean;
}

const initialState: any = {
  users: [],
  loading: true,
  user: null,
};

export const UserContext = React.createContext<any>(initialState);

interface Props {
  children: React.ReactNode;
}

const UserProvider: React.FC<Props> = ({ children }) => {
  const [state, dispatch] = React.useReducer(userReducer, initialState);
  return (
    <UserContext.Provider value={initialState}>
      {children}
    </UserContext.Provider>
  );
};
export default UserProvider;
