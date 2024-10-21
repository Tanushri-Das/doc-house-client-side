import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import routes from "./Routes/Routes/Routes.jsx";
import "react-day-picker/dist/style.css";
import AuthProvider from "./Contexts/AuthProvider/AuthProvider.jsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ThemeProvider } from "./Contexts/ThemeProvider/ThemeProvider.jsx";
import { HelmetProvider } from "react-helmet-async";

const queryClient = new QueryClient({
  defaultQueryOptions: {
    // Use 'defaultQueryOptions' instead of 'defaultOptions'
    queries: {
      staleTime: Infinity,
      cacheTime: Infinity,
    },
  },
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <HelmetProvider>
          <ThemeProvider>
            <RouterProvider router={routes} />
          </ThemeProvider>
        </HelmetProvider>
      </AuthProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
