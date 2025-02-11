import React from "react";
import {
  Button,
  Flex,
  Grid,
  GridItem,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverHeader,
  PopoverTrigger,
  Text,
} from "@chakra-ui/react";
import { BsFillCaretDownFill } from "react-icons/bs";

const TaskAndProjectsFooter = () => {
  return (
    <Flex p={3} gap={5} alignItems={"center"}>
      <Button
        border={"2px solid rgba(255,255,255,.4)"}
        borderRadius={"4px"}
        bg={"gray.400"}
        _hover={{ bgColor: "gray.400" }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="66"
          height="13"
          viewBox="0 0 66 13"
        >
          <path
            fill="#fff"
            d="M.024 1.495h3.503c2.42 0 3.504 1.408 3.504 2.828 0 .91-.46 1.81-1.32 2.248v.036c1.333.355 2.088 1.444 2.088 2.698 0 1.692-1.32 3.348-3.964 3.348H.024V1.495zM3.22 6.05c1.015 0 1.546-.58 1.546-1.3 0-.758-.507-1.362-1.593-1.362h-.825V6.05h.873zm.307 4.71c1.286 0 1.935-.44 1.935-1.456 0-.864-.65-1.36-1.71-1.36H2.348v2.815h1.18zm5.238-8.59c0-.734.59-1.326 1.393-1.326.778 0 1.368.557 1.368 1.326 0 .745-.59 1.36-1.368 1.36-.803-.012-1.393-.603-1.393-1.36zM9 4.642h2.29v8.01H9v-8.01zm4.473 5.928V6.417h-1.475V4.642h1.475v-1.88l2.3-.663V4.64h2.418l-.53 1.775h-1.9V9.99c0 .745.237.994.768.994.437 0 .885-.154 1.192-.355l.66 1.56c-.59.403-1.64.628-2.442.628-1.51 0-2.465-.84-2.465-2.248zm5.544-5.928h1.935l.26.852c.672-.627 1.32-1.053 2.182-1.053.39 0 .86.12 1.215.368L23.806 6.7c-.4-.248-.802-.307-1.015-.307-.495 0-.884.166-1.486.663v5.584h-2.29V4.642zM24.81 2.17c0-.734.59-1.326 1.392-1.326.78 0 1.368.557 1.368 1.326 0 .745-.59 1.36-1.368 1.36-.79-.012-1.392-.603-1.392-1.36zm.236 2.472h2.288v8.01h-2.288v-8.01zM30.944 8.618L28.02 4.642h2.37l1.793 2.437 1.793-2.438h2.372l-2.962 3.976 2.997 4.034h-2.37l-1.853-2.508-1.864 2.508h-2.372"
          />
          <path
            fill="#fff"
            d="M43.733 3.766c0-1.064-.885-1.443-1.817-1.443-1.262 0-2.288.414-3.244.84l-.66-1.976c1.073-.485 2.56-1.03 4.317-1.03 2.76 0 4.093 1.385 4.093 3.337 0 3.42-4.695 4.378-5.486 6.98h5.65v2.177h-9c.507-6.08 6.146-6.435 6.146-8.884z"
          />
          <path
            fill="#fff"
            d="M46.128 8.085l6.194-7.88h1.84V7.66h1.84v2.07h-1.84v2.945h-2.49V9.73H46.13V8.084zm4.424-.426h1.133V6.32c0-.958.07-2.07.118-2.307l-2.82 3.703c.236-.024 1.133-.06 1.57-.06z"
          />
          <path
            fill="#fff"
            d="M61.582.075c-2.29 0-4.153 1.858-4.153 4.153 0 2.295 1.852 4.153 4.152 4.153s4.153-1.857 4.153-4.152S63.87.075 61.582.075zm0 7.395c-1.78 0-3.22-1.444-3.22-3.23 0-1.787 1.44-3.23 3.22-3.23 1.78 0 3.22 1.443 3.22 3.23 0 1.786-1.44 3.23-3.22 3.23z"
          />
          <path fill="#fff" d="M62.042 3.767V2.382h-.92V4.7h2.3v-.933" />
        </svg>
      </Button>
      <Popover placement="top-start">
        <PopoverTrigger>
          <Button
            border={"2px solid rgba(255,255,255,.4)"}
            borderRadius={"4px"}
            bg={"gray.400"}
            color={"whiteAlpha.900"}
            _hover={{ bgColor: "gray.400", color: "whiteAlpha.900" }}
            rightIcon={<BsFillCaretDownFill />}
          >
            English
          </Button>
        </PopoverTrigger>
        <PopoverContent color={"blackAlpha.800"}>
          <PopoverHeader fontWeight="semibold">
            Select your language
          </PopoverHeader>
          <PopoverArrow />
          <PopoverCloseButton />
          <PopoverBody>
            <Grid
              templateColumns={{ sm: "repeat(2, 1fr)", md: "repeat(3, 1fr)" }}
              gap={2}
            >
              <GridItem>English</GridItem>
              <GridItem>Deutch</GridItem>
              <GridItem>Espanol</GridItem>
              <GridItem>Portugues</GridItem>
              <GridItem>Francias</GridItem>
              <GridItem>Italiano, beta</GridItem>
              <GridItem>Polski</GridItem>
              <GridItem>Pyccknn</GridItem>
              <GridItem>English</GridItem>
              <GridItem>Turkish</GridItem>
              <GridItem>Bahasa Indonesia, beta</GridItem>
              <GridItem>Hindi</GridItem>
            </Grid>
          </PopoverBody>
        </PopoverContent>
      </Popover>
      <Text color={"#fff"}>© 2022 Bitrix24</Text>
      <Text color={"#fff"} borderLeft={"1px solid rgba(255,255,255,.4)"} pl={3}>
        Implementation request
      </Text>
      <Text color={"#fff"} borderLeft={"1px solid rgba(255,255,255,.4)"} pl={3}>
        Themes
      </Text>
      <Text color={"#fff"} borderLeft={"1px solid rgba(255,255,255,.4)"} pl={3}>
        Print
      </Text>
    </Flex>
  );
};

export default TaskAndProjectsFooter;
