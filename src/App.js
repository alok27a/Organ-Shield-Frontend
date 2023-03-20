import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import Home from "./pages/Home";
import Dashboard from "./pages/DonorDashboard";
import Pending from "./pages/Counselling";
import History from "./pages/DonorHistory";

const App = () => {
  return (
    <ChakraProvider>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/donor/dashboard">
            <Route index element={<Dashboard />} />
            <Route path="counselling" element={<Pending />} />
            <Route path="history" element={<History />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  );
};

export default App;
