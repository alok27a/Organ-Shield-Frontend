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
} from "@chakra-ui/react";
import { Textarea } from "@chakra-ui/react";
import Sidebar from "../../components/Recipient/RecipientSidebar";
import Card from "../../components/Utility/Card";
import Breadcrumbs from "../../components/Utility/Breadcrumbs";
import { Select } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { MdOutlineDoneAll } from "react-icons/md";

const Dashboard = () => {
    const toast = useToast();

    // REGISTER DETAILS
    const [categ, setCateg] = React.useState("");
    const [organ, setOrgan] = React.useState("");
    const [ethnic, setEthnic] = React.useState("");
    const [bmi, setBmi] = React.useState("");
    const [lod, setLod] = React.useState("");
    const [show1, setShow1] = React.useState(false);

    const [loading, setLoading] = React.useState(false);

    const navigate = useNavigate();

    const handleClick1 = () => setShow1(!show1);

    // useEffect(() => {
    //   if (!sessionStorage.getItem('secretKey')) {
    //     navigate('/')
    //   }
    // }, [])

    const detailsSubmitClicked = async () => {
        setLoading(true);
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
        } else {
            let result = await fetch(
                "https://organ-shield-backend.vercel.app/organ/add",
                {
                    method: "POST",
                    body: JSON.stringify({
                        organ_type: organ,
                        ethnic: ethnic,
                        bmi: bmi,
                        lod: "l",
                    }),
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
        }
        setLoading(false);
        setCateg("");
        setBmi("");
        setEthnic("");
        setLod("");
        setOrgan("");
    };

    return (
        <>
            <Sidebar>
                <Breadcrumbs links={["Home", "Dashboard"]} />
                <Stack p={4} gap={3}>
                    <Card>
                        <Stack gap={3}>
                            <Heading>Welcome to Your Dashboard.</Heading>
                            <Text>{/* Your wallet address is{" "} */}</Text>
                        </Stack>
                    </Card>
                    <Card>
                        <FormControl>
                            <FormLabel>Select Category</FormLabel>
                            <Select
                                placeholder="Select Option"
                                size="md"
                                mb="0.8rem"
                                onChange={(categ) => {
                                    setCateg(categ.target.value);
                                }}
                                id="category"
                                name="category"
                                value={categ}
                            >
                                <option value="register">
                                    Register Details
                                </option>
                            </Select>

                            {/* REGISTER DETAILS CATEGORY FORM */}

                            {categ === "register" && (
                                <>
                                    <FormLabel mt="0.8rem">
                                        Enter the Organ Type
                                    </FormLabel>
                                    <Select
                                        placeholder="Select option"
                                        size="md"
                                        mb="0.8rem"
                                        onChange={(organ) => {
                                            setOrgan(organ.target.value);
                                        }}
                                        id="category1"
                                        name="category1"
                                        value={organ}
                                    >
                                        <option value="lung">Lung</option>
                                        <option value="heart">Heart</option>
                                        <option value="kidney">Kidney</option>
                                        <option value="eye">Eye</option>
                                        <option value="brain">Brain</option>
                                    </Select>

                                    <FormLabel mt="0.8rem">
                                        Enter the Ethnicity Type
                                    </FormLabel>
                                    <Input
                                        value={ethnic}
                                        onChange={(e) => {
                                            setEthnic(e.target.value);
                                        }}
                                        pr="4.5rem"
                                        mb="0.8rem"
                                        placeholder="Like White, Hispanic, etc."
                                    />
                                    <FormLabel mt="0.8rem">
                                        Enter the BMI
                                    </FormLabel>
                                    <Input
                                        value={bmi}
                                        onChange={(e) => {
                                            setBmi(e.target.value);
                                        }}
                                        pr="4.5rem"
                                        mb="0.8rem"
                                        placeholder="Enter BMI Value"
                                    />

                                    <Button
                                        colorScheme="red"
                                        isLoading={loading}
                                        p={4}
                                        leftIcon={<MdOutlineDoneAll />}
                                        loadingText="Submitting Data..."
                                        onClick={detailsSubmitClicked}
                                    >
                                        Submit
                                    </Button>
                                </>
                            )}
                        </FormControl>
                    </Card>
                </Stack>
            </Sidebar>
        </>
    );
};

export default Dashboard;
