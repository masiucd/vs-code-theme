/* eslint-disable @typescript-eslint/interface-name-prefix */
export interface IUser {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
}

export interface IUserState {
  users: IUser[];
  user: IUser | null;
  loading: boolean;
  current: null | IUser;
  filterUsers: IUser[] | null;
  getUsers: Function;
}

export enum UsersActions {
  GET_USERS = 'GET_USERS',
  GET_USER = 'GET_USER',
  UPDATE_USER = 'UPDATE_USER',
  DELETE_USER = 'DELETE_USER',
  SEARCH_USER = 'SEARCH_USER',
  CLEAR_CURRENT = 'CLEAR_CURRENT',
}

export interface GetUsersAction {
  type: UsersActions.GET_USERS;
  payload: IUser[];
}

export interface GetUserAction {
  type: UsersActions.GET_USER;
  payload: IUser;
}

export interface UpdateUserAction {
  type: UsersActions.UPDATE_USER;
  payload: IUser;
}

export interface DeleteUserAction {
  type: UsersActions.UPDATE_USER;
  payload: string;
}

export type UserActionType =
  GetUsersAction
  | GetUserAction
  | UpdateUserAction
  | DeleteUserAction
