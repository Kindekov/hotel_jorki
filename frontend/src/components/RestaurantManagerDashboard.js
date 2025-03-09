import React, {useEffect} from "react";
import {useNavigate} from "react-router-dom";

const RestaurantManagerDashboard = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem("token");
        const role = localStorage.getItem("role");

        if (!token || role !== "restaurant_manager") {
            navigate("/");
        }
    }, [navigate]);

    return (
    <div>
      <h2>Restaurant Manager Dashboard</h2>
      <p>Manage restaurant staff here.</p>
    </div>
  );
};

export default RestaurantManagerDashboard;