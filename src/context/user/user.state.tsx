/* eslint-disable no-undef */
/* eslint-disable import/no-cycle */
/* eslint-disable import/extensions */
/* eslint-disable react/prop-types */
/* eslint-disable @typescript-eslint/interface-name-prefix */
import * as React from 'react';
import axios from 'axios';
import userReducer from './user.reducer';
import {
  IUser, IUserState, UsersActions,
  GetUserAction, GetUsersAction, AddUserAction, UpdateUserAction, DeleteUserAction,
} from './user.types';
import { IFormData } from '../../hooks/useForm';

export const initialState: IUserState = {
  users: [],
  loading: true,
  user: null,
  current: null,
  filterUsers: null,
  getUsers: Function,
  setCurrent: Function,
  addUser: Function,
  updateUser: Function,
  deleteUser: Function,
};

export const UserContext = React.createContext<IUserState>(initialState);

interface Props {
  children: React.ReactNode;
}

const UserProvider: React.FC<Props> = ({ children }) => {
  const [state, dispatch] = React.useReducer(userReducer, initialState);

  const getUsers = async (): Promise<void> => {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/users');
      const resBody = await response.json();
      dispatch({
        type: UsersActions.GET_USERS,
        payload: resBody,
      });
    } catch (err) {
      console.error(err);
    }
  };


  const setCurrent = (user: IUser): void => {
    dispatch({
      type: UsersActions.SET_CURRENT,
      payload: user,
    });
  };


  const addUser = async (formData: IUser): Promise<void> => {
    try {
      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      };
      const response = await fetch(
        'https://jsonplaceholder.typicode.com/users', { method: 'POST', body: JSON.stringify(formData), headers: config.headers },
      );
      const resBody = await response.json();
      dispatch({
        type: UsersActions.ADD_USER,
        payload: resBody,
      });
    } catch (err) {
      console.error(err);
    }
  };


  const updateUser = async (user: IUser): Promise<void | UpdateUserAction> => {
    try {
      const response = await fetch(`https://jsonplaceholder.typicode.com/users/${user.id}`,
        {
          method: 'PUT',
          body: JSON.stringify(user),
          headers: { 'Content-Type': 'application/json' },
        });
      const resBody: IUser = await response.json();

      dispatch({
        type: UsersActions.UPDATE_USER,
        payload: resBody,
      });
    } catch (err) {
      console.log(err);
    }
  };


  const deleteUser = async (id: number): Promise<void | DeleteUserAction> => {
    try {
      await axios.delete(`https://jsonplaceholder.typicode.com/users/${id.toString()}`);
      dispatch({
        type: UsersActions.DELETE_USER,
        payload: id.toString(),
      });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <UserContext.Provider value={{
      users: state.users,
      loading: state.loading,
      user: state.user,
      current: state.current,
      filterUsers: state.filterUsers,
      getUsers,
      setCurrent,
      addUser,
      updateUser,
      deleteUser,
    }}
    >
      {children}
    </UserContext.Provider>
  );
};
export default UserProvider;
