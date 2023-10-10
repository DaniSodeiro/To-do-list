import React from "react"; // Importa a biblioteca React
import ReactDOM from "react-dom/client"; // Importa o ReactDOM para renderizar o aplicativo
import App from "./App.jsx"; // Importa o componente principal do aplicativo

// Renderiza o aplicativo dentro de um elemento com a ID "root" usando ReactDOM.createRoot
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {" "}
    {/* Modo estrito do React */}
    <App /> {/* Renderiza o componente App (o ponto de entrada da aplicação) */}
  </React.StrictMode>
);
