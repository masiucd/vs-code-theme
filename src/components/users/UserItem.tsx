/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/accessible-emoji */
/* eslint-disable react/prop-types */
import * as React from 'react';
import { StyledUserItem } from './Styled.users';
import { IUser } from '../../context/user/user.types';
import useToggle from '../../hooks/useToggle';
import { UserContext } from '../../context/user/user.state';

interface Props {
  user: IUser;
}

const UserItem: React.FC<Props> = ({ user }) => {
  const [showCompany, toggleCompany] = useToggle(false);
  const { setCurrent } = React.useContext(UserContext);

  return (
    <StyledUserItem>
      <div id="updateIcon" onClick={() => setCurrent(user)}>✏️</div>
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
