import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "../Pages/Home";
import Login from "../Pages/Login";
import CreateUser from "../Pages/CreateUser";
import BooksList from "../Pages/BooksList";
import ForgotPassword from "../Pages/ForgotPassword";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/login" exact element={<Login />} />
        <Route path="/createuser" exact element={<CreateUser />} />
        <Route path="/bookslist" exact element={<BooksList />} />
        <Route path="/forgotpassword" exact element={<ForgotPassword />} />
      </Routes>
    </BrowserRouter>
  );
}
