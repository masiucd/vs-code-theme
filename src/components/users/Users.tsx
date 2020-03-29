import * as React from 'react';
import { UserContext } from '../../context/user/user.state';

interface Props {

}

const Users: React.FC<Props> = () => {
  const { getUsers, users } = React.useContext(UserContext);
  React.useEffect(() => {
    getUsers();
  }, []);
  console.log(users);
  return (
    <div>
      {' '}
      <h1> Legia CWSKS </h1>
      {' '}
    </div>
  );
};
export default Users;
