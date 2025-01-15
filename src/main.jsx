import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./router/router.jsx";
import AuthProvider from "./providers/AuthProvider.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
    <div className="">
      <RouterProvider router={router} />
    </div>
    </AuthProvider>
  </StrictMode>
);
