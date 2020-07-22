// src/store/system/types.ts

export type UserState = {
  loading: boolean;
  data: any;
  errors: {
    message?: string;
    field?: string;
  };
};

export enum UserActions {
  FETCH_DATA_START = "@@user/FETCH_DATA_START",
  FETCH_DATA_SUCCESS = "@@user/FETCH_DATA_SUCCESS",
  FETCH_DATA_ERRORS = "@@user/FETCH_DATA_ERRORS",
  CLEAR_STATE = "@@user/CLEAR_STATE",
}

interface UserActionType<T> {
  type: T;
}

interface UserActionTypeWithPayload<T, P> extends UserActionType<T> {
  type: T;
  payload: P;
}

export type UserAction =
  | UserActionType<typeof UserActions.FETCH_DATA_START>
  | UserActionType<typeof UserActions.CLEAR_STATE>
  | UserActionTypeWithPayload<typeof UserActions.FETCH_DATA_SUCCESS, any>
  | UserActionTypeWithPayload<typeof UserActions.FETCH_DATA_ERRORS, {}>;
