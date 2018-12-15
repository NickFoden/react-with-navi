import * as React from "react";
import { NavLink } from "react-navi";
import Login from "../components/Login";

export default function Reference() {
  return (
    <div>
      <h2>Log in</h2>
      <Login />
      <nav>
        <NavLink href="/register">Not signed up?</NavLink>
      </nav>
    </div>
  );
}
