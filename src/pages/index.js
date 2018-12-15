import { createPage, createRedirect, createSwitch } from "navi";
import * as React from "react";
import { NavLink } from "react-navi";

export default createSwitch({
  paths: {
    "/": createPage({
      title: "Navi",
      content: (
        <div>
          <h2>Navi</h2>
          <p>A router/loader for React</p>
          <nav>
            <NavLink href="/reference">API Reference</NavLink>
            <br />
            <NavLink href="/login">Log In</NavLink>
          </nav>
        </div>
      )
    }),

    "/about": createPage({
      title: "About",
      content: <div>About</div>
    }),
    "/login": createPage({
      title: "Login",
      getContent: () => import("./login.js")
    }),
    "/protected": async env => {
      // Render a link to the login screen if the user isn't currently
      console.log(env);
      debugger;
      if (!env.context.currentUser) {
        return createRedirect("/login");
      }
      return createPage({
        title: "protected",
        getContent: () => import("./protected.js")
      });
    },
    "/reference": createPage({
      title: "API Reference",
      getContent: () => import("./reference.js")
    }),
    "/register": createPage({
      title: "Sign Up",
      getContent: () => import("./signup.js")
    })
  }
});
