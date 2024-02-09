import React, { createContext, useReducer } from "react";

export const LoginContext = createContext();

const initialState = {
  loggedIn: false,
  returnMessage: false,
  loader: false,
  status: null,
};

const verifyCredentials = (username, password) => {
  let trueUser = "test@test.com";
  let truePassword = "1232";
  return username === trueUser && password === truePassword;
};

const LoginReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN_REQUEST":
      return {
        ...state,
        loader: true,
      };
    case "LOGIN_SUCCESS":
      return {
        ...state,
        loader: false,
        loggedIn: true,
        returnMessage: "Login successful, you will be redirected to the homepage",
        status:1,
      };
    case "LOGIN_FAILURE":
      return {
        ...state,
        loader: false,
        loggedIn: false,
        returnMessage: "Username or password incorrect, please try again",
        status:0,
      };
    case "CLEAR_STATE":
      return {
        ...state,
        loader: false,
        returnMessage: false,
        status: null,
      };
    default:
      return state;
  }
};

export function LoginProvider(props) {
  const [state, dispatch] = useReducer(LoginReducer, initialState);

  const handleLogin = async (username, password) => {
    dispatch({ type: "LOGIN_REQUEST" });

    setTimeout(() => {
      const isAuthenticated = verifyCredentials(username, password);
      if (isAuthenticated) {
        dispatch({ type: "LOGIN_SUCCESS" });
        localStorage.setItem('loggedIn',true);
        dispatch({ type: "CLEAR_STATE" });
      } else {
        dispatch({ type: "LOGIN_FAILURE" });
        setTimeout(() => {
          dispatch({ type: "CLEAR_STATE" });
        }, 3000);
      }
    }, 2000);
  };


  return (
    <LoginContext.Provider value={{ state, handleLogin }}>
      {props.children}
    </LoginContext.Provider>
  );
}