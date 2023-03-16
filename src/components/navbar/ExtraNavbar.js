import { Box, Center, Divider, Flex, Link, Stack } from "@chakra-ui/react";
import LoginIcon from "@mui/icons-material/Login";
import SearchIcon from "@mui/icons-material/Search";
import AccessibilityNewIcon from "@mui/icons-material/AccessibilityNew";
const ExtraNavbar = () => {
  return (
    <Stack
      flex={{ base: 1, md: 0 }}
      justify={"flex-end"}
      align={"center"}
      direction={"row"}
      ml={40}
    >
      <Box borderRightColor={"#cfcfcf"} borderRightWidth="1px" pr={3}>
        <SearchIcon size="large" style={{ cursor: "pointer" }} />
      </Box>
      <Box
        borderRightColor={"#cfcfcf"}
        borderRightWidth="1px"
        pr={3}
        marginStart={3}
      >
        <LoginIcon size="large" style={{ cursor: "pointer" }} />
      </Box>
      <Box
        borderRightColor={"#cfcfcf"}
        borderRightWidth="1px"
        pr={3}
        marginStart={3}
      >
        <Link
          p={2}
          href={"#"}
          fontSize={"sm"}
          fontWeight={500}
          color={"#F1F1F1"}
          _hover={{
            textDecoration: "none",
            color: "#3C80C2",
          }}
        >
          Contact
        </Link>
      </Box>
      <Box>
        <AccessibilityNewIcon size="large" style={{ cursor: "pointer" }} />
      </Box>
    </Stack>
  );
};

export default ExtraNavbar;
