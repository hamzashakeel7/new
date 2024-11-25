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
import { Invoice } from "./Component/dashboard/Invoice";

import Notfound from "./pages/Not-Found";
import PropertyForm from "./Component/dashboard/Propertyform/Propertyform";
import ServiceInformationForm from "./Component/dashboard/Serviceinformation/Serviceinformation.jsx/Serviceinformation";
import Transportationform from "./Component/dashboard/Transportation/Trasportationform";
import { ApplicationReview } from "./Component/dashboard/services/RentalApplication/ApplicationReview";
import { LeaseForm } from "./Component/dashboard/services/lease/LeaseForm";
import Home from "./pages/Home";
import Service from "./pages/Services";
import Community from "./pages/Community";
import AboutUs from "./pages/About";
import CardiacCareService from "./pages/Cardiac";
import TravelService from "./pages/Travel";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/login" element={<Login />} />
          {/* Home page */}
          <Route path="/" element={<Home />} />
          <Route path="/Service" element={<Service />} />
          <Route path="/Community" element={<Community />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/cardiac" element={<CardiacCareService />} />
          <Route path="/travel" element={<TravelService />} />
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
          <Route path="/propertyform" element={<PropertyForm />}></Route>
          <Route
            path="/Serviceinfoform"
            element={<ServiceInformationForm />}
          ></Route>
          <Route
            path="/Transportationform"
            element={<Transportationform />}
          ></Route>
          <Route path="/invoice" element={<Invoice />}></Route>
          <Route
            path="/ApplicationReview"
            element={<ApplicationReview />}
          ></Route>
          <Route path="/lease" element={<LeaseForm />}></Route>
          <Route path="*" element={<Notfound />} /> {/* Optional 404 page */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
