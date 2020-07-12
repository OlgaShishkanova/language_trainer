import { UserState, UserAction, UserActions } from "./types";
import { Reducer } from "redux";

const initialState: UserState = {
  loggedIn: false,
  session: "",
  userName: "",
};

const userReducer: Reducer<UserState, UserAction> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case UserActions.UPDATE_SESSION: {
      return {
        ...state,
        loggedIn: action.payload,
      };
    }
    default:
      return {
        ...state,
      };
  }
};

export default userReducer;
