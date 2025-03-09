import React, {useEffect} from "react";
import {useNavigate} from "react-router-dom";

const HousekeepingDashboard = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem("token");
        const role = localStorage.getItem("role");

        if (!token || role !== "housekeeping") {
            navigate("/");
        }
    }, [navigate]);

    return (
        <div>
            <h2>HousekeepingDashboard Dashboard</h2>
            <p>See rooms waiting to be cleaned.</p>
        </div>
    );
};

export default HousekeepingDashboard;