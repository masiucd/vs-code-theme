/* eslint-disable @typescript-eslint/interface-name-prefix */
import * as React from 'react';
import { IUser } from '../context/user/user.types';

export interface IFormData {
  id?: number;
  name?: string;
  username?: string;
  email?: string;
  phone?: string;
  website?: string;
}


export default (register: Function, current: IUser | null) => {
  const [userForm, setUserForm] = React.useState<IFormData>({
    name: '',
    username: '',
    email: '',
    phone: '',
    website: '',
  });


  React.useEffect(() => {
    // handle current value here
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target;
    setUserForm({ ...userForm, [name]: value });
  };


  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    register();
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
