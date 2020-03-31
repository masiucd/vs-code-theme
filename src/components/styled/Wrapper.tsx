import styled from 'styled-components';
import { FlexStyle } from './Global';


export const Container = styled.div`
    width: 100%;
  padding: 0 0.5rem;
  margin: 2rem auto;
  min-height: 50vh;
  @media (min-width: 576px) {
    max-width: 540px;
  }
  @media (min-width: 768px) {
    max-width: 720px;
  }
  @media (min-width: 992px) {
    max-width: 960px;
  }
  @media (min-width: 1200px) {
    max-width: 1140px;
  }
`;


export const UserPageWrapper = styled.div`
  display: flex;
  width: 100%;
  min-height: 70vh;
  padding: 1rem;
  @media(max-width:995px){
    flex-direction: column;
    justify-content : center;
    align-items: center;
  }
`;

export const TwoColWrapper = styled.div`
  width: 50%;
  ${FlexStyle};
  padding: 1rem 1.2rem;
  /* TODO:check */
  /* overflow: scroll; */
  /* max-height: 120vh; */
  margin: 0 1rem;
  @media(max-width:995px){
    flex-direction: column;
    justify-content : center;
    align-items: center;
    width: 100%;
  }
`;
