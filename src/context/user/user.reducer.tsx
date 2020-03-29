/* eslint-disable import/no-cycle */
/* eslint-disable import/extensions */
import { IUserState, UserActionType, UsersActions } from './user.types';
import { initialState } from './user.state';

export default (state: IUserState = initialState, action: UserActionType) => {
  switch (action.type) {
    case UsersActions.GET_USERS:
      return {
        ...state,
        users: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};
