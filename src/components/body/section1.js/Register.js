import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";
import icalogo from "../../../assets/images/icalogo.jpg";
import E1en from "../../../assets/images/E1en.png";
import E2en from "../../../assets/images/E2en.png";
import E3en from "../../../assets/images/E3en.png";
import { transform } from "framer-motion";

const Register = () => {
  return (
    <Flex justifyContent={"center"} alignItems="center">
      <Box
        w="280px"
        h="350px"
        borderRadius="15px"
        p={"15px"}
        bg="rgb(36, 64, 110)"
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        mr="15px"
        cursor="pointer"
        transition="all 0.4s ease-in-out"
        _hover={{
          transform: "scale(1.06)",
          transition: "all 0.4s ease-in-out",
        }}
      >
        <Heading fontSize="20px" fontWeight="400" color="#FFF" mb="10px">
          Register Now
        </Heading>
        <Image src={icalogo} w="180px" h="190px" borderRadius="15px" />
        <Text color="#FFF" textAlign="center" mt="10px">
          Advanced Certificate in Regulatory Compliance and Combating Financial
          Crime
        </Text>
      </Box>
      <Box
        w="280px"
        borderRadius="15px"
        mx="10px"
        cursor="pointer"
        transition="all 0.4s ease-in-out"
        _hover={{
          transform: "scale(1.06)",
          transition: "all 0.4s ease-in-out",
        }}
      >
        <Image src={E1en} w="280px" h="350px" borderRadius="15px" />
      </Box>
      <Box
        w="280px"
        borderRadius="15px"
        mx="10px"
        cursor="pointer"
        transition="all 0.4s ease-in-out"
        _hover={{
          transform: "scale(1.06)",
          transition: "all 0.4s ease-in-out",
        }}
      >
        <Image src={E2en} w="280px" h="350px" borderRadius="15px" />
      </Box>
      <Box
        w="280px"
        borderRadius="15px"
        ml="15px"
        cursor="pointer"
        transition="all 0.4s ease-in-out"
        _hover={{
          transform: "scale(1.06)",
          transition: "all 0.4s ease-in-out",
        }}
      >
        <Image src={E3en} w="280px" h="350px" borderRadius="15px" />
      </Box>
    </Flex>
  );
};

export default Register;
