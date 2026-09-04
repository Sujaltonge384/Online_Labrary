import { StrictMode } from "react";

import { createRoot } from "react-dom/client";

import { BrowserRouter } from "react-router-dom";

import { Provider } from "react-redux";

import App from "./App";

import store from "./store/store";
import "./index.css";


// --------------------------------------------------
// APPLICATION ENTRY POINT
// --------------------------------------------------
//
// React starts running from this file.
//
// Provider:
// Gives every component access to Redux.
//
// BrowserRouter:
// Gives every component access to React Router.
//

createRoot(document.getElementById("root")).render(

  <StrictMode>

    {/* Redux Provider */}
    <Provider store={store}>

      {/* React Router */}
      <BrowserRouter>

        {/* Main application */}
        <App />

      </BrowserRouter>

    </Provider>

  </StrictMode>
);