import React, { useState } from "react";
import axios from "axios";

type ContextProps = {
  data: any;
  logout: () => void;
  login: (arg1: LoginData) => void;
  register: (arg1: LoginData & extraRegistrationData) => void;
  updateInfo: (
    arg1: Partial<LoginData> & Partial<extraRegistrationData>
  ) => void;
  remindThePassword: (arg1: Partial<LoginData>) => void;
  createNewPassword: (arg1: Partial<extraRegistrationData>) => void;
};

interface LoginData {
  userEmail: string;
  userPass: string;
}
interface extraRegistrationData {
  userName: string;
  userPassRepeat: string;
}
const AuthContext = React.createContext<ContextProps>({} as ContextProps);

const AuthProvider = (props: any) => {
  // code for pre-loading the user's information if we have their token in
  // localStorage goes here
  // 🚨 this is the important bit.
  // Normally your provider components render the context provider with a value.
  // But we post-pone rendering any of the children until after we've determined
  // whether or not we have a user token and if we do, then we render a spinner
  // while we go retrieve that user's information.
  const [data, changeData] = useState<any>({});
  const isLoader = false;
  if (isLoader) {
    return (
      <div className="spinner-border" role="status">
        <span className="sr-only">Loading...</span>
      </div>
    );
  }
  const login = (data: LoginData) => {
    console.log("data is in login func", data);
    axios
      .post("/api/login", { ...data })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });

    changeData({ user: { name: "John", email: "example@test.com" } });
  }; // make a login request

  const updateInfo = (
    data: Partial<LoginData> & Partial<extraRegistrationData>
  ) => {
    console.log("data is in updateInfo func", data);
    changeData({
      user: {
        name: "Jack",
        email: "example@test2.com",
        interfaceLang: "en",
        learningLang: "de",
      },
    });
  }; // make a login request

  const register = (data: LoginData & extraRegistrationData) => {
    axios
      .post("/api/signup", { ...data })
      .then(response =>{
        console.log(response);
      })
      .catch(error =>{
        console.log(error);
      });
  }; // register the user

  const remindThePassword = (data: Partial<LoginData>) => {
    console.log("data is in remind the password func", data);
  }; //remind the password

  const createNewPassword = (data: Partial<extraRegistrationData>) => {
    console.log("data is in create new password func", data);
  };

  const logout = () => {
    console.log("data is in logout func");
    changeData({});
  }; 
  
  return (
    <AuthContext.Provider
      value={{
        data,
        login,
        logout,
        register,
        remindThePassword,
        createNewPassword,
        updateInfo,
      }}
      {...props}
    />
  );
};
const useAuth = () => React.useContext(AuthContext);
export { AuthProvider, useAuth };
// the UserProvider in user-context.js is basically:
// const UserProvider = props => (
//   <UserContext.Provider value={useAuth().data.user} {...props} />
// )
// and the useUser hook is basically this:
// const useUser = () => React.useContext(UserContext)
