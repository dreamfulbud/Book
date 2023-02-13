import { BrowserRouter, Route, Routes } from "react-router-dom";
import ComponentsPage from "./components/pages/ComponentsPage";
import MainPage from "./components/pages/MainPage";

function Routers() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/components" element={<ComponentsPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Routers;
