

import { BrowserRouter, Routes, Route } from "react-router-dom";
// import LandingPage from "./pages/LandingPage";
import LoginPage from "./pages/LoginPage";
import NotFound from "./pages/NotFound";
// import DashboardPage from "./pages/DashBoardPage";
import RegisterPage from "./pages/RegisterPage";
import InventoryPage from "./pages/InventoryPage";
import OrderPage from "./pages/OrderPage";
import SummaryPage from "./pages/SummaryPage";
import React from "react";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage/>} />
    
        <Route path="/register" element={<RegisterPage/>} />
        <Route path="*" element={<NotFound/>} />
        <Route path="/inventory" element={<InventoryPage/>} />
        <Route path="/order" element={<OrderPage/>} />
        <Route path="/summary" element={<SummaryPage/>} />
        {/* <Route path="/landing" element={<LandingPage/>} />
         */}
         {/* <Route path="/dashboard" element={<DashboardPage/>} /> */}


      </Routes>
    </BrowserRouter>
  );
};

export default Router;