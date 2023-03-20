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
import { Textarea } from '@chakra-ui/react'
import Sidebar from "../../components/Donor/DonorSidebar";
import Card from "../../components/Utility/Card";
import Breadcrumbs from "../../components/Utility/Breadcrumbs";
import { Select } from '@chakra-ui/react'
import { useNavigate } from "react-router-dom";


const Dashboard = () => {

  const toast = useToast();

  // REGISTER DETAILS 
  const [categ, setCateg] = React.useState("")
  const [organ, setOrgan] = React.useState("")
  const [ethnic, setEthnic] = React.useState("")
  const [bmi, setBmi] = React.useState("")
  const [lod, setLod] = React.useState("")
  const [show1, setShow1] = React.useState(false)



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
              <Text>
                {/* Your wallet address is{" "} */}
              </Text>
            </Stack>
          </Card>
          <Card>
            <FormControl>
              <FormLabel>Select Category</FormLabel>
              <Select placeholder='Select Option' size='md' mb='0.8rem'
                onChange={(categ) => { setCateg(categ.target.value) }}
                id="category" name="category" value={categ}>
                <option value='register'>Register Details</option>
              </Select>

              {/* REGISTER DETAILS CATEGORY FORM */}

              {categ === "register" && <>

                <FormLabel mt='0.8rem'>Enter the Organ Type</FormLabel>
                <Select placeholder='Select option' size='md' mb='0.8rem'
                  onChange={(organ) => { setOrgan(organ.target.value) }}
                  id="category1" name="category1" value={organ}>
                  <option value='lung'>Lung</option>
                  <option value='heart'>Heart</option>
                  <option value='kidney'>Kidney</option>
                  <option value='eye'>Eye</option>
                  <option value='brain'>Brain</option>
                </Select>


                <FormLabel mt='0.8rem'>Enter the Ethnicity Type</FormLabel>
                <Input
                  value={ethnic}
                  onChange={(e) => { setEthnic(e.target.value) }}
                  pr='4.5rem'
                  mb='0.8rem'
                  placeholder='Like White, Hispanic, etc.'
                />
                <FormLabel mt='0.8rem'>Enter the BMI</FormLabel>
                <Input
                  value={bmi}
                  onChange={(e) => { setBmi(e.target.value) }}
                  pr='4.5rem'
                  mb='0.8rem'
                  placeholder='Enter BMI Value'
                />
                <FormLabel mt='0.8rem'>Living Organ Donor </FormLabel>
                <Select placeholder='Select option' size='md' mb='0.8rem'
                  onChange={(lod) => { setLod(lod.target.value) }}
                  id="category2" name="category2" value={lod}>
                  <option value='living'>Living</option>
                  <option value='nonliving'>Non-Living</option>
                </Select>

                <Button colorScheme="red" p={4} onClick={detailsSubmitClicked}>
                  Submit
                </Button>

              </>
              }

            </FormControl>
          </Card>
        </Stack>
      </Sidebar>
    </>
  );
};

export default Dashboard;
