/* eslint-disable import/extensions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/accessible-emoji */
import * as React from 'react';
import { Link } from 'react-router-dom';
import { StyledNav, StyledNavList } from './Styles.nav';
import SearchBar from './SearchBar';
import useToggle from '../../../hooks/useToggle';

interface Props {

}

const Navbar: React.FC<Props> = () => {
  const [showSearchBar, toggleFn] = useToggle(false);
  return (
    <StyledNav>
      <div id="toggleIcon" onClick={toggleFn}>␦Seλrch</div>
      {showSearchBar && <SearchBar />}

      <StyledNavList>
        <Link to="/">
          Home
        </Link>
        <Link to="/users">
          Users
        </Link>
      </StyledNavList>

    </StyledNav>
  );
};
export default Navbar;
