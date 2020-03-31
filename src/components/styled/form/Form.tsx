/* eslint-disable @typescript-eslint/no-use-before-define */
import * as React from 'react';
import { TwoColWrapper } from '../Wrapper';
import {
  StyledForm, FormGroup, FormLabel, Input,
} from './Styled.Form';
import { StyledBtn } from '../Buttons';
import useForm from '../../../hooks/useForm';

interface Props {
  title: string;
}

const Form: React.FC<Props> = ({ title }) => {
  const { userForm, handleChange, handleSubmit } = useForm(register);

  function register() {
    alert(userForm.name);
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
            <span>Company:</span>
            <Input onChange={handleChange} type="text" placeholder="company" value={userForm.companyName} name="companyName" />
          </FormLabel>
        </FormGroup>

        <FormGroup>
          <FormLabel>
            <span>Company BS:</span>
            <Input onChange={handleChange} type="text" placeholder="company BS" value={userForm.companyBs} name="companyBs" />
          </FormLabel>
        </FormGroup>
        <FormGroup>

          <FormLabel>
            <span>Company Catch phrase:</span>
            <Input onChange={handleChange} type="text" placeholder="company phrase" value={userForm.companyPhrase} name="companyPhrase" />
          </FormLabel>
        </FormGroup>

        <StyledBtn type="submit">Register</StyledBtn>
      </StyledForm>
    </TwoColWrapper>
  );
};
export default Form;
