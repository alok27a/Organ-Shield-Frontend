/* eslint-disable array-callback-return */
import React, { useEffect, useState } from "react";
import { Stack, Wrap, Text, Heading, Input, Flex } from "@chakra-ui/react";
import Sidebar from "../../components/Recipient/RecipientSidebar";
import Breadcrumbs from "../../components/Utility/Breadcrumbs";
import Bottombar from "../../components/Utility/BottomSendMessage";


const RecipientCounselling = () => {


  return (
    <Sidebar>
      <Breadcrumbs links={["Home", "Dashboard", "Counselling"]} />
      <Heading mt={8} ml={4}>
        Online AI Based Counselling Service
      </Heading>
      <Stack p={4} gap={3} h="80vh">

        <Flex flex={1} direction="column" pt={4} bg="white" w="full" p={8} borderRadius="md" h="full" overflowY="scroll" style={{ scrollbarWidth: "none", "&::-web-kit-scroll-bar":{width:0}}} >
          <Flex bg="red.100" w="fit-content" minWidth="100px" borderRadius={5} p={3} m={1} >
            <Text>
              This is a dummy
            </Text>
          </Flex>
          <Flex bg="blue.100" w="fit-content" minWidth="100px" p={3} m={1} borderRadius={5} alignSelf="flex-end">
            <Text>
              This is a dummy
            </Text>
          </Flex>
          <Flex bg="red.100" w="fit-content" minWidth="100px" borderRadius={5} p={3} m={1} >
            <Text>
              This is a dummy
            </Text>
          </Flex>
          <Flex bg="blue.100" w="fit-content" minWidth="100px" p={3} m={1} borderRadius={5} alignSelf="flex-end">
            <Text>
              This is a dummy
            </Text>
          </Flex>
          <Flex bg="red.100" w="fit-content" minWidth="100px" borderRadius={5} p={3} m={1} >
            <Text>
              This is a dummy
            </Text>
          </Flex>
          <Flex bg="blue.100" w="fit-content" minWidth="100px" p={3} m={1} borderRadius={5} alignSelf="flex-end">
            <Text>
              This is a dummy
            </Text>
          </Flex>
          <Flex bg="red.100" w="fit-content" minWidth="100px" borderRadius={5} p={3} m={1} >
            <Text>
              This is a dummy
            </Text>
          </Flex>
          <Flex bg="blue.100" w="fit-content" minWidth="100px" p={3} m={1} borderRadius={5} alignSelf="flex-end">
            <Text>
              This is a dummy
            </Text>
          </Flex>
          <Flex bg="red.100" w="fit-content" minWidth="100px" borderRadius={5} p={3} m={1} >
            <Text>
              This is a dummy
            </Text>
          </Flex>
          <Flex bg="blue.100" w="fit-content" minWidth="100px" p={3} m={1} borderRadius={5} alignSelf="flex-end">
            <Text>
              This is a dummy
            </Text>
          </Flex>
          <Flex bg="red.100" w="fit-content" minWidth="100px" borderRadius={5} p={3} m={1} >
            <Text>
              This is a dummy
            </Text>
          </Flex>
          <Flex bg="blue.100" w="fit-content" minWidth="100px" p={3} m={1} borderRadius={5} alignSelf="flex-end">
            <Text>
              This is a dummy
            </Text>
          </Flex>
          <Flex bg="red.100" w="fit-content" minWidth="100px" borderRadius={5} p={3} m={1} >
            <Text>
              This is a dummy
            </Text>
          </Flex>
          <Flex bg="blue.100" w="fit-content" minWidth="100px" p={3} m={1} borderRadius={5} alignSelf="flex-end">
            <Text>
              This is a dummy
            </Text>
          </Flex>
          <Flex bg="red.100" w="fit-content" minWidth="100px" borderRadius={5} p={3} m={1} >
            <Text>
              This is a dummy
            </Text>
          </Flex>
          <Flex bg="blue.100" w="fit-content" minWidth="100px" p={3} m={1} borderRadius={5} alignSelf="flex-end">
            <Text>
              This is a dummy
            </Text>
          </Flex>
          <Flex bg="red.100" w="fit-content" minWidth="100px" borderRadius={5} p={3} m={1} >
            <Text>
              This is a dummy
            </Text>
          </Flex>
          <Flex bg="blue.100" w="fit-content" minWidth="100px" p={3} m={1} borderRadius={5} alignSelf="flex-end">
            <Text>
              This is a dummy
            </Text>
          </Flex>
          <Flex bg="red.100" w="fit-content" minWidth="100px" borderRadius={5} p={3} m={1} >
            <Text>
              This is a dummy
            </Text>
          </Flex>
          <Flex bg="blue.100" w="fit-content" minWidth="100px" p={3} m={1} borderRadius={5} alignSelf="flex-end">
            <Text>
              This is a dummy
            </Text>
          </Flex>
          <Flex bg="red.100" w="fit-content" minWidth="100px" borderRadius={5} p={3} m={1} >
            <Text>
              This is a dummy
            </Text>
          </Flex>
          <Flex bg="blue.100" w="fit-content" minWidth="100px" p={3} m={1} borderRadius={5} alignSelf="flex-end">
            <Text>
              This is a dummy
            </Text>
          </Flex>
          <Flex bg="red.100" w="fit-content" minWidth="100px" borderRadius={5} p={3} m={1} >
            <Text>
              This is a dummy
            </Text>
          </Flex>
          <Flex bg="blue.100" w="fit-content" minWidth="100px" p={3} m={1} borderRadius={5} alignSelf="flex-end">
            <Text>
              This is a dummy
            </Text>
          </Flex>
          <Flex bg="red.100" w="fit-content" minWidth="100px" borderRadius={5} p={3} m={1} >
            <Text>
              This is a dummy
            </Text>
          </Flex>
          <Flex bg="blue.100" w="fit-content" minWidth="100px" p={3} m={1} borderRadius={5} alignSelf="flex-end">
            <Text>
              This is a dummy
            </Text>
          </Flex>
         
          
          {/* <Input
            value={usertext}
            onChange={(e) => { setUserText(e.target.value) }}
            pr='4.5rem'
            mb='0.8rem'
            placeholder='Enter Text Here'
          /> */}

        </Flex>
        <Bottombar />
      </Stack>
    </Sidebar >
  );
};

export default RecipientCounselling;
