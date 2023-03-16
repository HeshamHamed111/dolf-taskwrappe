import { Box, Flex, Image, Text } from "@chakra-ui/react";
import HeadingText from "../headingtext/HeadingText";
import Navbar from "../navbar/Navbar";
import Programs from "../programs/Programs";
import presntation from "../../assets/images/imgpresentation.png";
import "./intro.css";
import btn1 from "../../assets/images/btn1.svg";
import btn2 from "../../assets/images/btn2.svg";
import btn3 from "../../assets/images/btn3.svg";

const Intro = () => {
  return (
    <Box h={"90vh"} className={"header-image"}>
      <Box h="100px">
        <Navbar />
      </Box>
      <Box w="95%" margin="auto">
        <Flex mt="60px">
          <Box w="40%">
            <HeadingText />
          </Box>
          <Box w="32%" d="flex" alignItems="center">
            <Image
              src={presntation}
              w="350px"
              transform={"rotateY(180deg)"}
              ml="30px"
            />
          </Box>
          <Box w="25%">
            <Programs />
          </Box>
        </Flex>
        <Box>
          <Flex>
            <Box className="points-important certifiacte-color">
              <Box textAlign="center" mb="10px">
                <Image src={btn1} w="30px" />
              </Box>
              <Text color="#FFF" fontSize="18px" textAlign="center">
                Professional Certificates
              </Text>
            </Box>
            <Box mx="25px" className="points-important training-color">
              <Image src={btn2} w="40px" mb="10px" />
              <Text color="#FFF" fontSize="18px" textAlign="center">
                Training Advisor
              </Text>
            </Box>
            <Box className="points-important jadarat-color">
              <Image src={btn3} w="40px" mb="15px" />
              <Text color="#FFF" fontSize="18px" textAlign="center">
                Jadarat
              </Text>
            </Box>
          </Flex>
        </Box>
      </Box>
    </Box>
  );
};

export default Intro;
