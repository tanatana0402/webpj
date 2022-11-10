import React from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import Auth from "../routes/CAuth";
import Home from "../routes/Home";
import Profile from "../routes/Profile";
import Navigation from "./Navigation";
import Product from "../routes/product";
import Booklist from "../book/Booklist";


const AppRouter = ({ refreshUser, userObj }) => {
  return (
    <Router>
      {userObj && <Navigation userObj={userObj} />}
      <Routes>
        {userObj ? (
          <>
            <Route path="/" element={<Home userObj={userObj} />} />
            <Route path="/index" element={<Booklist />} />
            <Route path="/profile" element={<Profile userObj={userObj} refreshUser={refreshUser} />} />
            <Route path="/product" element={<Product />} />
            <Route from="*" to="/" />
          </>
        ) : (
          <>
            <Route path="/" element={<Auth />} />
            <Route from="*" to="/" />
          </>
        )}
      </Routes>
    </Router>
  );
};

export default AppRouter;