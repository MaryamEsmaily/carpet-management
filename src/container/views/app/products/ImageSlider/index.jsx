import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Thumbs } from "swiper";
import { Box, Flex, Image } from "@chakra-ui/react";
import "swiper/css";
import "swiper/css/thumbs";
import firstProduct from "assets/images/product-1.avif";

const ImageSlider = ({ Images }) => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <Flex direction="column" justifyContent="center" align="center">
      <Swiper
        loop={true}
        thumbs={{
          swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
        }}
        modules={[Thumbs]}
        style={{ width: "400px" }}
        centeredSlides={false}
        spaceBetween={8}
      >
        <SwiperSlide>
          <Image
            src={firstProduct}
            width={400}
            height={400}
            objectFit="cover"
            borderRadius={18}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="https://swiperjs.com/demos/images/nature-1.jpg"
            width={400}
            height={400}
            objectFit="cover"
            borderRadius={10}
          />
        </SwiperSlide>
      </Swiper>
      <Box mt={4}>
        <Swiper
          onSwiper={setThumbsSwiper}
          loop={false}
          slidesPerView={5}
          spaceBetween={10}
          modules={[Thumbs]}
          style={{
            width: "400px",
          }}
          centeredSlidesBounds={true}
        >
          <SwiperSlide>
            <Image
              src={firstProduct}
              width={80}
              height={70}
              objectFit="cover"
              borderRadius={10}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src="https://swiperjs.com/demos/images/nature-1.jpg"
              width={80}
              height={70}
              objectFit="cover"
              borderRadius={10}
            />
          </SwiperSlide>
        </Swiper>
      </Box>
    </Flex>
  );
};

export default ImageSlider;
