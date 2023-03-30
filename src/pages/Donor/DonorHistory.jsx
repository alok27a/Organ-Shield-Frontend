/* eslint-disable array-callback-return */
import React, { useState, useEffect } from "react";
import {
    Stack,
    Wrap,
    Text,
    Heading,
    useToast,
    Button,
    Skeleton,
} from "@chakra-ui/react";
import "react-credit-cards/es/styles-compiled.css";
import Sidebar from "../../components/Donor/DonorSidebar";
import Breadcrumbs from "../../components/Utility/Breadcrumbs";
import Card from "../../components/Utility/Card";

import { AiFillDelete } from "react-icons/ai";
// TABLE IMPORTS
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
} from "@chakra-ui/react";

const History = () => {
    let toast = useToast();
    const [userhistory, setUserHistory] = useState([]);
    const [dataLoading, setDataLoading] = useState(false);
    const [deleteLoading, setDeleteLoading] = useState(false);

    const getOrganHistory = async () => {
        setDataLoading(true);
        let token = sessionStorage.getItem("secretKey");

        let result = await fetch(
            "https://organ-shield-backend.vercel.app/organ",
            {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                    "Access-Control-Allow-Origin": "*",
                    "auth-token": token,
                },
            }
        );

        let test = await result.json();
        console.log(test);

        if (test.success) {
            setUserHistory(test.data);
        } else {
            toast({
                title: "Error!",
                description: test.message,
                status: "error",
                duration: 9000,
                isClosable: true,
            });
        }
        setDataLoading(false);
    };

    const deleteEntry = async (id) => {
      setDeleteLoading(true)
        let token = sessionStorage.getItem("secretKey");

        let result = await fetch(
            `https://organ-shield-backend.vercel.app/organ/delete/${id}`,
            {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                    "Access-Control-Allow-Origin": "*",
                    "auth-token": token,
                },
            }
        );

        let test = await result.json();
        console.log(test);
        if (test.success) {
            toast({
                title: "Success!",
                description: test.message,
                status: "success",
                duration: 9000,
                isClosable: true,
            });
        } else {
            toast({
                title: "Error!",
                description: test.message,
                status: "error",
                duration: 9000,
                isClosable: true,
            });
        }
        setDeleteLoading(false)
        getOrganHistory()
    };

    useEffect(() => {
        getOrganHistory();
    }, []);

    return (
        <Sidebar>
            <Breadcrumbs links={["Home", "Dashboard", "History"]} />
            <Heading mt={8} ml={4}>
                View History Here
            </Heading>
            <Stack p={4} gap={3}>
                <Wrap spacing={8}>
                    <Card>
                        <TableContainer>
                            <Table variant="simple">
                          {userhistory.length===0 && !dataLoading &&<TableCaption>No Data Available</TableCaption>}
                                <Thead>
                                    <Tr>
                                        <Th>Organ Type</Th>
                                        <Th>Blood Group</Th>
                                        <Th>BMI</Th>
                                        <Th>LOD</Th>
                                        <Th>Ethnicity</Th>
                                        <Th>Delete Entry</Th>
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
                                            <Td>
                                                <Skeleton h="20px" />
                                            </Td>
                                        </Tr>
                                    )}
                                    {userhistory &&
                                        userhistory.map((user) => {
                                            return (
                                                <Tr>
                                                    <Td>{user.blood_group}</Td>
                                                    <Td>{user.organ_type}</Td>
                                                    <Td>{user.bmi}</Td>
                                                    <Td>{user.lod}</Td>
                                                    <Td>{user.ethnic}</Td>
                                                    <Td>
                                                        {
                                                            <Button
                                                                leftIcon={<AiFillDelete/>}
                                                                isLoading={deleteLoading}
                                                                loadingText="Deleting..."
                                                                onClick={(
                                                                    e
                                                                ) => {
                                                                    deleteEntry(
                                                                        user._id
                                                                    );
                                                                }}
                                                            >
                                                                Delete
                                                            </Button>
                                                        }
                                                    </Td>
                                                </Tr>
                                            );
                                        })}
                                </Tbody>
                            </Table>
                            
                        </TableContainer>
                    </Card>
                </Wrap>
            </Stack>
        </Sidebar>
    );
};

export default History;
