import React from "react";
import "./App.css";
import HomePage from "./containers/HomePage";
import ContentPage from "./components/ContentPage/ContentPage";
import Home from "./pages/Home";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {
  RentCar,
  AddNewCar,
  HistoryRides,
  Payment,
  Settings,
} from "./pages/index";

const App = () => {
  return (
    <Router>
      <div className="flex">
        {/* Sidebar */}
        <Home />

        {/* Main Content */}
        <div className="flex-1">
          <Routes>
            <Route path="/rent-car" element={<RentCar />} />
            <Route path="/add-new-car" element={<AddNewCar />} />
            <Route path="/history-rides" element={<HistoryRides />} />
            <Route path="/payment" element={<Payment />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
