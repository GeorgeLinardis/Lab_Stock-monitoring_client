import { Route, Routes } from "react-router-dom";

import MainLayout from "../layout/MainLayout.jsx";
import Home from "../pages/Home.jsx";
import StocksPage from "../pages/StocksPage.jsx";
import ScorePage from "../pages/ScorePage.jsx";

const AppRouter = () => {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/stocks" element={<StocksPage />} />
        <Route path="/stock-score/:symbol" element={<ScorePage />} />
      </Route>
    </Routes>
  );
};

export default AppRouter;
