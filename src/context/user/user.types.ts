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
}

export enum UsersActions {
  GET_USERS = 'GET_USERS',
  GET_USER = 'GET_USER',
  ADD_USER = 'ADD_USER',
  UPDATE_USER = 'UPDATE_USER',
  DELETE_USER = 'DELETE_USER',
  SEARCH_USER = 'SEARCH_USER',
  CLEAR_CURRENT = 'CLEAR_CURRENT',
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

export type UserActionType =
  GetUsersAction
  | GetUserAction
  | UpdateUserAction
  | DeleteUserAction
  | AddUserAction
  | SetCurrentAction
