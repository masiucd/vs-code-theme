/* eslint-disable @typescript-eslint/interface-name-prefix */
export interface IUser {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
  website: string;
}

export interface IUserState {
  users: IUser[];
  user: IUser | null;
  loading: boolean;
  current: null | IUser;
  filterUsers: IUser[] | null;
  getUsers: Function;
  setCurrent: Function;
  addUser: Function;
  updateUser: Function;
  deleteUser: Function;
  clearCurrent: Function;
  searchUser: Function;
  clearUsers: Function;
}

export enum UsersActions {
  GET_USERS = 'GET_USERS',
  GET_USER = 'GET_USER',
  ADD_USER = 'ADD_USER',
  UPDATE_USER = 'UPDATE_USER',
  DELETE_USER = 'DELETE_USER',
  SEARCH_USER = 'SEARCH_USER',
  CLEAR_CURRENT = 'CLEAR_CURRENT',
  CLEAR_SEARCH = 'CLEAR_SEARCH',
  SET_CURRENT = 'SET_CURRENT',

}

export interface GetUsersAction {
  type: UsersActions.GET_USERS;
  payload: IUser[];
}

export interface GetUserAction {
  type: UsersActions.GET_USER;
  payload: IUser;
}
export interface AddUserAction {
  type: UsersActions.ADD_USER;
  payload: IUser;
}

export interface UpdateUserAction {
  type: UsersActions.UPDATE_USER;
  payload: IUser;
}

export interface DeleteUserAction {
  type: UsersActions.DELETE_USER;
  payload: string;
}
export interface SetCurrentAction {
  type: UsersActions.SET_CURRENT;
  payload: IUser;
}

export interface ClearCurrentAction {
  type: UsersActions.CLEAR_CURRENT;
}

export interface SearchUserAction {
  type: UsersActions.SEARCH_USER;
  payload: string;
}
export interface ClearSearch {
  type: UsersActions.CLEAR_SEARCH;

}

export type UserActionType =
  GetUsersAction
  | GetUserAction
  | UpdateUserAction
  | DeleteUserAction
  | AddUserAction
  | SetCurrentAction
  | ClearCurrentAction
  | SearchUserAction
  | ClearSearch
