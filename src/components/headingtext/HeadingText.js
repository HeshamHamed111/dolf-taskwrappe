import { Box, Heading, Text } from "@chakra-ui/react";

const HeadingText = () => {
  return (
    <Box color="#FFF" textAlign="left">
      <Heading fontFamily="Arimo" fontSize="55px">
        launch programs
      </Heading>
      <Heading
        fontFamily="Arimo"
        fontSize="55px"
        lineHeight="1.5"
        mt="20px"
        w="390px"
      >
        training for the year 2023
      </Heading>
      <Text mt="20px" ml="60px" w="470px">
        The Financial Academy launched the training programs for the year 2023
        to develop and develop the capabilities of human cadres in the financial
        sector
      </Text>
    </Box>
  );
};

export default HeadingText;
