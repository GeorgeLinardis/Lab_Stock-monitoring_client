import { Route, Routes } from "react-router-dom";

import MainLayout from "../layout/MainLayout.jsx";
import Home from "../pages/Home.jsx";

const AppRouter = () => {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
      </Route>
    </Routes>
  );
};

export default AppRouter;
