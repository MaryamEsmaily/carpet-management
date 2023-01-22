import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Thumbs } from "swiper";
import { Box, Flex, Image } from "@chakra-ui/react";
import "swiper/css";
import "swiper/css/thumbs";

const ImageSlider = ({ images }) => {
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
        {images?.map((img) => (
          <SwiperSlide key={img?.id}>
            <Image
              src={img.url}
              width="100%"
              height={400}
              objectFit="cover"
              borderRadius={18}
            />
          </SwiperSlide>
        ))}
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
          {images?.map((img) => (
            <SwiperSlide key={img?.id}>
              <Image
                src={img.url}
                width="80px"
                height="80px"
                objectFit="cover"
                borderRadius={10}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>
    </Flex>
  );
};

export default ImageSlider;
