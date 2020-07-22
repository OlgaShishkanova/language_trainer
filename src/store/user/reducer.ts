import { UserState, UserAction, UserActions } from "./types";
import { Reducer } from "redux";

const initialState: UserState = {
  loading: false,
  data: {},
  errors: {},
};

const userReducer: Reducer<UserState, UserAction> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case UserActions.FETCH_DATA_START: {
      return {
        ...state,
        loading: true,
      };
    }
    case UserActions.FETCH_DATA_SUCCESS: {
      return {
        ...state,
        data: action.payload,
      };
    }
    case UserActions.FETCH_DATA_ERRORS: {
      return {
        ...state,
        errors: action.payload,
      };
    }
    case UserActions.CLEAR_STATE: {
      return {
        ...initialState,
      };
    }
    default:
      return {
        ...state,
      };
  }
};

export default userReducer;
