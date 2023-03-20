/* eslint-disable array-callback-return */
import React, { useState, useEffect } from "react";
import { Stack, Wrap, Text, Heading } from "@chakra-ui/react";
import 'react-credit-cards/es/styles-compiled.css';
import Sidebar from "../components/DonorSidebar";
import Breadcrumbs from "../components/Breadcrumbs";


const History = () => {

  return (
    <Sidebar>
      <Breadcrumbs links={["Home", "Dashboard", "Credit Card"]} />
      <Heading mt={8} ml={4}>
        View History Here 
      </Heading>
      <Stack p={4} gap={3}>
        <Wrap spacing={8}>
          
        </Wrap>
      </Stack>
    </Sidebar>
  );
};

export default History; 