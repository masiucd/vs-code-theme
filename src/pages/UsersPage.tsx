/* eslint-disable import/extensions */
import * as React from 'react';
import { MemorizedMovie } from '../components/users/Users';
import Form from '../components/styled/form/Form';
import { UserPageWrapper } from '../components/styled/Wrapper';
import { UserContext } from '../context/user/user.state';

interface Props {

}

const UsersPage: React.FC<Props> = () => {
  const { current } = React.useContext(UserContext);
  return (
    <>
      <UserPageWrapper>
        <Form title={current ? 'Update' : 'Register'} />
        <MemorizedMovie />
      </UserPageWrapper>
    </>
  );
};
export default UsersPage;
