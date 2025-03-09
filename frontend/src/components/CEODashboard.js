import React, {useEffect} from "react";
import {useNavigate} from "react-router-dom";

const CEODashboard = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem("token");
        const role = localStorage.getItem("role");

        if (!token || role !== "ceo") {
            navigate("/");
        }
    }, [navigate]);

    return (
        <div>
            <h2>CEO Dashboard</h2>
            <p>View company finances from here.</p>
        </div>
    );
};

export default CEODashboard;