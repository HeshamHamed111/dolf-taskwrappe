import { Box, Flex, Heading } from "@chakra-ui/react";
import polygon from "../../../assets/images/Polygon84.svg";
const Academy = () => {
  return (
    <Box py="50px" bg="#ebf7ff" color="#004c98">
      <Heading ml="30px" mb="30px">
        The Academy in Numbers
      </Heading>
      <Flex
        justifyContent="space-between"
        w="90%"
        margin="auto"
        alignItems="center"
      >
        <Box className="numbersacademy">
          <Heading
            fontSize="60px"
            color="#00347c"
            position="relative"
            zIndex="999"
          >
            +2000
          </Heading>
          <Heading
            fontSize="25px"
            color="#00347c"
            position="relative"
            zIndex="999"
          >
            Training
          </Heading>
        </Box>
        <Box className="numbersacademy">
          <Heading
            fontSize="60px"
            color="#00347c"
            position="relative"
            zIndex="999"
          >
            +165K
          </Heading>
          <Heading
            fontSize="25px"
            color="#00347c"
            position="relative"
            zIndex="999"
          >
            Examiners
          </Heading>
        </Box>
        <Box className="numbersacademy">
          <Heading
            fontSize="60px"
            color="#00347c"
            position="relative"
            zIndex="999"
          >
            +21K
          </Heading>
          <Heading
            fontSize="25px"
            color="#00347c"
            position="relative"
            zIndex="999"
          >
            Trainess
          </Heading>
        </Box>
        <Box className="numbersacademy">
          <Heading
            fontSize="60px"
            color="#00347c"
            position="relative"
            zIndex="999"
          >
            +600
          </Heading>
          <Heading
            fontSize="25px"
            color="#00347c"
            position="relative"
            zIndex="999"
          >
            Entities
          </Heading>
        </Box>
        <Box className="numbersacademy">
          <Heading
            fontSize="60px"
            color="#00347c"
            position="relative"
            zIndex="999"
          >
            +43
          </Heading>
          <Heading
            fontSize="25px"
            color="#00347c"
            position="relative"
            zIndex="999"
            w="200px"
          >
            Professional Certificate
          </Heading>
        </Box>
      </Flex>
    </Box>
  );
};

export default Academy;
