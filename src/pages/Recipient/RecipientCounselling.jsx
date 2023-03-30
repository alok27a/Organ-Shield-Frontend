/* eslint-disable array-callback-return */
import React, { useEffect, useState } from "react";
import { Stack, Wrap, Text, Heading, Input, Flex, Button, InputGroup, InputRightElement, CircularProgress } from "@chakra-ui/react";
import Sidebar from "../../components/Recipient/RecipientSidebar";
import Breadcrumbs from "../../components/Utility/Breadcrumbs";
import { Configuration, OpenAIApi } from "openai";
import { TbSend } from "react-icons/tb";


const configuration = new Configuration({
  apiKey: "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"
});
const openai = new OpenAIApi(configuration);

// let messages = [
//   { "role": "system", "content": "You are OrganSheild chatbot which only answers to all the queries in an organ donation system that uses blockchain and also provides basic counselling on health and medical use cases" },
// ];

let tmp = [
  { "role": "system", "content": "You are OrganSheild chatbot which only answers to all the queries in an organ donation system that uses blockchain and also provides basic counselling on health and medical use cases" }
]


const RecipientCounselling = () => {

  const [usertext, setUserText] = useState("")
  const [loading, setLoading] = useState(false)
  const [messages, setMessages] = useState([
    { "role": "system", "content": "You are OrganSheild chatbot which provides short answers to all the queries in an organ donation system and also provides basic counselling on health and medical use cases. Provide answer in less than 50 words." }
  ])

  // useEffect(()=>{
  //   console.log("hell")
  // },[tmp,messages])

  const setUserMessage = async () => {
    setMessages(messages => [...messages, { "role": "user", "content": usertext }])
  }

  const chatResponses = async () => {
    setUserText("")
    setLoading(true)
    // console.log(messages)
    // messages.push({ "role": "user", "content": input });
    // setMessages([...messages, ])
    // tmp.push({ "role": "user", "content": usertext })
    console.log(usertext)
    setMessages(messages => [...messages, { "role": "user", "content": usertext }])
    // setUserMessage()

    console.log("Start", messages)

    const chat = await openai.createChatCompletion({
      model: "gpt-3.5-turbo",
      messages:  [...messages, { "role": "user", "content": usertext }],
    });

    const reply = chat.data.choices[0].message.content;
    // // messages.push({ "role": "assistant", "content": reply });
    // setMessages([...messages, ])
    // if(reply.length===0){
    //   chatResponses()
    // }
    setMessages(messages => [...messages, { "role": "assistant", "content": reply }])
    console.log("End", messages)
    setLoading(false)
    // tmp.push({ "role": "assistant", "content": reply })
    // setMessages(tmp)
  }

  return (
      <Sidebar>
          <Breadcrumbs links={["Home", "Dashboard", "Counselling"]} />
          <Heading mt={8} ml={4}>
              Online AI Based Counselling Service
          </Heading>
          <Stack p={4} gap={3} h="80vh">
              <Flex
                  flex={1}
                  direction="column"
                  pt={4}
                  bg="white"
                  w="full"
                  p={8}
                  borderRadius="md"
                  h="full"
                  overflowY="scroll"
                  style={{
                      scrollbarWidth: "none",
                      "&::-web-kit-scroll-bar": { width: 0 },
                  }}
              >
                  {messages.map((msg) => {
                      if (msg.role === "assistant") {
                          return (
                              <Flex
                                  bg="red.100"
                                  w="fit-content"
                                  minWidth="100px"
                                  borderRadius={5}
                                  p={3}
                                  m={1}
                              >
                                  <Text>{msg.content}</Text>
                              </Flex>
                          );
                      } else if (msg.role === "user") {
                          return (
                              <Flex
                                  bg="blue.100"
                                  w="fit-content"
                                  minWidth="100px"
                                  p={3}
                                  m={1}
                                  borderRadius={5}
                                  alignSelf="flex-end"
                              >
                                  <Text>{msg.content}</Text>
                              </Flex>
                          );
                      }
                  })}
              </Flex>
              <InputGroup>
                  <Input
                      value={usertext}
                      disabled={loading}
                      onChange={(e) => {
                          setUserText(e.target.value);
                      }}
                      pr="4.5rem"
                      mb="0.8rem"
                      placeholder={
                          loading
                              ? "Organ Shield bot is thinking..."
                              : "Send a message..."
                      }
                  />
                  <InputRightElement
                      children={
                          loading ? (
                              <CircularProgress isIndeterminate size="20px" />
                          ) : (
                              <TbSend />
                          )
                      }
                      onClick={chatResponses}
                  />
              </InputGroup>
              {/* <Button
          onClick={chatResponses}
        ></Button> */}
          </Stack>
      </Sidebar>
  );
};

export default RecipientCounselling;
