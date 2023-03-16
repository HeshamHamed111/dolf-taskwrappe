import { Box, Heading, Image, Text, textDecoration } from "@chakra-ui/react";
import { Swiper, SwiperSlide } from "swiper/react";
import program1 from "../../assets/images/programs/program1.jpg";
import program2 from "../../assets/images/programs/program2.jpg";
import program3 from "../../assets/images/programs/program3.jpg";
import program4 from "../../assets/images/programs/program4.jpg";
import program5 from "../../assets/images/programs/program5.jpg";
import program6 from "../../assets/images/programs/program6.jpeg";
import program7 from "../../assets/images/programs/program7.jpg";
import program8 from "../../assets/images/programs/program8.jpg";
import program9 from "../../assets/images/programs/program9.jpg";
import program10 from "../../assets/images/programs/program10.jpg";
import program11 from "../../assets/images/programs/program11.jpg";
import program12 from "../../assets/images/programs/program12.jpg";
import program13 from "../../assets/images/programs/program13.jpg";
import program14 from "../../assets/images/programs/program14.jpg";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";

import "./programs.modules.css";
import { EffectCards, Autoplay } from "swiper";

const Programs = () => {
  return (
    <Box className="rotate-cards">
      <Heading color="#c2deff" opacity="0.8" fontSize="22px" mb="15px">
        Programs For The Current Month
      </Heading>
      <Swiper
        effect={"cards"}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        grabCursor={true}
        modules={[Autoplay, EffectCards]}
        className="mySwiper"
      >
        <SwiperSlide>
          <Box>
            <Image src={program1} />
            <Heading
              fontSize="20px"
              fontFamily="Arimo"
              mt="20px"
              textAlign="left"
              px="10px"
            >
              Commercial Mortgage Law
            </Heading>
            <Text
              fontSize="12px"
              cursor="pointer"
              textDecoration={"underline"}
              position="absolute"
              bottom="20px"
              right="18px"
            >
              Details
            </Text>
          </Box>
        </SwiperSlide>

        <SwiperSlide>
          <Box>
            <Image src={program2} />
            <Heading
              fontSize="20px"
              fontFamily="Arimo"
              mt="20px"
              textAlign="left"
              px="10px"
            >
              Corporate Culture and Business Ethics– The Tone at the Top
            </Heading>
            <Text
              fontSize="12px"
              cursor="pointer"
              textDecoration={"underline"}
              position="absolute"
              bottom="20px"
              right="18px"
            >
              Details
            </Text>
          </Box>
        </SwiperSlide>
        <SwiperSlide>
          <Box>
            <Image src={program3} />
            <Heading
              fontSize="20px"
              fontFamily="Arimo"
              mt="20px"
              textAlign="left"
              px="10px"
            >
              Customer Service & Insurance Market Code of Conduct
            </Heading>
            <Text
              fontSize="12px"
              cursor="pointer"
              textDecoration={"underline"}
              position="absolute"
              bottom="20px"
              right="18px"
            >
              Details
            </Text>
          </Box>
        </SwiperSlide>
        <SwiperSlide>
          <Box>
            <Image src={program4} />
            <Heading
              fontSize="20px"
              fontFamily="Arimo"
              mt="20px"
              textAlign="left"
              px="10px"
            >
              Derivative Contracts and its Governance and Regulations
            </Heading>
            <Text
              fontSize="12px"
              cursor="pointer"
              textDecoration={"underline"}
              position="absolute"
              bottom="20px"
              right="18px"
            >
              Details
            </Text>
          </Box>
        </SwiperSlide>
        <SwiperSlide>
          <Box>
            <Image src={program5} />
            <Heading
              fontSize="20px"
              fontFamily="Arimo"
              mt="20px"
              textAlign="left"
              px="10px"
            >
              Derivatives
            </Heading>
            <Text
              fontSize="12px"
              cursor="pointer"
              textDecoration={"underline"}
              position="absolute"
              bottom="20px"
              right="18px"
            >
              Details
            </Text>
          </Box>
        </SwiperSlide>
        <SwiperSlide>
          <Box>
            <Image src={program6} />
            <Heading
              fontSize="20px"
              fontFamily="Arimo"
              mt="20px"
              textAlign="left"
              px="10px"
            >
              Effective Communication Skills
            </Heading>
            <Text
              fontSize="12px"
              cursor="pointer"
              textDecoration={"underline"}
              position="absolute"
              bottom="20px"
              right="18px"
            >
              Details
            </Text>
          </Box>
        </SwiperSlide>
        <SwiperSlide>
          <Box>
            <Image src={program7} />
            <Heading
              fontSize="20px"
              fontFamily="Arimo"
              mt="20px"
              textAlign="left"
              px="10px"
            >
              Insurance Business and Finance (M92)- Dip. CII
            </Heading>
            <Text
              fontSize="12px"
              cursor="pointer"
              textDecoration={"underline"}
              position="absolute"
              bottom="20px"
              right="18px"
            >
              Details
            </Text>
          </Box>
        </SwiperSlide>
        <SwiperSlide>
          <Box>
            <Image src={program8} />
            <Heading
              fontSize="20px"
              fontFamily="Arimo"
              mt="20px"
              textAlign="left"
              px="10px"
            >
              Investing in Funds
            </Heading>
            <Text
              fontSize="12px"
              cursor="pointer"
              textDecoration={"underline"}
              position="absolute"
              bottom="20px"
              right="18px"
            >
              Details
            </Text>
          </Box>
        </SwiperSlide>
        <SwiperSlide>
          <Box>
            <Image src={program9} />
            <Heading
              fontSize="20px"
              fontFamily="Arimo"
              mt="20px"
              textAlign="left"
              px="10px"
            >
              Wealth Management and Financial Advice
            </Heading>
            <Text
              fontSize="12px"
              cursor="pointer"
              textDecoration={"underline"}
              position="absolute"
              bottom="20px"
              right="18px"
            >
              Details
            </Text>
          </Box>
        </SwiperSlide>
        <SwiperSlide>
          <Box>
            <Image src={program10} />
            <Heading
              fontSize="20px"
              fontFamily="Arimo"
              mt="20px"
              textAlign="left"
              px="10px"
            >
              Effective Communication Skills
            </Heading>
            <Text
              fontSize="12px"
              cursor="pointer"
              textDecoration={"underline"}
              position="absolute"
              bottom="20px"
              right="18px"
            >
              Details
            </Text>
          </Box>
        </SwiperSlide>
        <SwiperSlide>
          <Box>
            <Image src={program11} />
            <Heading
              fontSize="20px"
              fontFamily="Arimo"
              mt="20px"
              textAlign="left"
              px="10px"
            >
              Presentation Skills
            </Heading>
            <Text
              fontSize="12px"
              cursor="pointer"
              textDecoration={"underline"}
              position="absolute"
              bottom="20px"
              right="18px"
            >
              Details
            </Text>
          </Box>
        </SwiperSlide>
        <SwiperSlide>
          <Box>
            <Image src={program12} />
            <Heading
              fontSize="20px"
              fontFamily="Arimo"
              mt="20px"
              textAlign="left"
              px="10px"
            >
              Wealth Management and Financial Advice
            </Heading>
            <Text
              fontSize="12px"
              cursor="pointer"
              textDecoration={"underline"}
              position="absolute"
              bottom="20px"
              right="18px"
            >
              Details
            </Text>
          </Box>
        </SwiperSlide>
        <SwiperSlide>
          <Box>
            <Image src={program13} />
            <Heading
              fontSize="20px"
              fontFamily="Arimo"
              mt="20px"
              textAlign="left"
              px="10px"
            >
              Planning and Innovation Skills
            </Heading>
            <Text
              fontSize="12px"
              cursor="pointer"
              textDecoration={"underline"}
              position="absolute"
              bottom="20px"
              right="18px"
            >
              Details
            </Text>
          </Box>
        </SwiperSlide>
        <SwiperSlide>
          <Box>
            <Image src={program14} />
            <Heading
              fontSize="20px"
              fontFamily="Arimo"
              mt="20px"
              textAlign="left"
              px="10px"
            >
              Anti-Fraud in Insurance
            </Heading>
            <Text
              fontSize="12px"
              cursor="pointer"
              textDecoration={"underline"}
              position="absolute"
              bottom="20px"
              right="18px"
            >
              Details
            </Text>
          </Box>
        </SwiperSlide>
      </Swiper>
    </Box>
  );
};
export default Programs;
