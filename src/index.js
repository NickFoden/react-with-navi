import * as Navi from "navi";
import React from "react";
import ReactDOM from "react-dom";
import pages from "./pages";
import App from "./App";
import { email } from "./firebase";
require("dotenv").config();

Navi.app({
  // Specify the pages that navi-app should statically build, by passing
  // in a Switch object
  pages,
  context: {
    currentUser: {
      userEmail: email
    }
  },
  // The default create-react-app renderer needs access to the App
  // component.
  exports: App,

  async main() {
    let navigation = Navi.createBrowserNavigation({
      pages
    });

    // Wait until the navigation has loaded the page's content,
    // or failed to do so. If you want to load other data in parallel
    // while the initial page is loading, make sure to start loading
    // before this line.
    await navigation.steady();

    // React requires that you call `ReactDOM.hydrate` if there is
    // statically rendered content in the root element, but prefers
    // us to call `ReactDOM.render` when it is empty.
    let hasStaticContent = process.env.NODE_ENV === "production";
    let renderer = hasStaticContent ? ReactDOM.hydrate : ReactDOM.render;

    // Start react.
    renderer(<App navigation={navigation} />, document.getElementById("root"));
  }
});
