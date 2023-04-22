import { BrowserRouter, Routes, Route } from "react-router-dom";
import Wellcome from "../pages/Wellcome/Wellcome";
import Budget from "../pages/Budget/Budget";
import Error from "../pages/Error/Error";

const Router = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Wellcome />} />
      <Route path="/Budget" element={<Budget />} />
      <Route path="*" element={<Error />} />
    </Routes>
  </BrowserRouter>
);

export default Router;
