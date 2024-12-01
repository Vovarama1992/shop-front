import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import { SnackbarProvider } from "notistack";
import { Signup } from "./Pages/Auth/Signup/Signup";
import { Login } from "./Pages/Auth/SignIn/Signin";
import { Home } from "./Pages/Home/Home";

export const App = () => {
  return (
    <SnackbarProvider>
      <BrowserRouter autoHideDuration={3000}>
        <Routes>
          <Route path={"/registration"} element={<Signup />} />
          <Route path={"/login"} element={<Login />} />
          <Route path={"/"} element={<Signup />} />
        </Routes>
      </BrowserRouter>
    </SnackbarProvider>
  );
};
