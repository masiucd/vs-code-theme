import * as React from 'react';
import { StyledUserItem } from './Styled.users';
import { IUser } from '../../context/user/user.types';
import useToggle from '../../hooks/useToggle';

interface Props {
  user: IUser;
}

const UserItem: React.FC<Props> = ({ user }) => {
  const [showAddress, toggleAddress] = useToggle(false);
  const [showCompany, toggleCompany] = useToggle(false);
  return (
    <StyledUserItem>
      <div className="info">
        <p>
          Name:
          {' '}
          <span>{user.name}</span>
        </p>
        <p>
          Email:
          {' '}
          <span>{user.email}</span>
        </p>
        <p>
          Username:
          {' '}
          <span>{user.username}</span>
        </p>
      </div>
      <div className="company">
        <strong onClick={toggleCompany} className="btn-logo">Company &#8595;</strong>
        {showCompany && (
          <>
            <p>
              company name :
              <span>{user.company.name}</span>
            </p>
            <p>
              company BS :
              <span>{user.company.bs}</span>
            </p>
            <p>
              Company CathPhrase:
              {' '}
              <span>{user.company.catchPhrase}</span>
            </p>
          </>
        )}

      </div>


    </StyledUserItem>

  );
};
export default UserItem;
