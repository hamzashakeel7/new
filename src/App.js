import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Login from "./authform/Login";
import Register from "./authform/Register";
import Forgotpassword from "./authform/Forgotpassword";
import Otp from "./authform/Otp";
import Changepassword from "./authform/Changepassword";
import Completion from "./authform/Completion";
import ChangepasswordProtected from "./Component/ChangepasswordProtected";
import { Dashboard } from "./pages/Dashboard";

import Notfound from "./pages/Not-Found";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/login" element={<Login />} />
          {/* user dashborad route */}
          <Route
            path="/dashboard"
            element={<Navigate to="/dashboard/My profile" replace />}
          />
          <Route path="/dashboard/:section" element={<Dashboard />} />
          {/* register */}
          <Route path="/register" element={<Register />} />
          <Route path="/forgotpassword" element={<Forgotpassword />} />
          <Route path="/otp" element={<Otp />} />
          {/* Protect Change Password route */}
          <Route
            path="/changepassword"
            element={
              <ChangepasswordProtected>
                <Changepassword />
              </ChangepasswordProtected>
            }
          />
          <Route path="/completion" element={<Completion />} />
          <Route path="*" element={<Notfound />} /> {/* Optional 404 page */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
