import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

import "./index.css";

/**
 * Inicializações globais seguras
 * (mantidas como side-effects controlados)
 */
import "./ui/api.js";
import "./lib/auth.js";
import "./lib/voices.js";

/**
 * Heartbeat de sessão
 * carregado com proteção para evitar erro em SSR / hydration edge cases
 */
if (typeof window !== "undefined") {
  import("./lib/sessionHeartbeat.js").catch((e) => {
    console.warn("sessionHeartbeat init skipped:", e);
  });
}

/**
 * Componentes globais
 */
import TermsModal from "./ui/TermsModal.jsx";
import PWAInstallPrompt from "./components/PWAInstallPrompt.jsx";
import OnboardingModal from "./components/OnboardingModal.jsx";

/**
 * Root React
 */
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />

    {/* Modais globais */}
    <TermsModal />
    <OnboardingModal />
    <PWAInstallPrompt />
  </React.StrictMode>
);
