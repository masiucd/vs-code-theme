import { keyframes } from 'styled-components';


export const FadeIn = keyframes`
    0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;


export const FadeOutRight = keyframes`
 0% {
  opacity: 0;
  -webkit-transform: translate3d(100%, 0, 0);
  transform: translate3d(100%, 0, 0);
  }
  100% {
  opacity: 1;
  -webkit-transform: none;
  transform: none;
  }
  `;
