// src/store/system/types.ts

export type UserState = {
  loggedIn: boolean;
  session: string;
  userName: string;
};

export enum UserActions {
	UPDATE_SESSION = '@@user/UPDATE_SESSION',
}

interface UserActionType<T, P> {
	type: T;
	payload: P;
}

export type UserAction =
	| UserActionType<typeof UserActions.UPDATE_SESSION, boolean>
