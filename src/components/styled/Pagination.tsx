/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import * as React from 'react';
import styled from 'styled-components';

interface Props {
  usersPerPage: number;
  totalUsers: number;
  currentPage: number;
  paginate: (pageNumber: number) => void;
}

const Pagination: React.FC<Props> = ({
  usersPerPage, totalUsers, paginate, currentPage,
}) => {
  const pages: number[] = [];

  for (let i = 1; i <= Math.ceil(totalUsers / usersPerPage); i++) {
    pages.push(i);
  }


  return (
    <PagiNav>
      <ul>
        {pages.map((n) => (
          <li className={currentPage === n ? 'active' : ''}>
            {' '}

            <span onClick={() => paginate(n)}>
              {' '}
              {n}
              {' '}
            </span>
            {' '}
          </li>
        ))}
      </ul>
    </PagiNav>
  );
};
export default Pagination;


const PagiNav = styled.nav`
  width: 100%;
  margin-top: 1rem;
  ul{
    display: flex;
    justify-content:space-between;
  }
  li{
    padding: .3rem  .7rem;
    box-shadow: ${(props) => props.theme.shadow.lightShadow};
    transition: ${(props) => props.theme.transition.mainTransition};
    background: ${(props) => props.theme.colors.common};

    &:hover{
      background: ${(props) => props.theme.colors.white};
      box-shadow: ${(props) => props.theme.shadow.darkShadow};
    }
  }
  span{
    font-size: 1.5rem;
    cursor: pointer;
    color: ${(props) => props.theme.colors.white};
    transition: ${(props) => props.theme.transition.mainTransition};
    &:hover{
      color: ${(props) => props.theme.colors.primary};
    }

  }

  .active{
    background: ${(props) => props.theme.colors.warning};
    span{
      color: ${(props) => props.theme.colors.primary};

    }
  }

`;
