import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { RouterProvider } from "react-router";
import { router } from "./routes/router.jsx";
import AuthProvider from "./contexts/AuthContext/AuthProvider.jsx";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
const queryClient = new QueryClient();

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <>
          <ToastContainer
            position="top-right"
            autoClose={3000}
            theme="colored"
          />
          <RouterProvider router={router} />
        </>
      </AuthProvider>
    </QueryClientProvider>
  </StrictMode>
);
