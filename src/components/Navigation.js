import React from "react";
import { Link } from "react-router-dom";

const Navigation = ({ userObj }) => (
  <nav>
    <ul className="nav justify-content-center">
      <li className="nav-item">
        <Link to="/" className="nav-link active">Image</Link>
      </li>
      <li className="nav-item">
        <Link to="/index" className="nav-link">index</Link>
      </li>
      <li className="nav-item">
        <Link to="/profile" className="nav-link">{userObj.displayName} Profile</Link>
      </li>
    </ul>
  </nav>
);

export default Navigation;  