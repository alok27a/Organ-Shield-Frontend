/* eslint-disable array-callback-return */
import React, { useEffect } from "react";
import { Stack, Wrap, Text, Heading } from "@chakra-ui/react";
import Sidebar from "../components/DonorSidebar";
import Breadcrumbs from "../components/Breadcrumbs";


const Pending = () => {



  return (
    <Sidebar>
      <Breadcrumbs links={["Home", "Dashboard", "Counselling"]} />
      <Heading mt={8} ml={4}>
        Online AI Based Counselling Service
      </Heading>
      <Stack p={4} gap={3}>
        <Wrap spacing={8}>
          
        </Wrap>
      </Stack>
    </Sidebar >
  );
};

export default Pending;
