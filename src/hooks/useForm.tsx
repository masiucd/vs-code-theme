/* eslint-disable @typescript-eslint/interface-name-prefix */
import * as React from 'react';


export interface IFormData {
  id?: number;
  name?: string;
  username?: string;
  email?: string;
  phone?: string;
  website?: string;
}


export default (register: Function) => {
  const [userForm, setUserForm] = React.useState<IFormData>({
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
