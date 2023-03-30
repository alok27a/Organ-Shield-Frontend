/* eslint-disable array-callback-return */
import React, { useState, useEffect } from "react";
import { Stack, Wrap, Text, Heading, Skeleton } from "@chakra-ui/react";
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
    const [dataLoading, setDataLoading] = useState(false)
    const getMatchedResult = async () => {
        setDataLoading(true)
        const result = await fetch("http://localhost:5000/hospital/match", {
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
            console.log(tes.data)
        } else {
            toast({
                title: 'Error!',
                description: tes.message,
                status: 'error',
                duration: 9000,
                isClosable: true,
            })
        }
        setDataLoading(false)
    }

    const approvedClick = async (did, rid, mp, o) => {
        const result = await fetch("https://organ-shield-backend.vercel.app/hospital/match/approve", {
            method: "POST",
            body: JSON.stringify({
                "donor_id": did,
                "recipient_id": rid,
                "match_percentage": mp,
                "organ": o
            }),
            headers: {
                "Content-Type": "application/json",
                'Accept': 'application/json',
                "Access-Control-Allow-Origin": "*"
            }
        })
        const tes = await result.json()
        if (tes.success) {
            toast({
                title: 'Success!',
                description: tes.message,
                status: 'success',
                duration: 9000,
                isClosable: true,
            })
        } else {
            toast({
                title: 'Error!',
                description: "Error Fetching Donor Details",
                status: 'error',
                duration: 9000,
                isClosable: true,
            })
        }
        getMatchedResult()
    }

    useEffect(() => {
        getMatchedResult()
    }, [])

    return (
        <Sidebar>
            <Breadcrumbs links={["Home", "Dashboard", "Matching"]} />
            <Heading mt={8} ml={4}>
                Matching Donors & Recipients
            </Heading>
            <Stack p={4} gap={3}>
                <Card>
                    <TableContainer>
                        <Table variant="simple">
                            {result.length === 0 && !dataLoading && (
                                <TableCaption>No Data Available</TableCaption>
                            )}
                            <Thead>
                                <Tr>
                                    <Th>Donor ID</Th>
                                    <Th>Recipient ID</Th>
                                    <Th>Organ Type</Th>
                                    <Th>Matching Percentage</Th>
                                    <Th>Approval</Th>
                                </Tr>
                            </Thead>
                            <Tbody>
                                {dataLoading && (
                                    <Tr>
                                        <Td>
                                            <Skeleton h="20px" />
                                        </Td>
                                        <Td>
                                            <Skeleton h="20px" />
                                        </Td>
                                        <Td>
                                            <Skeleton h="20px" />
                                        </Td>
                                        <Td>
                                            <Skeleton h="20px" />
                                        </Td>
                                        <Td>
                                            <Skeleton h="20px" />
                                        </Td>
                                    </Tr>
                                )}
                                {result &&
                                    result.map((item) => {
                                        return (
                                            <Tr>
                                                <Td>{item.donor_id}</Td>
                                                <Td>{item.recipient_id}</Td>
                                                <Td>{item.donor_organ_type}</Td>
                                                <Td>{item.match_percentage}</Td>
                                                <Td>
                                                    <Button
                                                        colorScheme="whatsapp"
                                                        margin={2}
                                                        onClick={(e) =>
                                                            approvedClick(
                                                                item.donor_id,
                                                                item.recipient_id,
                                                                item.match_percentage,
                                                                item.donor_organ_type
                                                            )
                                                        }
                                                    >
                                                        <BsFillCheckCircleFill />
                                                    </Button>
                                                    <Button
                                                        colorScheme="red"
                                                        margin={2}
                                                    >
                                                        <MdCancel />
                                                    </Button>
                                                </Td>
                                            </Tr>
                                        );
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