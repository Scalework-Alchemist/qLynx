import React from "react";
import { Link } from "react-router-dom";

const NavBar = props => (
  <nav>
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
      <li>
        <Link to="/store">Store</Link>
      </li>
      <li>
        <Link to="/diy001">how to build a component</Link>
      </li>
    </ul>
  </nav>
);

export default NavBar;
