import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <>
    <Link to={'/home'}>
        <button>home</button>
        </Link>
      <span>nav par</span>
      <span>nav par</span>
      <span>nav par</span>
    </>
  );
}

export default NavBar;
