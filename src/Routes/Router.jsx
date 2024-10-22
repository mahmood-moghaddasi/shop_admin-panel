import { BrowserRouter, Route, Routes } from "react-router-dom";
import AdminPanelPage from "../pages/AdminPanelPage";
import RegistrationPage from "../pages/RegistrationPage";
import LoginPage from "../pages/LoginPage";
function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AdminPanelPage />} />
        <Route path="/register" element={<RegistrationPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
