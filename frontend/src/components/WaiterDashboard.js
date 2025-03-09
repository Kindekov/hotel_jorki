import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const WaiterDashboard = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    const role = localStorage.getItem("role");

    if (!token || role !== "waiter") {
      navigate("/");
    }
  }, [navigate]);

  return (
    <div>
      <h2>Waiter Dashboard</h2>
      <p>Manage restaurant orders here.</p>
    </div>
  );
};

export default WaiterDashboard;
