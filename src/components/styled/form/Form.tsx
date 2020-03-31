/* eslint-disable import/extensions */
/* eslint-disable @typescript-eslint/no-use-before-define */
import * as React from 'react';
import { TwoColWrapper } from '../Wrapper';
import {
  StyledForm, FormGroup, FormLabel, Input,
} from './Styled.Form';
import { StyledBtn } from '../Buttons';
import useForm from '../../../hooks/useForm';
import { UserContext } from '../../../context/user/user.state';

interface Props {
  title: string;
}

const Form: React.FC<Props> = ({ title }) => {
  const { addUser, current } = React.useContext(UserContext);
  const {
    userForm, handleChange, handleSubmit, setUserForm,
  } = useForm(register, current);


  // React.useEffect(() => {
  //   if (current && current !== null) {
  //     setUserForm({ });
  //   } else {
  //     setUserForm(userForm);
  //   }
  // }, []);

  function register() {
    addUser(userForm);
    console.log('USER ADDED!!');
  }


  return (
    <TwoColWrapper>
      <StyledForm onSubmit={handleSubmit}>
        <h3>{title}</h3>
        <FormGroup>
          <FormLabel>
            <span>Name:</span>
            <Input onChange={handleChange} type="text" placeholder="name" value={userForm.name} name="name" />
          </FormLabel>
        </FormGroup>

        <FormGroup>
          <FormLabel>
            <span>Email:</span>
            <Input onChange={handleChange} type="email" placeholder="email" value={userForm.email} name="email" />
          </FormLabel>
        </FormGroup>

        <FormGroup>
          <FormLabel>
            <span>Username:</span>
            <Input onChange={handleChange} type="text" placeholder="username" value={userForm.username} name="username" />
          </FormLabel>
        </FormGroup>

        <FormGroup>
          <FormLabel>
            <span>phone:</span>
            <Input onChange={handleChange} type="text" placeholder="phone" value={userForm.phone} name="phone" />
          </FormLabel>
        </FormGroup>

        <FormGroup>
          <FormLabel>
            <span>Website:</span>
            <Input onChange={handleChange} type="text" placeholder="website" value={userForm.website} name="website" />
          </FormLabel>
        </FormGroup>


        <StyledBtn type="submit">Register</StyledBtn>
      </StyledForm>
    </TwoColWrapper>
  );
};
export default Form;
