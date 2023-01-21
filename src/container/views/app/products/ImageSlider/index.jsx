import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Thumbs } from "swiper";
import { Box, Flex, Image } from "@chakra-ui/react";
import "swiper/css";
import "swiper/css/thumbs";
import firstProduct from "assets/images/product-1.avif";
import secondProduct from "assets/images/product-2.avif";
import thirdProduct from "assets/images/product-3.avif";
import forthProduct from "assets/images/product-4.avif";

const ImageSlider = ({ Images }) => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <Flex direction="column" justifyContent="center">
      <Swiper
        loop={true}
        thumbs={{
          swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
        }}
        style={{ width: "100%" }}
        modules={[Thumbs]}
        centeredSlides={false}
        spaceBetween={8}
      >
        <SwiperSlide>
          <Image
            src={firstProduct}
            width="100%"
            height={400}
            objectFit="cover"
            borderRadius={18}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src={secondProduct}
            width="100%"
            height={400}
            objectFit="cover"
            borderRadius={18}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src={thirdProduct}
            width="100%"
            height={400}
            objectFit="cover"
            borderRadius={18}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src={forthProduct}
            width="100%"
            height={400}
            objectFit="cover"
            borderRadius={18}
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
          centeredSlidesBounds={true}
        >
          <SwiperSlide>
            <Image
              src={firstProduct}
              width="80px"
              height="80px"
              objectFit="cover"
              borderRadius={10}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src={secondProduct}
              width="80px"
              height="80px"
              objectFit="cover"
              borderRadius={10}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src={thirdProduct}
              width="80px"
              height="80px"
              objectFit="cover"
              borderRadius={10}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src={forthProduct}
              width="80px"
              height="80px"
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
