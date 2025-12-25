import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Dashboard from "./layout/Dashboard.tsx";
import { BrowserRouter, Route, Routes } from "react-router";
import RouterNavMain from "@/routers/RouterNavMain.ts";
import { ThemeProvider } from "@/components/theme-provider.tsx";
import LoginPage from "./features/auth/LoginPage.tsx";
import { Provider } from "react-redux";
import ProtectedRoute from "./components/private-route.tsx";
import { store } from "./store/store.ts";
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider defaultTheme="dark" storageKey="theme-mode">
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route
              element={
                <ProtectedRoute>
                  <Dashboard />
                </ProtectedRoute>
              }
            >
              {RouterNavMain.filter((f) => f.subMenu === false).map((r) => (
                <Route path={r.path} element={r.component && <r.component />} />
              ))}
              {RouterNavMain.filter((f) => f.subMenu === true).map((r) => {
                return r.items!.map((rr) => (
                  <Route
                    key={rr.path}
                    path={r.path + "/" + rr.path}
                    element={<rr.component />}
                  />
                ));
              })}
            </Route>
            <Route path="/login" element={<LoginPage />} />
          </Routes>
        </BrowserRouter>
      </Provider>
    </ThemeProvider>
  </StrictMode>
);
