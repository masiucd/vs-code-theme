import styled from 'styled-components';
import { FlexStyle } from '../styled/Global';
import { FadeIn } from '../styled/animation';


export const StyledUserWrapper = styled.div`

`;

export const StyledUserItem = styled.div`
#updateIcon,#deleteIcon{
  position: absolute;

  font-size: 1.4rem;
  cursor: pointer;
  z-index: 2;
}
#deleteIcon{
  top: 1rem;
  right: 1rem
}

#updateIcon{
  top: 1rem;
  right: 3.5rem;
}
  display: flex;
  position: relative;
  flex-direction:column;
  align-items:center;
  justify-content: space-around;
  padding: 1rem;
  background: ${(props) => props.theme.colors.common};
  width: 100%;
  color: ${(props) => props.theme.colors.white};
  margin: 1rem 0;
  box-shadow: ${(props) => props.theme.shadow.lightShadow};
  letter-spacing: .1rem;
  border-radius: 1rem;
  animation: .5s ${FadeIn} ease-in;
  p{
    font-size: 1.2rem;
    span{
      color: ${(props) => props.theme.colors.warning};
    }
  }

  .company,.address{
    font-size: 1rem;
    ${FlexStyle};
    justify-content:center;
    align-items:center;
    width: 100%;

    p{
      animation: 500ms ${FadeIn} ease-in;
      text-align:center;
      text-transform: capitalize;
      span{
        display: block;
      }
    }
  }
  .btn-logo{
    cursor: pointer;
    margin: 1rem 0;
    font-size: 1.5rem;
    margin-right: auto;

  }
`;
