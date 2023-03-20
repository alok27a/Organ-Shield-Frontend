import React, { useEffect, useState } from "react";
import {
    Stack,
    Input,
    Heading,
    FormControl,
    FormLabel,
    Text,
    Button,
    useToast,
    InputRightElement,
    InputGroup,
    toast
} from "@chakra-ui/react";
import Sidebar from "../../components/Hospital/HospitalSidebar";
import Card from "../../components/Utility/Card";
import Breadcrumbs from "../../components/Utility/Breadcrumbs";
import { useNavigate } from "react-router-dom";

// DASHBOARD
import {
    Box,
    chakra,
    Flex,
    SimpleGrid,
    Stat,
    StatLabel,
    StatNumber,
    useColorModeValue,
} from '@chakra-ui/react';
import { BsPerson,BsBookmarkCheck } from 'react-icons/bs';
import { BiDonateHeart } from 'react-icons/bi';

function StatsCard(props) {
    const { title, stat, icon } = props;
    return (
        <Stat
            px={{ base: 2, md: 4 }}
            py={'5'}
            shadow={'xl'}
            border={'1px solid'}
            borderColor={useColorModeValue('gray.800', 'gray.500')}
            rounded={'lg'}>
            <Flex justifyContent={'space-between'}>
                <Box pl={{ base: 2, md: 4 }}>
                    <StatLabel fontWeight={'medium'} isTruncated>
                        {title}
                    </StatLabel>
                    <StatNumber fontSize={'2xl'} fontWeight={'medium'}>
                        {stat}
                    </StatNumber>
                </Box>
                <Box
                    my={'auto'}
                    color={useColorModeValue('gray.800', 'gray.200')}
                    alignContent={'center'}>
                    {icon}
                </Box>
            </Flex>
        </Stat>
    );
}


const Dashboard = () => {

    const toast = useToast();





    const navigate = useNavigate()

    const handleClick1 = () => setShow1(!show1)

    // useEffect(() => {
    //   if (!sessionStorage.getItem('secretKey')) {
    //     navigate('/')
    //   }
    // }, [])

    const detailsSubmitClicked = async () => {
        let token = sessionStorage.getItem("secretKey")
        if (token == null) {
            toast({
                title: 'Error!',
                description: "Try To Login Again",
                status: 'error',
                duration: 9000,
                isClosable: true,
            })
        }
        else {

        }
    }


    return (
        <>
            <Sidebar>
                <Breadcrumbs links={["Home", "Dashboard"]} />
                <Stack p={4} gap={3} >
                    <Card >
                        <Stack gap={3}>
                            <Heading>Welcome to Your Dashboard.</Heading>
                        </Stack>
                    </Card>
                    <Card>
                        <Box maxW="7xl" mx={'auto'} pt={5} px={{ base: 2, sm: 12, md: 17 }}>
                            <SimpleGrid columns={{ base: 1, md: 3 }} spacing={{ base: 5, lg: 8 }}>
                                <StatsCard
                                    title={'Donors'}
                                    stat={'5,000'}
                                    icon={<BiDonateHeart size={'3em'} />}
                                />
                                <StatsCard
                                    title={'Recipients'}
                                    stat={'1,000'}
                                    icon={<BsPerson size={'3em'} />}
                                />
                                <StatsCard
                                    title={'Successful Transplants'}
                                    stat={'7'}
                                    icon={<BsBookmarkCheck size={'3em'} />}
                                />
                            </SimpleGrid>
                        </Box>

                    </Card>
                </Stack>
            </Sidebar>
        </>
    );
};

export default Dashboard;
