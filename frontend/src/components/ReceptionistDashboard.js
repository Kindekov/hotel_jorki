import React, {useEffect} from "react";
import {useNavigate} from "react-router-dom";

const ReceptionistDashboard = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem("token");
        const role = localStorage.getItem("role");

        if (!token || role !== "receptionist") {
            navigate("/");
        }
    }, [navigate]);

    return (
        <div>
            <h2>Receptionist Dashboard</h2>
            <p>Manage bookings here.</p>
        </div>
    );
};

export default ReceptionistDashboard;