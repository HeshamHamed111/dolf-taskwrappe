import {
  Box,
  Flex,
  Text,
  IconButton,
  Stack,
  Collapse,
  Icon,
  Link,
  Popover,
  PopoverTrigger,
  PopoverContent,
  useColorModeValue,
  useDisclosure,
  Image,
} from "@chakra-ui/react";
import {
  HamburgerIcon,
  CloseIcon,
  ChevronDownIcon,
  ChevronRightIcon,
} from "@chakra-ui/icons";
import Logo from "../../assets/images/logo/GreyScale3.svg";
import LogoDefault from "../../assets/images/logo-default.svg";

import ExtraNavbar from "./ExtraNavbar";
import { useState } from "react";
export default function Navbar() {
  const { isOpen, onToggle } = useDisclosure();
  const [colors, setColors] = useState(false);

  const changeColor = () => {
    if (window.scrollY >= 70) {
      setColors(true);
    } else {
      setColors(false);
    }
  };
  window.addEventListener("scroll", changeColor);
  return (
    <Box
      className={colors ? "navbar-with-bg" : "navbar-without-bg"}
      position="fixed"
      w="100%"
      zIndex="999"
    >
      <Flex
        color={useColorModeValue("gray.600", "white")}
        minH={"60px"}
        py={{ base: 2 }}
        px={{ base: 4 }}
        align={"center"}
      >
        <Flex
          flex={{ base: 1, md: "auto" }}
          ml={{ base: -2 }}
          display={{ base: "flex", md: "none" }}
        >
          <IconButton
            onClick={onToggle}
            icon={
              isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
            }
            variant={"ghost"}
            aria-label={"Toggle Navigation"}
          />
        </Flex>
        <Flex
          flex={{ base: 1 }}
          justify={{ base: "center", md: "start" }}
          alignItems="center"
        >
          <Image
            src={LogoDefault}
            alt={"Logo"}
            className={colors ? "logo-set" : "logo-height"}
            mx={2}
          />
          <Flex display={{ base: "none", md: "flex" }} ml={10}>
            <DesktopNav />
          </Flex>
          <ExtraNavbar />
        </Flex>
      </Flex>

      <Collapse in={isOpen} animateOpacity>
        <MobileNav />
      </Collapse>
    </Box>
  );
}

const DesktopNav = () => {
  const linkColor = useColorModeValue("#F1F1F1", "gray.200");
  const linkHoverColor = useColorModeValue("#3C80C2", "white");
  const popoverContentBgColor = useColorModeValue("#3C80C2", "gray.800");

  return (
    <Stack direction={"row"} spacing={20}>
      {NAV_ITEMS.map((navItem) => (
        <Box key={navItem.label}>
          <Popover trigger={"hover"} placement={"bottom-start"}>
            <PopoverTrigger>
              <Link
                p={2}
                href={navItem.href ?? "#"}
                fontSize={"sm"}
                fontWeight={500}
                color={linkColor}
                _hover={{
                  textDecoration: "none",
                  color: linkHoverColor,
                }}
              >
                {navItem.label}
              </Link>
            </PopoverTrigger>

            {navItem.children && (
              <PopoverContent
                border={0}
                boxShadow={"xl"}
                bg={popoverContentBgColor}
                p={4}
                rounded={"xl"}
                minW={"sm"}
              >
                <Stack>
                  {navItem.children.map((child) => (
                    <DesktopSubNav key={child.label} {...child} />
                  ))}
                </Stack>
              </PopoverContent>
            )}
          </Popover>
        </Box>
      ))}
    </Stack>
  );
};

const DesktopSubNav = ({ label, href, subLabel }) => {
  return (
    <Link
      href={href}
      role={"group"}
      display={"block"}
      color={"#FFF"}
      p={2}
      rounded={"md"}
      _hover={{ bg: useColorModeValue("#FFF", "gray.900") }}
    >
      <Stack direction={"row"} align={"center"}>
        <Box>
          <Text
            transition={"all .3s ease"}
            _groupHover={{ color: "#3C80C2" }}
            fontWeight={500}
          >
            {label}
          </Text>
          <Text fontSize={"sm"}>{subLabel}</Text>
        </Box>
        <Flex
          transition={"all .3s ease"}
          transform={"translateX(-10px)"}
          opacity={0}
          _groupHover={{ opacity: "100%", transform: "translateX(0)" }}
          justify={"flex-end"}
          align={"center"}
          flex={1}
        >
          <Icon color={"#3C80C2"} w={5} h={5} as={ChevronRightIcon} />
        </Flex>
      </Stack>
    </Link>
  );
};

