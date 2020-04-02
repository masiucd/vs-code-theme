import styled from 'styled-components';
import { Link } from 'react-router-dom';


export const StyledBtn = styled.button`
  box-shadow: ${({ theme }) => theme.shadow.lightShadow};
  border-radius: 8px;
  display: block;
  cursor:pointer;
  color: ${({ theme }) => theme.colors.white};
  font-size: 20px;
  padding: .4rem .6rem;
  width: 12rem;
  text-decoration:none;
  transition: ${(props) => props.theme.transition.mainTransition};
  margin: .8rem 0 .5rem 0;
  letter-spacing: .1rem;
  font-weight: 500;
  text-transform: capitalize;
  background-image: -webkit-gradient(linear, left top, right top, color-stop(50%, ${({ theme }) => theme.colors.common}), color-stop(50%, ${({ theme }) => theme.colors.warning}));
  background-image: linear-gradient(to right, ${({ theme }) => theme.colors.common} 50%, ${({ theme }) => theme.colors.warning} 50%);
  background-position: 0;
  background-size: 200%;
  border: none;

    &:hover{
      box-shadow: ${({ theme }) => theme.shadow.darkShadow};
      background-position: -100%;
      color: ${({ theme }) => theme.colors.primary}
    }
    &:active{
      position: relative;
      top: 2px;
    }
`;


export const StyledLink = styled(Link)`
 text-transform: capitalize;
  background-image: -webkit-gradient(linear, left top, right top, color-stop(50%, ${({ theme }) => theme.colors.common}), color-stop(50%, ${({ theme }) => theme.colors.warning}));
  background-image: linear-gradient(to right, ${({ theme }) => theme.colors.common} 50%, ${({ theme }) => theme.colors.warning} 50%);
  background-position: 0;
  background-size: 200%;
  border: none;
  padding: .3rem .7rem;
  margin-top: 1rem;
  color: ${({ theme }) => theme.colors.white};
  transition: ${(props) => props.theme.transition.mainTransition};
  font-size: 20px;
    &:hover{
      box-shadow: ${({ theme }) => theme.shadow.darkShadow};
      background-position: -100%;
      color: ${({ theme }) => theme.colors.primary}
    }
    &:active{
      position: relative;
      top: 2px;
    }
`;
