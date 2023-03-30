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
    toast,
    Skeleton,
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
} from "@chakra-ui/react";
import { BsPerson, BsBookmarkCheck } from "react-icons/bs";
import { BiDonateHeart } from "react-icons/bi";
import { FaChartArea, FaLocationArrow } from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";

function StatsCard(props) {
    const { title, stat, icon } = props;
    return (
        <Stat
            px={{ base: 2, md: 4 }}
            py={"5"}
            shadow={"xl"}
            border={"1px solid"}
            borderColor={useColorModeValue("gray.800", "gray.500")}
            rounded={"lg"}
        >
            <Flex justifyContent={"space-between"}>
                <Box pl={{ base: 2, md: 4 }}>
                    <StatLabel fontWeight={"medium"} isTruncated>
                        {title}
                    </StatLabel>
                    <StatNumber fontSize={"2xl"} fontWeight={"medium"}>
                        {stat}
                    </StatNumber>
                </Box>
                <Box
                    my={"auto"}
                    color={useColorModeValue("gray.800", "gray.200")}
                    alignContent={"center"}
                >
                    {icon}
                </Box>
            </Flex>
        </Stat>
    );
}

const Dashboard = () => {
    const toast = useToast();
    const [donors, setDonors] = useState("");
    const [recipients, setRecipients] = useState("");
    const [organstodonate, setOrgansToDonate] = useState("");
    const [organstorecieve, setOrgansToRecieve] = useState("");
    const [transplants, setTransplants] = useState("");
    const [loading, setLoading] = useState(false);

    const getAllStats = async () => {
        setLoading(true);
        let result = await fetch(
            "https://organ-shield-backend.vercel.app/hospital/",
            {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                    "Access-Control-Allow-Origin": "*",
                },
            }
        );
        console.log("hello");
        let test = await result.json();
        console.log(test);
        if (test.success) {
            setDonors(test.data.donors);
            setRecipients(test.data.recipients);
            setOrgansToDonate(test.data.organsToDonate);
            setOrgansToRecieve(test.data.organsToReceive);
            setTransplants(test.data.transplants);
        } else {
            toast({
                title: "Error!",
                description: "Error Fetching Donor Details",
                status: "error",
                duration: 9000,
                isClosable: true,
            });
        }
        setLoading(false);
    };

    useEffect(() => {
        getAllStats();
    }, []);

    return (
        <>
            <Sidebar>
                <Breadcrumbs links={["Home", "Dashboard"]} />
                <Stack p={4} gap={3}>
                    <Card>
                        <Stack gap={3}>
                            <Heading>Welcome to Your Dashboard.</Heading>
                        </Stack>
                    </Card>
                    <Card>
                        <Box
                            maxW="7xl"
                            mx={"auto"}
                            pt={5}
                            px={{ base: 2, sm: 12, md: 17 }}
                        >
                            <SimpleGrid
                                columns={{ base: 1, md: 3 }}
                                spacing={{ base: 5, lg: 8 }}
                            >
                                <StatsCard
                                    title={"Max Hospital Pvt Ltd"}
                                    stat="Mumbai"
                                    icon={<MdLocationOn size={"3em"} />}
                                />
                                <StatsCard
                                    title={"Donors"}
                                    stat={
                                        loading ? (
                                            <Skeleton
                                                mt="10px"
                                                h="20px"
                                                w="100px"
                                            />
                                        ) : (
                                            donors
                                        )
                                    }
                                    icon={<BiDonateHeart size={"3em"} />}
                                />
                                <StatsCard
                                    title={"Recipients"}
                                    stat={
                                        loading ? (
                                            <Skeleton
                                                mt="10px"
                                                h="20px"
                                                w="100px"
                                            />
                                        ) : (
                                            recipients
                                        )
                                    }
                                    icon={<BsPerson size={"3em"} />}
                                />
                                <StatsCard
                                    title={"Successful Transplants"}
                                    stat={
                                        loading ? (
                                            <Skeleton
                                                mt="10px"
                                                h="20px"
                                                w="100px"
                                            />
                                        ) : (
                                            transplants
                                        )
                                    }
                                    icon={<BsBookmarkCheck size={"3em"} />}
                                />
                                <StatsCard
                                    title={"Organs to Donate"}
                                    stat={
                                        loading ? (
                                            <Skeleton
                                                mt="10px"
                                                h="20px"
                                                w="100px"
                                            />
                                        ) : (
                                            organstodonate
                                        )
                                    }
                                    icon={<FaChartArea size={"3em"} />}
                                />
                                <StatsCard
                                    title={"Number of Organs Needed"}
                                    stat={
                                        loading ? (
                                            <Skeleton
                                                mt="10px"
                                                h="20px"
                                                w="100px"
                                            />
                                        ) : (
                                            organstorecieve
                                        )
                                    }
                                    icon={<FaChartArea size={"3em"} />}
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
