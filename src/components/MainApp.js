import React, { useEffect, useReducer } from "react";
import { AuthContext } from "../auth/authContext";
import { autReducer } from "../auth/authReducer";
import { AppRouter } from "../routes/AppRouter";

const init = () => {
  return JSON.parse(localStorage.getItem("user")) || { logged: false };
};

export const MainApp = () => {
  const [user, dispatch] = useReducer(autReducer, {}, init);

  useEffect(() => {
    if (!user) return;

    localStorage.setItem("user", JSON.stringify(user));
  }, [user]);

  return (
    <AuthContext.Provider
      value={{
        user,
        dispatch,
      }}
    >
        <AppRouter />
    </AuthContext.Provider>
  );
};
