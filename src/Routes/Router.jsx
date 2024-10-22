import { BrowserRouter, Route, Routes } from "react-router-dom";
import AdminPanelPage from "../pages/AdminPanelPage";
import RegistrationPage from "../pages/RegistrationPage";
function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AdminPanelPage />} />
        <Route path="/register" element={<RegistrationPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
