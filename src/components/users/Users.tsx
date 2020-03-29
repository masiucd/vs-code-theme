import * as React from 'react';
import { UserContext } from '../../context/user/user.state';
import UserItem from './UserItem';
import { TwoColWrapper } from '../styled/Wrapper';

interface Props {

}

const Users: React.FC<Props> = () => {
  const { getUsers, users, loading } = React.useContext(UserContext);
  React.useEffect(() => {
    getUsers();
  }, []);

  return (
    <>
      <TwoColWrapper>
        {!loading && users.length > 0 && users.map((user) => <UserItem key={user.id} user={user} />)}
      </TwoColWrapper>
    </>
  );
};
export default Users;
