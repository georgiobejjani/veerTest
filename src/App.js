import "./App.scss";
import React, { useEffect, useContext } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import Login from "./Containers/Login/Login";
import { LoginContext } from "./loginContext";
import Homepage from "./Containers/Homepage";

function App() {
  const { state } = useContext(LoginContext);
  const { loggedIn } = state;
  const navigate = useNavigate();
  
  useEffect(() => {
    if (loggedIn || localStorage.getItem('loggedIn')) {
      navigate("/");
    } else {
      navigate("/login");
    }
  }, [loggedIn]);

  return (
    <div className="App">
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Homepage />} />
      </Routes>
    </div>
  );
}

export default App;
