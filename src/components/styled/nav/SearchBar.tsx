import * as React from 'react';
import { StyledSearchBar } from './Styles.nav';
import { UserContext } from '../../../context/user/user.state';

interface Props {

}

const SearchBar: React.FC<Props> = () => {
  const { searchUser, filterUsers, clearUsers } = React.useContext(UserContext);

  const [searchState, setSearchState] = React.useState<string>('');

  React.useEffect(() => {
    if (filterUsers === [] || filterUsers === null) {
      setSearchState('');
    }
  }, []);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setSearchState(event.target.value);
    if (event.target.value !== '') {
      searchUser(searchState);
    } else {
      clearUsers();
    }
  };


  return (
    <StyledSearchBar>
      <label htmlFor="search">
        <h3>Search Users</h3>
        <input type="text" name="search" onChange={handleChange} />
      </label>
    </StyledSearchBar>
  );
};
export default SearchBar;
