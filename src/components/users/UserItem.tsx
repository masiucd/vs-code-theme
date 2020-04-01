/* eslint-disable import/extensions */
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
  const { setCurrent, deleteUser } = React.useContext(UserContext);

  const handleDelete = () => {
    deleteUser(user.id.toString());
    console.log('deleting!!!');
  };
  return (
    <StyledUserItem>
      <div id="updateIcon" onClick={() => setCurrent(user)}>✏️</div>
      <div id="deleteIcon" onClick={handleDelete}>🗑</div>
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
        <strong onClick={toggleCompany} className="btn-logo">extra &#8595;</strong>
        {showCompany && (
          <>
            <p>
              phone :
              <span>{user.phone && user.phone }</span>
            </p>
            <p>
              website :
              <span>{user.website && user.website }</span>
            </p>

          </>
        )}

      </div>


    </StyledUserItem>

  );
};
export default UserItem;
