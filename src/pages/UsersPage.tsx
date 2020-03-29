import * as React from 'react';
import Users from '../components/users/Users';
import Form from '../components/styled/form/Form';
import { UserPageWrapper } from '../components/styled/Wrapper';

interface Props {

}

const UsersPage: React.FC<Props> = () => (
  <>
    <UserPageWrapper>
      <Form title="Register" />
      <Users />
    </UserPageWrapper>
  </>
);
export default UsersPage;
