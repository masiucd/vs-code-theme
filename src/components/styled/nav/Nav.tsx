import * as React from 'react';
import { Link } from 'react-router-dom';
import { StyledNav } from './Styles.nav';

interface Props {

}

const Navbar: React.FC<Props> = () => {
  let a;
  return (
    <StyledNav>
      {' '}

      <Link to="/">
        Home
      </Link>
      <Link to="/users">
        Users
      </Link>
      {' '}
    </StyledNav>
  );
};
export default Navbar;
