/* eslint-disable @typescript-eslint/interface-name-prefix */
import * as React from 'react';
import { IUser } from '../context/user/user.types';


export interface IFormData {
  id?: number | null|string;
  name?: string;
  username?: string;
  email?: string;
  phone?: string;
  website?: string;
}


export default (
  handleSubmitNewUser: Function, handleUpdateUser: Function, current: IUser | null,
) => {
  const [userForm, setUserForm] = React.useState<IFormData>({
    id: current ? current.id.toString() : null,
    name: '',
    username: '',
    email: '',
    phone: '',
    website: '',
  });


  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target;
    setUserForm({ ...userForm, [name]: value });
  };


  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (current !== null) {
      handleUpdateUser();
    } else {
      handleSubmitNewUser();
    }
    setUserForm({
      name: '',
      username: '',
      email: '',
      phone: '',
      website: '',
    });
  };


  return {
    handleChange,
    handleSubmit,
    userForm,
    setUserForm,
  };
};
