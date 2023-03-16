import {
  Box,
  Button,
  Flex,
  FormControl,
  Image,
  Input,
  List,
  ListItem,
  Text,
  UnorderedList,
} from "@chakra-ui/react";
import footerscb from "../../assets/images/footer-scb.svg";
import footerLogo from "../../assets/images/footer-logo.svg";
import visionLogo from "../../assets/images/vision-logo-white.svg";
import financial from "../../assets/images/fininacialSectorAR.png";
import footerCMA from "../../assets/images/footer-cma.svg";
import RssFeedIcon from "@mui/icons-material/RssFeed";
import YouTubeIcon from "@mui/icons-material/YouTube";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
const Footer = () => {
  return (
    <Box className="footer" px="20px">
      <Text textAlign="center" fontSize="20px" fontWeight="700" mb="20px">
        Partners Development
      </Text>
      <Flex justifyContent="space-between" alignItems="center">
        <Flex alignItems="flex-end">
          <Box mr="20px" pr="10px" className="logoLine">
            <Image src={footerLogo} />
          </Box>
          <Box>
            <Image src={visionLogo} />
          </Box>
        </Flex>
        <Flex alignItems="center">
          <Box>
            <Image src={footerscb} />
          </Box>
          <Box mx="20px">
            <Image src={financial} />
          </Box>
          <Box>
            <Image src={footerCMA} />
          </Box>
        </Flex>
      </Flex>

      <Box textAlign="center" mt="70px">
        <Text fontSize="25px">Subscribe to our newsletter</Text>
        <Text
          textAlign="center"
          fontSize="13px"
          w="450px"
          margin="auto"
          mt="15px"
        >
          Stay informed by receiving our latest newsletters including all
          information, events and news related to the Financial Academy
        </Text>
      </Box>
      <Box mt="30px">
        <Flex justifyContent="center">
          <Input
            type="email"
            w="350px"
            borderRadius="20px"
            placeholder="Enter Your Email"
          />
          <Button color="#000" ml="-103px" borderRadius="20px">
            Subscribe
          </Button>
        </Flex>
      </Box>
      <Box>
        <List display="flex" justifyContent="center" mt="20px">
          <ListItem cursor="pointer" _hover={{ color: "#ffcc00" }}>
            <Box>
              <RssFeedIcon />
            </Box>
          </ListItem>
          <ListItem mx="5px" cursor="pointer" _hover={{ color: "#F00" }}>
            <Box>
              <YouTubeIcon />
            </Box>
          </ListItem>
          <ListItem mx="5px" cursor="pointer" _hover={{ color: "#0E76A8" }}>
            <Box>
              <LinkedInIcon />
            </Box>
          </ListItem>
          <ListItem cursor="pointer" _hover={{ color: "#00ACEE" }}>
            <Box>
              <TwitterIcon />
            </Box>
          </ListItem>
        </List>
      </Box>

      <Box mt="50px">
        <List
          display="flex"
          justifyContent="space-around"
          mt="20px"
          w="50%"
          mx="auto"
        >
          <ListItem cursor="pointer" _hover={{ color: "#00ACEE" }}>
            <Text>Privacy</Text>
          </ListItem>
          <ListItem mx="5px" cursor="pointer" _hover={{ color: "#00ACEE" }}>
            <Box>
              <Text>Site Map</Text>
            </Box>
          </ListItem>
          <ListItem mx="5px" cursor="pointer" _hover={{ color: "#00ACEE" }}>
            <Text>E-mail</Text>
          </ListItem>
          <ListItem cursor="pointer" _hover={{ color: "#00ACEE" }}>
            <Text>Exam Centers</Text>
          </ListItem>
          <ListItem cursor="pointer" _hover={{ color: "#00ACEE" }}>
            <Text>Careers</Text>
          </ListItem>
          <ListItem cursor="pointer" _hover={{ color: "#00ACEE" }}>
            <Text>FAQ</Text>
          </ListItem>
        </List>
      </Box>
      <Box mt="20px" mb="5px" textAlign="center">
        <Text>The Financial Academy - All Rights Reserved © 2023</Text>
      </Box>
    </Box>
  );
};

export default Footer;
