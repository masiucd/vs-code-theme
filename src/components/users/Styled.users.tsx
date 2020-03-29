import styled from 'styled-components';
import { FlexStyle } from '../styled/Global';


export const StyledUserWrapper = styled.div`

`;

export const StyledUserItem = styled.div`
  display: flex;
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
      text-align:center;
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
