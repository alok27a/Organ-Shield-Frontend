/* eslint-disable array-callback-return */
import React, { useState, useEffect } from "react";
import { Stack, Wrap, Text, Heading, useDisclosure, useToast } from "@chakra-ui/react";
import 'react-credit-cards/es/styles-compiled.css';
import Sidebar from "../../components/Hospital/HospitalSidebar";
import Breadcrumbs from "../../components/Utility/Breadcrumbs";
import Card from "../../components/Utility/Card"
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
    Button
} from '@chakra-ui/react'


// MODAL
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
} from '@chakra-ui/react'


const History = () => {
    const [recipients, setRecipients] = useState([])
    const toast = useToast()
    const [userdetails, setUserDetails] = useState([])
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [id, setId] = useState("")


    const getRecipientDetails = async () => {

        const result = await fetch("https://organ-shield-backend.vercel.app/hospital/recipient", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                'Accept': 'application/json',
                "Access-Control-Allow-Origin": "*"
            }
        })
        const tes = await result.json();

        if (tes.status) {
            setRecipients(tes.data)
            console.log(tes.data)
        }
        else {
            toast({
                title: 'Error!',
                description: "Error Fetching recipients",
                status: 'error',
                duration: 9000,
                isClosable: true,
            })
        }
    }


    const donorDetailsClicked = async (id) => {

        console.log(id)
        let result = await fetch(`https://organ-shield-backend.vercel.app/hospital/recipient/${id}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                'Accept': 'application/json',
                "Access-Control-Allow-Origin": "*"
            }
        })
        let tes = await result.json()
        console.log(tes)
        if (tes.success) {
            setUserDetails(tes.data)
        }
        else {
            toast({
                title: 'Error!',
                description: "Error Fetching Donor Details",
                status: 'error',
                duration: 9000,
                isClosable: true,
            })
        }
        onOpen();
    }


    useEffect(() => {
        getRecipientDetails();
    }, [])

    return (
        <Sidebar>
            <Breadcrumbs links={["Home", "Dashboard", "Recipients"]} />
            <Heading mt={8} ml={4}>
                Recipients
            </Heading>
            <Stack p={4} gap={3}>
            <Card>
                    <TableContainer>
                        <Table variant='simple'>
                            <Thead>
                                <Tr>
                                    <Th>Name</Th>
                                    <Th>Age</Th>
                                    <Th>Gender</Th>
                                    <Th>Blood Group</Th>
                                    <Th>View Details</Th>
                                </Tr>
                            </Thead>
                            <Tbody>
                                {recipients && recipients.map((item) => {
                                    return (
                                        <Tr>
                                            <Td>{item.name}</Td>
                                            <Td>{item.age}</Td>
                                            <Td >{item.gender}</Td>
                                            <Td >{item.blood_group}</Td>
                                            <Td>
                                                {
                                                    <Button onClick={e => { donorDetailsClicked(item._id) }}>View Details</Button>

                                                }
                                                <Modal isOpen={isOpen} onClose={onClose} size="3xl">
                                                    <ModalOverlay />
                                                    <ModalContent>
                                                        <ModalHeader>Modal Title</ModalHeader>
                                                        <ModalCloseButton />
                                                        <ModalBody>
                                                            
                                                            <TableContainer>
                                                                <Table variant='simple'>

                                                                    <Thead>
                                                                        <Tr>
                                                                            <Th>Organ</Th>
                                                                            <Th>Blood</Th>
                                                                            <Th>Ethnic</Th>
                                                                            <Th>BMI</Th>
                                                                            <Th>LOD</Th>
                                                                        </Tr>
                                                                    </Thead>
                                                                    <Tbody>
                                                                       
                                                                            {
                                                                                userdetails && userdetails.map((user) => {
                                                                                    return (
                                                                                        <Tr>
                                                                                            <Td>{user.organ_type}</Td>

                                                                                            <Td>{user.blood_group}</Td>

                                                                                            <Td>{user.ethnic}</Td>

                                                                                            <Td>{user.bmi}</Td>

                                                                                            <Td>{user.lod}</Td>
                                                                                        </Tr>
                                                                                    )
                                                                                })
                                                                            }
                                                                        
                                                                    </Tbody>

                                                                </Table>
                                                            </TableContainer>

                                                        </ModalBody>

                                                        <ModalFooter>
                                                            <Button colorScheme='red' mr={3} onClick={onClose}>
                                                                Close
                                                            </Button>
                                                        </ModalFooter>
                                                    </ModalContent>
                                                </Modal>
                                            </Td>
                                        </Tr>
                                    )
                                })
                                }
                            </Tbody>
                        </Table>

                    </TableContainer>
                </Card>
            </Stack>
        </Sidebar>
    );
};

export default History; 