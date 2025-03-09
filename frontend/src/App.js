import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import WaiterDashboard from "./components/WaiterDashboard";
import ReceptionistDashboard from "./components/ReceptionistDashboard";
import BartenderDashboard from "./components/BartenderDashboard";
import HousekeepingDashboard from "./components/HousekeepingDashboard";
import RestaurantManagerDashboard from "./components/RestaurantManagerDashboard";
import CEODashboard from "./components/CEODashboard";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/waiter-dashboard" element={<WaiterDashboard />} />
        <Route path="/receptionist-dashboard" element={<ReceptionistDashboard />} />
        <Route path="/bartender-dashboard" element={<BartenderDashboard />} />
        <Route path="/housekeeping-dashboard" element={<HousekeepingDashboard />} />
        <Route path="/restaurant-manager-dashboard" element={<RestaurantManagerDashboard />} />
        <Route path="/ceo-dashboard" element={<CEODashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
