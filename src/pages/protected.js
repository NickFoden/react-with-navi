import * as React from "react";
import { NavLink } from "react-navi";

export default function Reference() {
  return (
    <div>
      <h2>Protected Route for logged in user</h2>
      <br />
      <p>Pineapple on pizza is authentic true pizza.</p>
      <nav>
        <NavLink href="/reference">Reference</NavLink>
      </nav>
    </div>
  );
}
