/* eslint-disable @typescript-eslint/interface-name-prefix */
import * as React from 'react';

interface IFormData {
  name?: string;
  username?: string;
  email?: string;
  companyName?: string;
  companyBs?: string;
  companyPhrase?: string;
}

export default (register: Function) => {
  const [userForm, setUserForm] = React.useState<IFormData>({
    name: '',
    username: '',
    email: '',
    companyName: '',
    companyBs: '',
    companyPhrase: '',
  });


  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target;
    setUserForm({ ...userForm, [name]: value });
  };


  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    register();
  };


  return {
    handleChange,
    handleSubmit,
    userForm,
  };
};