const MobileNav = () => {
  return (
    <Stack
      bg={useColorModeValue("white", "gray.800")}
      p={4}
      display={{ md: "none" }}
    >
      {NAV_ITEMS.map((navItem) => (
        <MobileNavItem key={navItem.label} {...navItem} />
      ))}
    </Stack>
  );
};

const MobileNavItem = ({ label, children, href }) => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Stack spacing={4} onClick={children && onToggle}>
      <Flex
        py={2}
        as={Link}
        href={href ?? "#"}
        justify={"space-between"}
        align={"center"}
        _hover={{
          textDecoration: "none",
        }}
      >
        <Text
          fontWeight={600}
          color={useColorModeValue("gray.600", "gray.200")}
        >
          {label}
        </Text>
        {children && (
          <Icon
            as={ChevronDownIcon}
            transition={"all .25s ease-in-out"}
            transform={isOpen ? "rotate(180deg)" : ""}
            w={6}
            h={6}
          />
        )}
      </Flex>

      <Collapse in={isOpen} animateOpacity style={{ marginTop: "0!important" }}>
        <Stack
          mt={2}
          pl={4}
          borderLeft={1}
          borderStyle={"solid"}
          borderColor={useColorModeValue("gray.200", "gray.700")}
          align={"start"}
        >
          {children &&
            children.map((child) => (
              <Link key={child.label} py={2} href={child.href}>
                {child.label}
              </Link>
            ))}
        </Stack>
      </Collapse>
    </Stack>
  );
};

const NAV_ITEMS = [
  {
    label: "About",
    children: [
      {
        label: "About The Financial Academy",
        href: "#",
      },
      {
        label: "Board Of Trustees",
        href: "#",
      },
      {
        label: "The General Director Message",
        href: "#",
      },
      {
        label: "Strategic Direction",
        href: "#",
      },
      {
        label: "Organization Hierarchy",
        href: "#",
      },
    ],
  },
  {
    label: "Certificates",
    children: [
      {
        label: "Exams Overview",
        href: "#",
      },
      {
        label: "Exams Policies",
        href: "#",
      },
      {
        label: "Exams Centers",
        href: "#",
      },
      {
        label: "All Exams",
        href: "#",
      },
    ],
  },
  {
    label: "Training",
    children: [
      {
        label: "Training and Development Overview",
        href: "#",
      },
      {
        label: "Training and Development Policy",
        href: "#",
      },
      {
        label: "Training Programs",
        href: "#",
      },
    ],
    href: "#",
  },
  {
    label: "Events",
    children: [
      {
        label: "Webinars and Seminars Overview",
        href: "#",
      },
      {
        label: "Webinars and Seminars Types",
        href: "#",
      },
      {
        label: "Events",
        href: "#",
      },
    ],
    href: "#",
  },
  {
    label: "Jadarat",
    children: [
      {
        label: "Brief About Jadarat",
        href: "#",
      },
      {
        label: "Jadarat Dictionary",
        href: "#",
      },
      {
        label: "Concepts",
        href: "#",
      },
      {
        label: "Visual Materials",
        href: "#",
      },
      {
        label: "FAQ",
        href: "#",
      },
      {
        label: "Framework Structure",
        href: "#",
      },
      {
        label: "Career Path",
        href: "#",
      },
      {
        label: "Documents",
        href: "#",
      },
      {
        label: "Partners Development",
        href: "#",
      },
    ],
    href: "#",
  },
  {
    label: "Initiatives",
    children: [
      {
        label: "Financial Future Leaders Program",
        href: "#",
      },
      {
        label: "Professional Certification Support",
        href: "#",
      },
      {
        label: "Irtiqaa Initiative",
        href: "#",
      },
      {
        label: "Financial Knowledge Path",
        href: "#",
      },
    ],
    href: "#",
  },
  {
    label: "E-Services",
    children: [
      {
        label: "Certificate Verification",
        href: "#",
      },
      {
        label: "Get Certificate",
        href: "#",
      },
      {
        label: "Your Advisor",
        href: "#",
      },
    ],
    href: "#",
  },
];
