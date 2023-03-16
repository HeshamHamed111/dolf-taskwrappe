import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";
import { Swiper, SwiperSlide } from "swiper/react";
import train1 from "../../../assets/images/CapitalMarket02-01.jpg..jpg";
import train2 from "../../../assets/images/CapitalMarket03-01.jpg..jpg";
import train3 from "../../../assets/images/imgpresentation.png";
import train4 from "../../../assets/images/shutterstock_1654916974.jpg..jpg";
import train5 from "../../../assets/images/shutterstock_773578618.jpg..jpg";
import train6 from "../../../assets/images/shutterstock_726441562.jpg..jpg";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay } from "swiper";

import "./style.css";

// import required modules
import { Pagination } from "swiper";
const Training = () => {
  return (
    <Box mt="40px" className="train">
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
        modules={[Autoplay, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <Box className="flip-card">
            <Box className="flip-card-inner">
              <Box className="flip-card-front">
                <Box
                  bg="#1b1b1b"
                  opacity="0.4"
                  position="absolute"
                  top="0"
                  left="0"
                  w="100%"
                  h="100%"
                  borderRadius="25px"
                ></Box>
                <Image src={train1} alt="Avatar" w="300px" h="350px" />
                <Text
                  position="absolute"
                  zIndex="9999"
                  color="#FFFF"
                  bottom="70px"
                  left="20px"
                >
                  Advanced Claims (820)- ACII
                </Text>
                <ArrowRightAltIcon
                  style={{
                    position: "absolute",
                    bottom: "10px",
                    right: "10px",
                    color: "#FFF",
                    cursor: "pointer",
                  }}
                  fontSize="large"
                />
              </Box>
              <Box className="flip-card-back">
                <Heading fontSize="18px" pt="20px" mb="50px">
                  Planning and Innovation Skills
                </Heading>
                <Text fontSize="14px">
                  The Advanced Diploma in Insurance (ACII) is a professional
                  qualification providing an enhanced understanding of insurance
                  practice, both technical subject matter and overall
                  application skills, as well comprehensive assessment of market
                  knowledge and understanding. By obtaining your advanced
                  diploma
                </Text>
                <Flex
                  position="absolute"
                  bottom="20px"
                  right="20px"
                  justifyContent="center"
                  alignItems="center"
                >
                  <Text mr="15px">Details</Text>
                  <ArrowRightAltIcon
                    style={{
                      cursor: "pointer",
                    }}
                    fontSize="large"
                  />
                </Flex>
              </Box>
            </Box>
          </Box>
        </SwiperSlide>
        <SwiperSlide>
          <Box className="flip-card">
            <Box className="flip-card-inner">
              <Box className="flip-card-front">
                <Box
                  bg="#1b1b1b"
                  opacity="0.4"
                  position="absolute"
                  top="0"
                  left="0"
                  w="100%"
                  h="100%"
                  borderRadius="25px"
                ></Box>
                <Image src={train2} alt="Avatar" w="300px" h="350px" />
                <Text
                  position="absolute"
                  zIndex="9999"
                  color="#FFFF"
                  bottom="70px"
                  left="20px"
                >
                  Planning and Innovation Skills
                </Text>
                <ArrowRightAltIcon
                  style={{
                    position: "absolute",
                    bottom: "10px",
                    right: "10px",
                    color: "#FFF",
                    cursor: "pointer",
                  }}
                  fontSize="large"
                />
              </Box>
              <Box className="flip-card-back">
                <Heading fontSize="18px" pt="20px" mb="50px">
                  Planning and Innovation Skills
                </Heading>
                <Text fontSize="14px">
                  Innovative thinking and planning are among the most important
                  tasks in the business system. Innovation is an urgent
                  necessity for continuity and growth. This program focuses on
                  identifying the strengths, weaknesses
                </Text>
                <Flex
                  position="absolute"
                  bottom="20px"
                  right="20px"
                  justifyContent="center"
                  alignItems="center"
                >
                  <Text mr="15px">Details</Text>
                  <ArrowRightAltIcon
                    style={{
                      cursor: "pointer",
                    }}
                    fontSize="large"
                  />
                </Flex>
              </Box>
            </Box>
          </Box>
        </SwiperSlide>
        <SwiperSlide>
          <Box className="flip-card">
            <Box className="flip-card-inner">
              <Box className="flip-card-front">
                <Box
                  bg="#1b1b1b"
                  opacity="0.4"
                  position="absolute"
                  top="0"
                  left="0"
                  w="100%"
                  h="100%"
                  borderRadius="25px"
                ></Box>
                <Image src={train6} alt="Avatar" w="300px" h="350px" />
                <Text
                  position="absolute"
                  zIndex="9999"
                  color="#FFFF"
                  bottom="70px"
                  left="20px"
                >
                  Preparation Program for Professional Exam of Trader
                  (Registered Broker)
                </Text>
                <ArrowRightAltIcon
                  style={{
                    position: "absolute",
                    bottom: "10px",
                    right: "10px",
                    color: "#FFF",
                    cursor: "pointer",
                  }}
                  fontSize="large"
                />
              </Box>
              <Box className="flip-card-back">
                <Heading fontSize="18px" pt="20px" mb="50px">
                  Planning and Innovation Skills
                </Heading>
                <Text fontSize="14px">
                  his training program aims to prepare participants with the
                  knowledge and skills necessary to pass the test for the
                  certificate of the registered broker / trader, who is intended
                  to build the capacities of the employees of brokerage firms
                  who deal with the Tadawul system, and to ensure that all
                  employees have an advanced level of knowledge and skills that
                  qualifies them to perform their tasks efficiently and
                  effectively.
                </Text>
                <Flex
                  position="absolute"
                  bottom="20px"
                  right="20px"
                  justifyContent="center"
                  alignItems="center"
                >
                  <Text mr="15px">Details</Text>
                  <ArrowRightAltIcon
                    style={{
                      cursor: "pointer",
                    }}
                    fontSize="large"
                  />
                </Flex>
              </Box>
            </Box>
          </Box>
        </SwiperSlide>
        <SwiperSlide>
          <Box className="flip-card">
            <Box className="flip-card-inner">
              <Box className="flip-card-front">
                <Box
                  bg="#1b1b1b"
                  opacity="0.4"
                  position="absolute"
                  top="0"
                  left="0"
                  w="100%"
                  h="100%"
                  borderRadius="25px"
                ></Box>
                <Image src={train4} alt="Avatar" w="300px" h="350px" />
                <Text
                  position="absolute"
                  zIndex="9999"
                  color="#FFFF"
                  bottom="70px"
                  left="20px"
                >
                  Protection and Convenience for the Customer
                </Text>
                <ArrowRightAltIcon
                  style={{
                    position: "absolute",
                    bottom: "10px",
                    right: "10px",
                    color: "#FFF",
                    cursor: "pointer",
                  }}
                  fontSize="large"
                />
              </Box>
              <Box className="flip-card-back">
                <Heading fontSize="18px" pt="20px" mb="50px">
                  Protection and Convenience for the Customer
                </Heading>
                <Text fontSize="14px" h="200px" overflowX="scroll">
                  The Capital Market Authority has been keen on setting general
                  standards and obligations for financial institutions engaged
                  in securities activity aimed at ensuring that clients are
                  treated fairly and fairly, protecting them and managing the
                  risks of their investments in a safe manner. This training
                  program is designed to familiarize participants with the most
                  appropriate methods to suit and protect customers, and to
                  ensure that they receive fair treatment with transparency,
                  honesty and integrity, in addition to obtaining services and
                  products appropriate to their goals with ease and ease.
                </Text>
                <Flex
                  position="absolute"
                  bottom="20px"
                  right="20px"
                  justifyContent="center"
                  alignItems="center"
                >
                  <Text mr="15px">Details</Text>
                  <ArrowRightAltIcon
                    style={{
                      cursor: "pointer",
                    }}
                    fontSize="large"
                  />
                </Flex>
              </Box>
            </Box>
          </Box>
        </SwiperSlide>
        <SwiperSlide>
          <Box className="flip-card">
            <Box className="flip-card-inner">
              <Box className="flip-card-front">
                <Box
                  bg="#1b1b1b"
                  opacity="0.4"
                  position="absolute"
                  top="0"
                  left="0"
                  w="100%"
                  h="100%"
                  borderRadius="25px"
                ></Box>
                <Image src={train5} alt="Avatar" w="300px" h="350px" />
                <Text
                  position="absolute"
                  zIndex="9999"
                  color="#FFFF"
                  bottom="70px"
                  left="20px"
                >
                  Venture Capital and Investment in Start-ups
                </Text>
                <ArrowRightAltIcon
                  style={{
                    position: "absolute",
                    bottom: "10px",
                    right: "10px",
                    color: "#FFF",
                    cursor: "pointer",
                  }}
                  fontSize="large"
                />
              </Box>
              <Box className="flip-card-back">
                <Heading fontSize="18px" pt="20px" mb="50px">
                  Venture Capital and Investment in Start-ups
                </Heading>
                <Text fontSize="14px" h="200px" overflowX="scroll">
                  Venture capital plays an important role in bridging financing
                  gaps and stimulating investment in emerging companies and
                  small and medium enterprises in their initial, early and
                  advanced stages of growth, which helps the rapid growth of
                  these companies in preparation for their launch in the
                  financial markets. This program is designed to clarify the
                  role of venture capital and its global and local applications
                  as it supports the financial market or the capital market to
                  achieve faster growth, and guide startups towards implementing
                  an attractive business model for venture capital.
                </Text>
                <Flex
                  position="absolute"
                  bottom="20px"
                  right="20px"
                  justifyContent="center"
                  alignItems="center"
                >
                  <Text mr="15px">Details</Text>
                  <ArrowRightAltIcon
                    style={{
                      cursor: "pointer",
                    }}
                    fontSize="large"
                  />
                </Flex>
              </Box>
            </Box>
          </Box>
        </SwiperSlide>
        <SwiperSlide>
          <Box className="flip-card">
            <Box className="flip-card-inner">
              <Box className="flip-card-front">
                <Box
                  bg="#1b1b1b"
                  opacity="0.4"
                  position="absolute"
                  top="0"
                  left="0"
                  w="100%"
                  h="100%"
                  borderRadius="25px"
                ></Box>
                <Image src={train6} alt="Avatar" w="300px" h="350px" />
                <Text
                  position="absolute"
                  zIndex="9999"
                  color="#FFFF"
                  bottom="70px"
                  left="20px"
                >
                  Protection and Convenience for the Customer
                </Text>
                <ArrowRightAltIcon
                  style={{
                    position: "absolute",
                    bottom: "10px",
                    right: "10px",
                    color: "#FFF",
                    cursor: "pointer",
                  }}
                  fontSize="large"
                />
              </Box>
              <Box className="flip-card-back">
                <Heading fontSize="18px" pt="20px" mb="50px">
                  Protection and Convenience for the Customer
                </Heading>
                <Text fontSize="14px">
                  Innovative thinking and planning are among the most important
                  tasks in the business system. Innovation is an urgent
                  necessity for continuity and growth. This program focuses on
                  identifying the strengths, weaknesses
                </Text>
                <Flex
                  position="absolute"
                  bottom="20px"
                  right="20px"
                  justifyContent="center"
                  alignItems="center"
                >
                  <Text mr="15px">Details</Text>
                  <ArrowRightAltIcon
                    style={{
                      cursor: "pointer",
                    }}
                    fontSize="large"
                  />
                </Flex>
              </Box>
            </Box>
          </Box>
        </SwiperSlide>
        <SwiperSlide>
          <Box className="flip-card">
            <Box className="flip-card-inner">
              <Box className="flip-card-front">
                <Box
                  bg="#1b1b1b"
                  opacity="0.4"
                  position="absolute"
                  top="0"
                  left="0"
                  w="100%"
                  h="100%"
                  borderRadius="25px"
                ></Box>
                <Image src={train1} alt="Avatar" w="300px" h="350px" />
                <Text
                  position="absolute"
                  zIndex="9999"
                  color="#FFFF"
                  bottom="70px"
                  left="20px"
                >
                  Planning and Innovation Skills
                </Text>
                <ArrowRightAltIcon
                  style={{
                    position: "absolute",
                    bottom: "10px",
                    right: "10px",
                    color: "#FFF",
                    cursor: "pointer",
                  }}
                  fontSize="large"
                />
              </Box>
              <Box className="flip-card-back">
                <Heading fontSize="18px" pt="20px" mb="50px">
                  Planning and Innovation Skills
                </Heading>
                <Text fontSize="14px">
                  Innovative thinking and planning are among the most important
                  tasks in the business system. Innovation is an urgent
                  necessity for continuity and growth. This program focuses on
                  identifying the strengths, weaknesses
                </Text>
                <Flex
                  position="absolute"
                  bottom="20px"
                  right="20px"
                  justifyContent="center"
                  alignItems="center"
                >
                  <Text mr="15px">Details</Text>
                  <ArrowRightAltIcon
                    style={{
                      cursor: "pointer",
                    }}
                    fontSize="large"
                  />
                </Flex>
              </Box>
            </Box>
          </Box>
        </SwiperSlide>
        <SwiperSlide>
          <Box className="flip-card">
            <Box className="flip-card-inner">
              <Box className="flip-card-front">
                <Box
                  bg="#1b1b1b"
                  opacity="0.4"
                  position="absolute"
                  top="0"
                  left="0"
                  w="100%"
                  h="100%"
                  borderRadius="25px"
                ></Box>
                <Image src={train2} alt="Avatar" w="300px" h="350px" />
                <Text
                  position="absolute"
                  zIndex="9999"
                  color="#FFFF"
                  bottom="70px"
                  left="20px"
                >
                  Planning and Innovation Skills
                </Text>
                <ArrowRightAltIcon
                  style={{
                    position: "absolute",
                    bottom: "10px",
                    right: "10px",
                    color: "#FFF",
                    cursor: "pointer",
                  }}
                  fontSize="large"
                />
              </Box>
              <Box className="flip-card-back">
                <Heading fontSize="18px" pt="20px" mb="50px">
                  Planning and Innovation Skills
                </Heading>
                <Text fontSize="14px">
                  Innovative thinking and planning are among the most important
                  tasks in the business system. Innovation is an urgent
                  necessity for continuity and growth. This program focuses on
                  identifying the strengths, weaknesses
                </Text>
                <Flex
                  position="absolute"
                  bottom="20px"
                  right="20px"
                  justifyContent="center"
                  alignItems="center"
                >
                  <Text mr="15px">Details</Text>
                  <ArrowRightAltIcon
                    style={{
                      cursor: "pointer",
                    }}
                    fontSize="large"
                  />
                </Flex>
              </Box>
            </Box>
          </Box>
        </SwiperSlide>
      </Swiper>
    </Box>
  );
};

export default Training;
