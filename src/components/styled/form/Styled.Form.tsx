import styled from 'styled-components';
import { FlexStyle } from '../Global';


export const StyledForm = styled.form`
  ${FlexStyle};
  border: 2px solid ${(props) => props.theme.colors.primary};
  padding: 1rem 1.5rem;
  width: 100%;
  border-radius: .6rem;
  box-shadow: ${(props) => props.theme.shadow.lightShadow};
  h3{
    background: ${(props) => props.theme.colors.primary};
    color: ${(props) => props.theme.colors.white};
    box-shadow: ${(props) => props.theme.shadow.lightShadow};
    padding: 1rem;
    border-radius: .6rem .2rem;
    width: 100%;
    text-align:center;
    font-size: 2.5rem;
  }
  @media(max-width:450px){
    h3{
      font-size: 2rem;
    }
  }
  @media(max-width:333px){
    h3{
      font-size: 1.5rem;
    }
  }

`;


export const FormGroup = styled.div`
  ${FlexStyle};

  padding: 1rem;
  width: 100%;
`;
export const FormLabel = styled.label`
  ${FlexStyle};
  span{
    text-transform: capitalize;
    font-size: 1rem;
    margin: .6rem auto .6rem 0;
    font-weight: 700;
  }
`;

export const Input = styled.input`
  height: 2rem;
  font-size: 1rem;
  padding: .3rem .6rem;
  border: 2px solid ${({ theme }) => theme.colors.common};
  box-shadow: ${({ theme }) => theme.shadow.lightShadow};
  transition: ${({ theme }) => theme.transition.mainTransition};
  border-radius: .6rem;
  outline:none;
  margin: .5rem auto;
  &:focus{
    border: 3px solid ${({ theme }) => theme.colors.common};
    box-shadow: ${({ theme }) => theme.shadow.darkShadow};
    height: 2.3rem;
    }

  @media(min-width:300px){
    width: 9rem;
    &:focus{
      width: 10rem;
      }
  }

  @media(min-width:430px){
    width: 16rem;

  &:focus{
    width: 17rem;
    }
  }
  @media(min-width:560px){
    width: 50vw;

  &:focus{
    width: 52vw;
    }
  }
  @media(min-width:996px){
    width: 30vw;

  &:focus{
    width: 32vw;
    }
  }
  @media(min-width:1600px){
    width: 23vw;

  &:focus{
    width: 24.5vw;
    }
  }
`;
