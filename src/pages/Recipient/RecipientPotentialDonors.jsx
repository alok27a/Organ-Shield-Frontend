/* eslint-disable array-callback-return */
import React, { useState, useEffect } from "react";
import { Stack, Wrap, Text, Heading } from "@chakra-ui/react";
import 'react-credit-cards/es/styles-compiled.css';
import Sidebar from "../../components/Recipient/RecipientSidebar";
import Breadcrumbs from "../../components/Utility/Breadcrumbs";
import Card from "../../components/Utility/Card"
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from '@chakra-ui/react'

const History = () => {

  return (
    <Sidebar>
      <Breadcrumbs links={["Home", "Dashboard", "Potential Donors"]} />
      <Heading mt={8} ml={4}>
        Potential Donors
      </Heading>
      <Stack p={4} gap={3}>
        <Card>
          <TableContainer>
            <Table variant='simple'>
              <Thead>
                <Tr>
                  <Th>Donor ID</Th>
                  <Th>Donor BMI</Th>
                  <Th>Donor Blood Group</Th>
                  <Th>Donor LOD</Th>
                  <Th>Approved</Th>
                </Tr>
              </Thead>
              <Tbody>
                <Tr>
                  <Td>inches</Td>
                  <Td>millimetres (mm)</Td>
                  <Td>25.4</Td>
                </Tr>
              </Tbody>
            </Table>
          </TableContainer>


        </Card>
      </Stack>
    </Sidebar>
  );
};

export default History; 