import { createContext, useReducer } from "react";
import AuthReducer from "./AuthReducer";

const INITIAL_STATE = {
  user: {
    profilePicture: "person/1.jpeg",
    coverPicture: "",
    followers: [],
    followings: [],
    isAdmin: false,
    _id: "6100db0c04f2663a286b0b52",
    username: "tonni",
    email: "tonni@gmail.com",
    createdAt: "2021-07-28T04:20:28.640Z",
    __v: 0,
    city: "Dhaka",
    desc: "I'm a dental student",
  },
  isFetching: false,
  error: false,
};

export const AuthContext = createContext(INITIAL_STATE);

export const AuthContextProvide = ({ children }) => {
  const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE);

  return (
    <AuthContext.Provider
      value={{
        user: state.user,
        isFetching: state.isFetching,
        error: state.error,
        dispatch,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
