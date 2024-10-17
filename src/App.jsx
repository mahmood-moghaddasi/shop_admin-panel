import { Route, Routes } from "react-router-dom";
import AdminPanelPage from "./pages/AdminPanelPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<AdminPanelPage />} />
      </Routes>
    </>
  );
}

export default App;
