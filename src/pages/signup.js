import * as React from "react";
import { NavLink } from "react-navi";
import Register from "../components/Register";

export default function Reference() {
  return (
    <div>
      <Register />
      <nav>
        <NavLink href="/about">About</NavLink>
      </nav>
    </div>
  );
}
