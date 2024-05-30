import "./App.css";
import Login from "./Components/Login";
import { Route, Routes } from "react-router-dom";
import PrivateRoute from "./Components/PrivateRoute";
import SalePage from "./Components/SalePage";
import { useState } from "react";

function App() {
  const [auth, setAuth] = useState(false);

  return (
    <>
      <Routes>
        <Route path="/login" element={<Login setAuth={setAuth} />} />
        <Route
          path="/sales"
          element={
            <PrivateRoute auth={auth}>
              <SalePage />
            </PrivateRoute>
          }
        />
        <Route path="*" element={auth ? <SalePage /> : <Login />} />
      </Routes>
    </>
  );
}

export default App;
