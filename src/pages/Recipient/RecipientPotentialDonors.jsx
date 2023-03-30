/* eslint-disable array-callback-return */
import React, { useState, useEffect } from "react";
import { Stack, Wrap, Text, Heading, Skeleton } from "@chakra-ui/react";
import "react-credit-cards/es/styles-compiled.css";
import Sidebar from "../../components/Recipient/RecipientSidebar";
import Breadcrumbs from "../../components/Utility/Breadcrumbs";
import Card from "../../components/Utility/Card";
import {
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    Button,
    useToast,
    TableContainer,
    Tag,
    TagLabel,
} from "@chakra-ui/react";
import { BsFillCheckCircleFill } from "react-icons/bs";

const History = () => {
    const toast = useToast();
    const [result, setResult] = useState([]);
    const [dataLoading, setDataLoading] = useState(false);
    const [loading, setLoading] = useState(false)
    const approvedClick = async () => {
      setLoading(true)
        let token = sessionStorage.getItem("secretKey");

        const result = await fetch(
            "https://organ-shield-backend.vercel.app/organ/accept",
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
        const tes = await result.json();

        if (tes.success) {
            toast({
                title: "Success!",
                description: tes.message,
                status: "success",
                duration: 9000,
                isClosable: true,
            });
        } else {
            toast({
                title: "Error!",
                description: tes.message,
                status: "error",
                duration: 9000,
                isClosable: true,
            });
        }
        setLoading(false)
        getDetails()
    };

    const getDetails = async () => {
        setDataLoading(true);
        let token = sessionStorage.getItem("secretKey");
        console.log(token);
        if (token == null) {
            toast({
                title: "Error!",
                description: "Try To Login Again",
                status: "error",
                duration: 9000,
                isClosable: true,
            });
        }

        const result = await fetch(
            "https://organ-shield-backend.vercel.app/organ/matches",
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

        const tes = await result.json();

        if (tes.success) {
            setResult(tes.data);
            // console.log(tes.data)
        } else {
            toast({
                title: "Error!",
                description: tes.message,
                status: "error",
                duration: 9000,
                isClosable: true,
            });
        }
        setDataLoading(false);
    };

    useEffect(() => {
        getDetails();
    }, []);

    return (
        <Sidebar>
            <Breadcrumbs links={["Home", "Dashboard", "Potential Donors"]} />
            <Heading mt={8} ml={4}>
                Potential Donors
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
                                    <Th>Match Percentage</Th>
                                    <Th>Hospital Status</Th>
                                    <Th>Recipient Status</Th>
                                    <Th>Recipient Approval</Th>
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
                                                <Td>{item.match_percentage}</Td>
                                                <Td>
                                                    {item.hospital_approved ? (
                                                        <Tag colorScheme="green">
                                                            <TagLabel>
                                                                Approved
                                                            </TagLabel>
                                                        </Tag>
                                                    ) : (
                                                        <Tag colorScheme="red">
                                                            <TagLabel>
                                                                Denied
                                                            </TagLabel>
                                                        </Tag>
                                                    )}
                                                </Td>
                                                <Td>
                                                    {item.recipient_accept ? (
                                                        <Tag colorScheme="green">
                                                            <TagLabel>
                                                                Approved
                                                            </TagLabel>
                                                        </Tag>
                                                    ) : (
                                                        <Tag colorScheme="red">
                                                            <TagLabel>
                                                                Not Accepted
                                                                Till Now
                                                            </TagLabel>
                                                        </Tag>
                                                    )}
                                                </Td>

                                                <Td>
                                                    {!item.recipient_accept ? (
                                                        <Button
                                                          loadingText="Accepting..."
                                                          isLoading={loading}
                                                            leftIcon={
                                                                <BsFillCheckCircleFill />
                                                            }
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
                                                            Accept
                                                        </Button>
                                                    ) : (
                                                        <Tag colorScheme="green">
                                                            <TagLabel>
                                                                Accepted
                                                            </TagLabel>
                                                        </Tag>
                                                    )}
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
