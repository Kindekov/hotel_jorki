import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://127.0.0.1:8000/api/login/", {
        username,
        password,
      });

      localStorage.setItem("token", response.data.access);
      localStorage.setItem("role", response.data.role);

      // Redirect based on role
      switch (response.data.role) {
        case "waiter":
          navigate("/waiter-dashboard");
          break;
        case "receptionist":
          navigate("/receptionist-dashboard");
          break;
        case "bartender":
          navigate("/bartender-dashboard");
          break;
        case "housekeeping":
          navigate("/housekeeping-dashboard");
          break;
        case "restaurant_manager":
          navigate("/restaurant-manager-dashboard");
          break;
        case "ceo":
          navigate("/ceo-dashboard");
          break;
        default:
          navigate("/");
      }
    } catch (error) {
      setError("Invalid username or password");
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <br />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <br />
        <button type="submit">Login</button>
      </form>
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
};

export default Login;
