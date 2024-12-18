import React from "react";
import {
  BrowserRouter as Router, // Aliased for clarity
  Routes,
  Route,
  Navigate,
  useLocation,
  BrowserRouter,
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
import Property from "./pages/property/Property";
import PropertyDetail from "./pages/property/PropertyDetail";
import Properties from "./pages/property/Properties";

import CardiacCareService from "./pages/Cardiac";
import { ServiceDashboard } from "./pages/ServiceDashboard";
import PostForm from "./Component/serviceProvider dashboard/PostService/Postservice";
import PostFormedit from "./Component/serviceProvider dashboard/PostService/PostserviceEdit";
import Transportationedit from "./Component/serviceProvider dashboard/Transport/Transportedit";

import ServiceInfoform from "./Component/serviceProvider dashboard/serviceinfo/Serviceinfo";
import ServiceInfoedit from "./Component/serviceProvider dashboard/serviceinfo/Serviceinfoedit";
import PostTypeModal from "./Component/serviceProvider dashboard/Posttype";
import PostPropertyForm from "./Component/dashboard/postservice/Postservice";
import { RentalApplicationForm } from "./Component/dashboard/services/RentalApplication/RentalForm";
import Transportform from "./Component/serviceProvider dashboard/Transport/Transport";

import TravelService from "./pages/Travel";
import { AnimatePresence, motion } from "framer-motion";
import { HospitalDashboard } from "./pages/Hospitaldashboard";
import { NonprofitDashboard } from "./pages/Nonprofit";
import { PropertyOwnerDashboard } from "./pages/PropertyOwnerDashboard";
import { RealEstateDashboard } from "./pages/RealEstateDashboard";
import Transport from "./Component/dashboard/Transportation/Trasportationform";
import { FirstStep } from "./authform/Signup-Journey/FirstStep";
import { SecondStep } from "./authform/Signup-Journey/SecondStep";
import { ThirdStep } from "./authform/Signup-Journey/ThirdStep";
import { SuperAdmin } from "./pages/SuperAdmin";
import MyPropertiesServices from "./Component/Non-Pofit/MyPropertiesServices/MyPropertiesServices";

function App() {
  const location = useLocation();

  // Animation variants
  const pageVariants = {
    initial: { opacity: 0, x: 100 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -100 },
  };

  return (
    <>
      {/* Single BrowserRouter for the whole app */}

      <div className="App" style={{ overflow: "hidden" }}>
        {/* AnimatePresence is used to handle route transitions */}
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            {/* User side pages */}
            <Route path="/" element={<Home />} />
            <Route path="/Service" element={<Service />} />
            <Route path="/Community" element={<Community />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/property" element={<Property />} />
            <Route path="/propertyservice" element={<MyPropertiesServices />} />
            <Route path="/propertydetail" element={<PropertyDetail />} />
            <Route path="/Properties" element={<Properties />} />
            <Route path="/cardiac" element={<CardiacCareService />} />
            <Route path="/travel" element={<TravelService />} />
            {/* User dashboard route */}
            <Route
              path="/dashboard"
              element={<Navigate to="/dashboard/My profile" replace />}
            />
            <Route path="/dashboard/:section" element={<Dashboard />} />
            <Route
              path="/dashboard/propertyforms"
              element={<PostPropertyForm />}
            />
            <Route path="/dashboard/transport" element={<Transport />} />
            <Route
              path="/dashboard/generic"
              element={<ServiceInformationForm />}
            />
            {/* signup journey */}
            <Route path="/signup/firstStep" element={<FirstStep />} />
            <Route path="/signup/secondStep" element={<SecondStep />} />
            <Route path="/signup/thirdStep" element={<ThirdStep />} />
            {/* Service provider dashboard */}
            <Route
              path="/servicedashboard"
              element={<Navigate to="/servicedashboard/My profile" replace />}
            />
            <Route
              path="/servicedashboard/:section"
              element={<ServiceDashboard />}
            />
            {/* Hospital managment dashboard */}
            <Route
              path="/HospitalManagement"
              element={<Navigate to="/HospitalManagement/My profile" replace />}
            />
            <Route
              path="/HospitalManagement/:section"
              element={<HospitalDashboard />}
            />
            {/* non profit dashboard */}
            <Route
              path="/nonprofit"
              element={<Navigate to="/nonprofit/My profile" replace />}
            />
            <Route
              path="/nonprofit/:section"
              element={<NonprofitDashboard />}
            />
            {/* property owner dashboard */}
            <Route
              path="/propertyownerdashboard"
              element={
                <Navigate to="/propertyownerdashboard/My Profile" replace />
              }
            />
            <Route
              path="/propertyownerdashboard/:section"
              element={<PropertyOwnerDashboard />}
            />
            {/* Real Estate dashborad */}
            <Route
              path="/realestatedashboard"
              element={
                <Navigate to="/realestatedashboard/My Profile" replace />
              }
            />
            <Route
              path="/realestatedashboard/:section"
              element={<RealEstateDashboard />}
            />
            {/* Super Admin dashborad */}
            <Route
              path="/superadmin"
              element={<Navigate to="/superadmin/My Profile" replace />}
            />
            <Route path="/superadmin/:section" element={<SuperAdmin />} />
            {/* Auth setup */}
            <Route
              path="/login"
              element={
                <motion.div
                  variants={pageVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  transition={{ duration: 0.3 }}
                >
                  <Login />
                </motion.div>
              }
            />
            <Route
              path="/register"
              element={
                <motion.div
                  variants={pageVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  transition={{ duration: 0.3 }}
                >
                  <Register />
                </motion.div>
              }
            />
            <Route path="/forgotpassword" element={<Forgotpassword />} />
            <Route path="/otp" element={<Otp type="register" />} />
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
            <Route
              path="/transportationedit"
              element={<Transportationedit />}
            />
            <Route path="/transportform" element={<Transportform />} />
            <Route path="/propertyform" element={<PropertyForm />} />
            <Route path="/servicesedit" element={<PostFormedit />} />
            <Route path="/servicesinfo" element={<ServiceInfoform />} />
            <Route path="/servicesinfoedit" element={<ServiceInfoedit />} />
            <Route path="/postform" element={<PostForm />} />
            <Route
              path="/Serviceinfoform"
              element={<ServiceInformationForm />}
            />
            <Route
              path="/Transportationform"
              element={<Transportationform />}
            />
            <Route path="/invoice" element={<Invoice />} />
            <Route path="/ApplicationReview" element={<ApplicationReview />} />
            <Route path="/lease" element={<LeaseForm />} />
            <Route path="/rental" element={<RentalApplicationForm />} />
            <Route path="/property" element={<Property />} />
            <Route path="/propertydetail" element={<PropertyDetail />} />
            <Route path="/PropertyService" element={<Properties />} />
            <Route path="/Post" element={<PostTypeModal />} />
            <Route path="/Postpropform" element={<PostPropertyForm />} />
            <Route path="*" element={<Notfound />} /> {/* Optional 404 page */}
          </Routes>
        </AnimatePresence>
      </div>
    </>
  );
}

export default App;
