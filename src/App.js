import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import Home from "./pages/Home";

// DONOR IMPORTS
import DonorDashboard from "./pages/Donor/DonorDashboard";
import DonorCounselling from "./pages/Donor/DonorCounselling";
import History from "./pages/Donor/DonorHistory";

// RECIPIENT IMPORTS
import RecipientDashboard from "./pages/Recipient/RecipientDashboard";
import RecipientCounselling from "./pages/Recipient/RecipientCounselling";
import PotentialDonors from "./pages/Recipient/RecipientPotentialDonors";


const App = () => {
  return (
    <ChakraProvider>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />

          <Route exact path="/donor/dashboard">
            <Route index element={<DonorDashboard />} />
            <Route path="counselling" element={<DonorCounselling />} />
            <Route path="history" element={<History />} />
          </Route>
      
          <Route exact path="/recipient/dashboard">
            <Route index element={<RecipientDashboard />} />
            <Route path="counselling" element={<RecipientCounselling />} />
            <Route path="potentialdonors" element={<PotentialDonors />} />
          </Route>

        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  );
};

export default App;
