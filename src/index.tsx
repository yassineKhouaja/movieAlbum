import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./app/store";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "./index.css";
import Layout from "./components/Layout";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const container = document.getElementById("root")!;
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Layout>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<App />} />
            <Route path="*" element={<h2 className="not_found">404 | not found</h2>} />
          </Routes>
        </BrowserRouter>
      </Layout>
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
