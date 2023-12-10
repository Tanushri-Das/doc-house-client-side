import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import routes from "./Routes/Routes/Routes.jsx";
import "react-day-picker/dist/style.css";
import AuthProvider from "./Contexts/AuthProvider/AuthProvider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <div>
        <RouterProvider router={routes} />
      </div>
    </AuthProvider>
  </React.StrictMode>
);
