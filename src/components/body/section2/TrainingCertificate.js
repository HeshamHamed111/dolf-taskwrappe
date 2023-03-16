import { Box, Flex, Text } from "@chakra-ui/react";
import { useState } from "react";
import Certificate from "./Certificate";
import Training from "./Training";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";

const TrainingCertificate = () => {
  const [active, setActive] = useState("training");
  return (
    <Box bg="#f4f4f4" py="30px">
      <Flex fontSize="23px" ml="30px" mb="20px">
        <Box
          boxShadow={active === "training" ? "2px 2px 3px #3C80C2" : "none"}
          cursor="pointer"
          p="10px"
          borderRadius="10px"
        >
          <Text
            onClick={() => setActive("training")}
            color={active === "training" ? "#3C80C2" : "#CCC"}
          >
            Training Programs
          </Text>
        </Box>
        <Box
          p="10px"
          borderRadius="10px"
          ml="20px"
          boxShadow={active === "certificate" ? "2px 2px 3px #3C80C2" : "none"}
          cursor="pointer"
        >
          <Text
            onClick={() => setActive("certificate")}
            color={active === "certificate" ? "#3C80C2" : "#CCC"}
          >
            Professional Certificates
          </Text>
        </Box>
      </Flex>
      {active === "training" ? (
        <Box>
          <Training />
        </Box>
      ) : (
        <Box>
          <Certificate />
        </Box>
      )}
      <Box>
        <Flex
          justifyContent={"flex-end"}
          mr="100px"
          mt="30px"
          color="#2980b9"
          alignItems="center"
          fontSize="18px"
        >
          <Text cursor="pointer">More</Text>
          <ArrowRightAltIcon
            style={{
              cursor: "pointer",
            }}
            fontSize="large"
          />
        </Flex>
      </Box>
    </Box>
  );
};

export default TrainingCertificate;
