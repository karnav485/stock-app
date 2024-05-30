import React from "react";
import { Navigate } from "react-router-dom";
import Login from "./Login";

export default function PrivateRoute({ children }) {
  const auth = JSON.parse(localStorage.getItem("loginSuccess"));

  return auth ? children : <Navigate to={"/login"} />;
}
