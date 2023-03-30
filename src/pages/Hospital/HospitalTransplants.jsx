/* eslint-disable array-callback-return */
import React, { useState, useEffect } from "react";
import { Stack, Wrap, Text, Heading } from "@chakra-ui/react";
import 'react-credit-cards/es/styles-compiled.css';
import Sidebar from "../../components/Hospital/HospitalSidebar";
import Breadcrumbs from "../../components/Utility/Breadcrumbs";
import Card from "../../components/Utility/Card"
import {
    Table,
    Thead,
    Tbody,
    Tfoot,
    Button,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
    useToast
} from '@chakra-ui/react'
import { BsFillCheckCircleFill } from "react-icons/bs";
import { MdCancel } from "react-icons/md"

const History = () => {
    const toast = useToast()
    const [result, setResult] = useState([])

    const getMatchedResult = async () => {
        const result = await fetch("https://organ-shield-backend.vercel.app/hospital/transplants", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                'Accept': 'application/json',
                "Access-Control-Allow-Origin": "*"
            }
        })

        const tes = await result.json()
        
        if (tes.success) {
            setResult(tes.data)
        } else {
            toast({
                title: 'Error!',
                description: tes.message,
                status: 'error',
                duration: 9000,
                isClosable: true,
            })
        }
    }

    useEffect(() => {
        getMatchedResult()
    }, [])

    return (
        <Sidebar>
            <Breadcrumbs links={["Home", "Dashboard", "Transplants"]} />
            <Heading mt={8} ml={4}>
                Successful Transplants
            </Heading>
            <Stack p={4} gap={3}>
                <Card>
                    <TableContainer>
                        <Table variant='simple'>
                            <Thead>
                                <Tr>
                                    <Th>Donor ID</Th>
                                    <Th>Recipient ID</Th>
                                    <Th>Organ Type</Th>
                                    <Th>Matching Percentage</Th>
                                </Tr>
                            </Thead>
                            <Tbody>
                                {result && result.map((item) => {
                                    return (

                                        <Tr>
                                            <Td>{item.donor_id}</Td>
                                            <Td>{item.recipient_id}</Td>
                                            <Td>{item.organ}</Td>
                                            <Td>{item.match_percentage}</Td>
                                        </Tr>

                                    )
                                })}
                            </Tbody>
                        </Table>
                    </TableContainer>
                </Card>
            </Stack>
        </Sidebar>
    );
};

export default History; 