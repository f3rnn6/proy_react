import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "bootstrap/dist/css/bootstrap.min.css";   // 🟡 IMPORTANTE
import "bootstrap/dist/js/bootstrap.bundle.min.js"; // 🟡 IMPORTANTE

import "./App.css";
import App from "./App.jsx";
import { AuthProvider } from "./auth/AuthContext";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <App />
    </AuthProvider>
  </StrictMode>
);
