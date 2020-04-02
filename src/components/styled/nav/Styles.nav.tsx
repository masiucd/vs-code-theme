/* eslint-disable import/extensions */
import styled from 'styled-components';
import { FadeOutRight } from '../animation';


export const StyledNav = styled.nav`
  display: flex;
  align-items:center;
  justify-content: space-between;
  padding: 1.5rem .5rem;
  #toggleIcon{
    font-size: 2rem;
    cursor: pointer;
  }
  @media(max-width: 700px){
    justify-content: space-around;
  }
`;


export const StyledNavList = styled.ul`

  @media(max-width: 700px){
    display: none;
  }
  a{
    font-size: 1.2rem;
    padding: .3rem;
    transition:${({ theme }) => theme.transition.mainTransition};
    &:hover{
      background: ${({ theme }) => theme.colors.primary};
      color: ${({ theme }) => theme.colors.white};
      box-shadow: ${({ theme }) => theme.shadow.lightShadow};
    }
  }
`;

export const StyledSearchBar = styled.nav`
  padding: .5rem .8rem;
  animation: ${FadeOutRight} 1s both;
  label {
    h3{
      font-size: 2rem;
      text-align: center;
    }
  }
  input{
    width: 25rem;
    border-radius: .6rem;
    padding: .1rem .5rem;
    font-size: .9rem;
    border: 2px solid ${({ theme }) => theme.colors.primary};
    box-shadow:  ${({ theme }) => theme.shadow.lightShadow};
    outline: none;
    transition:${({ theme }) => theme.transition.mainTransition};
    &:focus{
      padding: .2rem .6rem;
    }
  }
  @media(max-width:500px){
    input{
      width: 12rem;
    }
  }
`;
