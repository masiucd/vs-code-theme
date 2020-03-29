import * as React from 'react';
import { TwoColWrapper } from '../Wrapper';
import {
  StyledForm, FormGroup, FormLabel, Input,
} from './Styled.Form';

interface Props {
  title: string;
}

const Form: React.FC<Props> = ({ title }) => (
  <TwoColWrapper>
    <h3>{title}</h3>
    <StyledForm>
      <FormGroup>
        <FormLabel>
          <span>Name:</span>
          <Input type="text" placeholder="name" />
        </FormLabel>
      </FormGroup>
      <button type="submit">Submit</button>
    </StyledForm>
  </TwoColWrapper>
);
export default Form;
