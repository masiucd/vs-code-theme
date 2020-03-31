/* eslint-disable import/no-cycle */
/* eslint-disable import/extensions */
import {
  IUserState, UserActionType, UsersActions, IUser,
} from './user.types';
import { initialState } from './user.state';

export default (state: IUserState = initialState, action: UserActionType) => {
  switch (action.type) {
    case UsersActions.GET_USERS:
      return {
        ...state,
        users: action.payload,
        loading: false,
      };
    case UsersActions.ADD_USER:
      return {
        ...state,
        users: [action.payload, ...state.users],
        loading: false,
      };
    case UsersActions.UPDATE_USER:

      return {
        ...state,
        users: state.users.map((user) => (user.id === action.payload.id ? action.payload : user)),
        loading: false,
      };
    case UsersActions.DELETE_USER:
      return {
        ...state,
        users: state.users.filter((user) => user.id.toString() !== action.payload),
        loading: false,
      };
    case UsersActions.SET_CURRENT:
      return {
        ...state,
        current: action.payload,
      };
    default:
      return state;
  }
};
