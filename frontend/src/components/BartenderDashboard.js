import React, {useEffect} from "react";
import {useNavigate} from "react-router-dom";

const BartenderDashboard = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem("token");
        const role = localStorage.getItem("role");

        if (!token || role !== "bartender") {
            navigate("/");
        }
    }, [navigate]);

    return (
        <div>
            <h2>Bartender Dashboard</h2>
            <p>Manage bar orders here.</p>
        </div>
    );
};

export default BartenderDashboard;