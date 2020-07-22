import { ActionCreator, Action, Dispatch } from "redux";
import { ThunkAction } from "redux-thunk";
import axios from "axios";
import { UserState, UserActions, UserAction } from "./types";
import authHeader from "../../utils/authHeader";
import { navigate } from "@reach/router";

interface LoginData {
  userEmail: string;
  userPass: string;
}
interface extraRegistrationData {
  userName: string;
  userPassRepeat: string;
}

export const getUser: ActionCreator<ThunkAction<
  // The type of the last action to be dispatched - will always be promise<T> for async actions
  void,
  // The type for the data within the last action
  UserState,
  // The type of the parameter for the nested function
  null,
  // The type of the last action to be dispatched
  Action<UserActions.FETCH_DATA_ERRORS>
>> = () => {
  return async (dispatch: Dispatch<UserAction>) => {
    if (localStorage.getItem("user")) {
      dispatch({ type: UserActions.FETCH_DATA_START });
      axios
        .get("/api/profile", { headers: authHeader() })
        .then((response) => {
          dispatch({
            type: UserActions.FETCH_DATA_SUCCESS,
            payload: { user: response.data },
          });
        })
        .catch((error) => {
          dispatch({
            type: UserActions.FETCH_DATA_ERRORS,
            payload: error?.response?.data,
          });
        });
    } else {
      navigate(`/login`);
    }
  };
};

export const register: ActionCreator<ThunkAction<
  void,
  UserState,
  LoginData & extraRegistrationData,
  Action<UserActions.FETCH_DATA_ERRORS>
>> = (postData) => {
  return async (dispatch: Dispatch<UserAction>) => {
    dispatch({ type: UserActions.FETCH_DATA_START });

    axios
      .post("/api/signup", { ...postData })
      .then((response) => {
        if (response.data.token) {
          localStorage.setItem("user", JSON.stringify(response.data.token));
        }
        dispatch({
          type: UserActions.FETCH_DATA_SUCCESS,
          payload: { user: response.data.user },
        });
        navigate(`/`);
      })

      .catch((error) => {
        dispatch({
          type: UserActions.FETCH_DATA_ERRORS,
          payload: error?.response?.data,
        });
      });
  };
};

export const login: ActionCreator<ThunkAction<
  void,
  UserState,
  LoginData,
  Action<UserActions.FETCH_DATA_ERRORS>
>> = (postData) => {
  return async (dispatch: Dispatch<UserAction>) => {
    dispatch({ type: UserActions.FETCH_DATA_START });

    axios
      .post("/api/login", { ...postData })
      .then((response) => {
        if (response.data.token) {
          localStorage.setItem("user", JSON.stringify(response.data.token));
        }
        dispatch({
          type: UserActions.FETCH_DATA_SUCCESS,
          payload: { user: response.data.user },
        });
        navigate(`/`);
      })
      .catch((error) => {
        dispatch({
          type: UserActions.FETCH_DATA_ERRORS,
          payload: error?.response?.data,
        });
      });
  };
};

export const updateUserInfo: ActionCreator<ThunkAction<
  void,
  UserState,
  Partial<LoginData> & Partial<extraRegistrationData>,
  Action<UserActions.FETCH_DATA_ERRORS>
>> = (postData) => {
  return async (dispatch: Dispatch<UserAction>) => {
    dispatch({ type: UserActions.FETCH_DATA_START });

    axios
      .post("???/api/login", { ...postData })
      .then((response) => {
        dispatch({
          type: UserActions.FETCH_DATA_SUCCESS,
          //payload: response.data,
          payload: {
            user: {
              name: "Jack",
              email: "example@test2.com",
              interfaceLang: "en",
              learningLang: "de",
            },
          },
        });
      })
      .catch((error) => {
        dispatch({
          type: UserActions.FETCH_DATA_ERRORS,
          payload: error?.response?.data,
        });
      });
  };
};

// const remindThePassword = (data: Partial<LoginData>) => {
//   console.log("data is in remind the password func", data);
// }; //remind the password

// const createNewPassword = (data: Partial<extraRegistrationData>) => {
//   console.log("data is in create new password func", data);
// };

export const logout: ActionCreator<ThunkAction<
  void,
  UserState,
  null,
  Action<UserActions.CLEAR_STATE>
>> = () => {
  return async (dispatch: Dispatch<UserAction>) => {
    localStorage.removeItem("user");
    dispatch({ type: UserActions.CLEAR_STATE });
  };
};
