import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import useDimensions from "../../../hooks/useDimensions";

function Banner() {
  const { width } = useDimensions();

  return (
    <div className="banner">
      <div className="banner-swiper">
        <Swiper
          slidesPerView={width < 768 ? 1.15 : width / 1160}
          spaceBetween={15}
          centeredSlides={true}
          loop={true}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
        >
          <SwiperSlide>
            <div className="banner-swiper__item">
              <img
                src="https://bellissimo.uz/_next/image?url=https%3A%2F%2Fio.bellissimo.uz%2Fimages%2Fa7b348ce-343a-4127-889b-583edd12b213_uz.jpg&w=1920&q=75"
                alt="Banner image"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="banner-swiper__item">
              <img
                src="https://bellissimo.uz/_next/image?url=https%3A%2F%2Fio.bellissimo.uz%2Fimages%2Fdb9ec296-5c11-474a-a79e-57ed2debd2f2_uz.jpg&w=1920&q=75"
                alt="Banner image"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="banner-swiper__item">
              <img
                src="https://bellissimo.uz/_next/image?url=https%3A%2F%2Fio.bellissimo.uz%2Fimages%2Fa95649d2-ee7e-4606-a65e-262015e5b1c6_uz.jpg&w=1920&q=75"
                alt="Banner image"
              />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}

export default Banner;
