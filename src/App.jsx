import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import { SnackbarProvider } from "notistack";
import { Signup } from "./Pages/Auth/Signup/Signup";
import { Login } from "./Pages/Auth/SignIn/Signin";
import { Header } from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import { Profile } from "./Pages/Profile/Profile";

export const App = () => {
  return (
    <SnackbarProvider autoHideDuration={3000}>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path={"/registration"} element={<Signup />} />
          <Route path={"/profile"} element={<Profile />} />
          <Route path={"/login"} element={<Login />} />
          <Route path={"/"} element={<Signup />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </SnackbarProvider>
  );
};
