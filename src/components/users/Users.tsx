/* eslint-disable import/extensions */
import * as React from 'react';
import { UserContext } from '../../context/user/user.state';
import UserItem from './UserItem';
import { TwoColWrapper } from '../styled/Wrapper';
import { IUser } from '../../context/user/user.types';
import Pagination from '../styled/Pagination';

interface Props {

}

const Users: React.FC<Props> = () => {
  const {
    getUsers, users, filterUsers, loading,
  } = React.useContext(UserContext);
  React.useEffect(() => {
    getUsers();
  }, []);

  const [currentPage, setCurrentPage] = React.useState<number>(1);
  const [usersPerPage, setUsersPerPage] = React.useState<number>(2);


  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = users.slice(indexOfFirstUser, indexOfLastUser);


  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);


  return (
    <>
      <TwoColWrapper>
        {!loading && filterUsers !== null ? filterUsers.map(
          (user) => <UserItem key={user.id} user={user} />,
        ) : currentUsers.map((user) => <UserItem key={user.id} user={user} />)}
        <Pagination usersPerPage={usersPerPage} totalUsers={users.length} paginate={paginate} currentPage={currentPage} />
      </TwoColWrapper>
    </>
  );
};


export default Users;
export const MemorizedMovie = React.memo(Users);
