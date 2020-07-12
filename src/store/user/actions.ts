import { ActionCreator, Action, Dispatch } from "redux";
import { ThunkAction } from "redux-thunk";
import { UserState, UserActions, UserAction } from "./types";

export const getUser: ActionCreator<ThunkAction<
  // The type of the last action to be dispatched - will always be promise<T> for async actions
  void,
  // The type for the data within the last action
  UserState,
  // The type of the parameter for the nested function
  null,
  // The type of the last action to be dispatched
  Action<UserActions.UPDATE_SESSION>
>> = () => {
  return async (dispatch: Dispatch<UserAction>) => {
    dispatch({ type: UserActions.UPDATE_SESSION, payload: true });
  };
};
