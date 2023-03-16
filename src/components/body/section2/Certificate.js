import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay } from "swiper";
import DvrIcon from "@mui/icons-material/Dvr";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";

const Certificate = () => {
  return (
    <Box className="cert" w="92%" m="auto">
      <Swiper
        slidesPerView={1}
        spaceBetween={40}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 50,
          },
          //   1324: {
          //     slidesPerView: 6,
          //     spaceBetween: 60,
          //   },
        }}
        modules={[Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          <Box
            bg="#FFF"
            p="15px"
            pb="65px"
            position="relative"
            box-shadow="0 0 20px rgba(0,0,0,.07)"
            borderRadius="18px"
            className="hoverCert"
          >
            <Box>
              <DvrIcon />
            </Box>
            <Box>
              <Heading
                fontSize="23px"
                lineHeight="1.7"
                mb="15px"
                cursor="pointer"
                _hover={{ color: "#2980b9" }}
              >
                Award in Customer Service in Insurance (W04) - CII
              </Heading>
              <Text>
                This unit prepares you for a career in this international
                industry. It 'sets the scene' by introducing the concept of risk
                and how it is managed, as well as the different categories of
                risk. It also explains how insurance acts as a risk transfer
                mechanism and introduces the main classes of insurance.{" "}
              </Text>
            </Box>
            <Flex
              position="absolute"
              bottom="10px"
              right="5px"
              justifyContent="center"
              alignItems="center"
              className="groundCert"
            >
              <Text mr="7px">Details</Text>
              <ArrowRightAltIcon
                style={{
                  cursor: "pointer",
                }}
                fontSize="large"
              />
            </Flex>
          </Box>
        </SwiperSlide>
        <SwiperSlide>
          <Box
            bg="#FFF"
            p="15px"
            pb="65px"
            position="relative"
            box-shadow="0 0 20px rgba(0,0,0,.07)"
            borderRadius="18px"
            className="hoverCert"
          >
            <Box>
              <DvrIcon />
            </Box>
            <Box>
              <Heading
                fontSize="23px"
                lineHeight="1.7"
                mb="15px"
                cursor="pointer"
                _hover={{ color: "#2980b9" }}
              >
                Award in Customer Service in Insurance (W04) - CII
              </Heading>
              <Text>
                This unit prepares you for a career in this international
                industry. It 'sets the scene' by introducing the concept of risk
                and how it is managed, as well as the different categories of
                risk. It also explains how insurance acts as a risk transfer
                mechanism and introduces the main classes of insurance.{" "}
              </Text>
            </Box>
            <Flex
              position="absolute"
              bottom="10px"
              right="5px"
              justifyContent="center"
              alignItems="center"
              className="groundCert"
            >
              <Text mr="7px">Details</Text>
              <ArrowRightAltIcon
                style={{
                  cursor: "pointer",
                }}
                fontSize="large"
              />
            </Flex>
          </Box>
        </SwiperSlide>
        <SwiperSlide>
          <Box
            bg="#FFF"
            p="15px"
            pb="65px"
            position="relative"
            box-shadow="0 0 20px rgba(0,0,0,.07)"
            borderRadius="18px"
            className="hoverCert"
          >
            <Box>
              <DvrIcon />
            </Box>
            <Box>
              <Heading
                fontSize="23px"
                lineHeight="1.7"
                mb="15px"
                cursor="pointer"
                _hover={{ color: "#2980b9" }}
              >
                Award in Customer Service in Insurance (W04) - CII
              </Heading>
              <Text>
                This unit prepares you for a career in this international
                industry. It 'sets the scene' by introducing the concept of risk
                and how it is managed, as well as the different categories of
                risk. It also explains how insurance acts as a risk transfer
                mechanism and introduces the main classes of insurance.{" "}
              </Text>
            </Box>
            <Flex
              position="absolute"
              bottom="10px"
              right="5px"
              justifyContent="center"
              alignItems="center"
              className="groundCert"
            >
              <Text mr="7px">Details</Text>
              <ArrowRightAltIcon
                style={{
                  cursor: "pointer",
                }}
                fontSize="large"
              />
            </Flex>
          </Box>
        </SwiperSlide>
        <SwiperSlide>
          <Box
            bg="#FFF"
            p="15px"
            pb="65px"
            position="relative"
            box-shadow="0 0 20px rgba(0,0,0,.07)"
            borderRadius="18px"
            className="hoverCert"
          >
            <Box>
              <DvrIcon />
            </Box>
            <Box>
              <Heading
                fontSize="23px"
                lineHeight="1.7"
                mb="15px"
                cursor="pointer"
                _hover={{ color: "#2980b9" }}
              >
                Award in Customer Service in Insurance (W04) - CII
              </Heading>
              <Text>
                This unit prepares you for a career in this international
                industry. It 'sets the scene' by introducing the concept of risk
                and how it is managed, as well as the different categories of
                risk. It also explains how insurance acts as a risk transfer
                mechanism and introduces the main classes of insurance.{" "}
              </Text>
            </Box>
            <Flex
              position="absolute"
              bottom="10px"
              right="5px"
              justifyContent="center"
              alignItems="center"
              className="groundCert"
            >
              <Text mr="7px">Details</Text>
              <ArrowRightAltIcon
                style={{
                  cursor: "pointer",
                }}
                fontSize="large"
              />
            </Flex>
          </Box>
        </SwiperSlide>
        <SwiperSlide>
          <Box
            bg="#FFF"
            p="15px"
            pb="65px"
            position="relative"
            box-shadow="0 0 20px rgba(0,0,0,.07)"
            borderRadius="18px"
            className="hoverCert"
          >
            <Box>
              <DvrIcon />
            </Box>
            <Box>
              <Heading
                fontSize="23px"
                lineHeight="1.7"
                mb="15px"
                cursor="pointer"
                _hover={{ color: "#2980b9" }}
              >
                Award in Customer Service in Insurance (W04) - CII
              </Heading>
              <Text>
                This unit prepares you for a career in this international
                industry. It 'sets the scene' by introducing the concept of risk
                and how it is managed, as well as the different categories of
                risk. It also explains how insurance acts as a risk transfer
                mechanism and introduces the main classes of insurance.{" "}
              </Text>
            </Box>
            <Flex
              position="absolute"
              bottom="10px"
              right="5px"
              justifyContent="center"
              alignItems="center"
              className="groundCert"
            >
              <Text mr="7px">Details</Text>
              <ArrowRightAltIcon
                style={{
                  cursor: "pointer",
                }}
                fontSize="large"
              />
            </Flex>
          </Box>
        </SwiperSlide>
        <SwiperSlide>
          <Box
            bg="#FFF"
            p="15px"
            pb="65px"
            position="relative"
            box-shadow="0 0 20px rgba(0,0,0,.07)"
            borderRadius="18px"
            className="hoverCert"
          >
            <Box>
              <DvrIcon />
            </Box>
            <Box>
              <Heading
                fontSize="23px"
                lineHeight="1.7"
                mb="15px"
                cursor="pointer"
                _hover={{ color: "#2980b9" }}
              >
                Award in Customer Service in Insurance (W04) - CII
              </Heading>
              <Text>
                This unit prepares you for a career in this international
                industry. It 'sets the scene' by introducing the concept of risk
                and how it is managed, as well as the different categories of
                risk. It also explains how insurance acts as a risk transfer
                mechanism and introduces the main classes of insurance.{" "}
              </Text>
            </Box>
            <Flex
              position="absolute"
              bottom="10px"
              right="5px"
              justifyContent="center"
              alignItems="center"
              className="groundCert"
            >
              <Text mr="7px">Details</Text>
              <ArrowRightAltIcon
                style={{
                  cursor: "pointer",
                }}
                fontSize="large"
              />
            </Flex>
          </Box>
        </SwiperSlide>
        <SwiperSlide>
          <Box
            bg="#FFF"
            p="15px"
            pb="65px"
            position="relative"
            box-shadow="0 0 20px rgba(0,0,0,.07)"
            borderRadius="18px"
            className="hoverCert"
          >
            <Box>
              <DvrIcon />
            </Box>
            <Box>
              <Heading
                fontSize="23px"
                lineHeight="1.7"
                mb="15px"
                cursor="pointer"
                _hover={{ color: "#2980b9" }}
              >
                Award in Customer Service in Insurance (W04) - CII
              </Heading>
              <Text>
                This unit prepares you for a career in this international
                industry. It 'sets the scene' by introducing the concept of risk
                and how it is managed, as well as the different categories of
                risk. It also explains how insurance acts as a risk transfer
                mechanism and introduces the main classes of insurance.{" "}
              </Text>
            </Box>
            <Flex
              position="absolute"
              bottom="10px"
              right="5px"
              justifyContent="center"
              alignItems="center"
              className="groundCert"
            >
              <Text mr="7px">Details</Text>
              <ArrowRightAltIcon
                style={{
                  cursor: "pointer",
                }}
                fontSize="large"
              />
            </Flex>
          </Box>
        </SwiperSlide>
        <SwiperSlide>
          <Box
            bg="#FFF"
            p="15px"
            pb="65px"
            position="relative"
            box-shadow="0 0 20px rgba(0,0,0,.07)"
            borderRadius="18px"
            className="hoverCert"
          >
            <Box>
              <DvrIcon />
            </Box>
            <Box>
              <Heading
                fontSize="23px"
                lineHeight="1.7"
                mb="15px"
                cursor="pointer"
                _hover={{ color: "#2980b9" }}
              >
                Award in Customer Service in Insurance (W04) - CII
              </Heading>
              <Text>
                This unit prepares you for a career in this international
                industry. It 'sets the scene' by introducing the concept of risk
                and how it is managed, as well as the different categories of
                risk. It also explains how insurance acts as a risk transfer
                mechanism and introduces the main classes of insurance.{" "}
              </Text>
            </Box>
            <Flex
              position="absolute"
              bottom="10px"
              right="5px"
              justifyContent="center"
              alignItems="center"
              className="groundCert"
            >
              <Text mr="7px">Details</Text>
              <ArrowRightAltIcon
                style={{
                  cursor: "pointer",
                }}
                fontSize="large"
              />
            </Flex>
          </Box>
        </SwiperSlide>
      </Swiper>
    </Box>
  );
};

export default Certificate;
