import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import Home from "./pages/Home";
import Theme from "./Theme"

// DONOR IMPORTS
import DonorDashboard from "./pages/Donor/DonorDashboard";
import DonorCounselling from "./pages/Donor/DonorCounselling";
import History from "./pages/Donor/DonorHistory";

// RECIPIENT IMPORTS
import RecipientDashboard from "./pages/Recipient/RecipientDashboard";
import RecipientCounselling from "./pages/Recipient/RecipientCounselling";
import PotentialDonors from "./pages/Recipient/RecipientPotentialDonors";

// HOSPITAL IMPORTS
import HospitalDashboard from "./pages/Hospital/HospitalDashboard";
import HospitalDonors from "./pages/Hospital/HospitalDonors"
import HospitalRecipients from "./pages/Hospital/HospitalRecipients";
import HospitalMatching from "./pages/Hospital/HospitalMatching";

const App = () => {
  return (
    <ChakraProvider theme={Theme}>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />

          {/* DONOR ROUTES */}
          <Route exact path="/donor/dashboard">
            <Route index element={<DonorDashboard />} />
            <Route path="counselling" element={<DonorCounselling />} />
            <Route path="history" element={<History />} />
          </Route>
          
          {/* RECIPIENT ROUTES */}
          <Route exact path="/recipient/dashboard">
            <Route index element={<RecipientDashboard />} />
            <Route path="counselling" element={<RecipientCounselling />} />
            <Route path="potentialdonors" element={<PotentialDonors />} />
          </Route>

        {/* HOSPITAL ROUTES */}
          <Route exact path="/hospital/dashboard">
            <Route index element={<HospitalDashboard/>}/>
            <Route path="donors" element={<HospitalDonors />} />
            <Route path="recipients" element={<HospitalRecipients />} />
            <Route path="matching" element={<HospitalMatching />} />
          </Route>

        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  );
};

export default App;
