import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import AdminPanelPage from "../pages/AdminPanelPage";
import RegistrationPage from "../pages/RegistrationPage";
import LoginPage from "../pages/LoginPage";
import AuthProvider from "../providers/AuthProvider";
import { getCookie } from "../utils/cookie";
function Router() {
  const token = getCookie("token");
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <AuthProvider>
              <AdminPanelPage />
            </AuthProvider>
          }
        />
        <Route
          path="/register"
          element={token ? <Navigate to="/" /> : <RegistrationPage />}
        />
        <Route
          path="/login"
          element={token ? <Navigate to="/" /> : <LoginPage />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
