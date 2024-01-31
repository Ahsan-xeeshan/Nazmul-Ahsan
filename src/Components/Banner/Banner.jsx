/* eslint-disable react/no-unescaped-entities */
// Import Swiper React components

import { Autoplay, EffectFade, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";

import FirstContent from "../BannerContent/FirstContent";
import SecondContent from "../BannerContent/SecondContent";

const Banner = () => {
  // useEffect((swiper) => {
  //   swiper.init();
  // }, []);
  return (
    <div id="Home">
      <Swiper
        loop={true}
        className="relative"
        modules={[Navigation, Autoplay, EffectFade]}
        spaceBetween={0}
        slidesPerView={1}
        navigation={{
          nextEl: ".button-next-slide",
          prevEl: ".button-prev-slide",
        }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        effect={"fade"}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide>
          <FirstContent />
        </SwiperSlide>
        <SwiperSlide>
          <SecondContent />
        </SwiperSlide>
        <div className="absolute hidden  z-10 button-prev-slide left-5 top-[50%] bg-gray-300 w-[80px] h-[80px] text-xl font-medium  cursor-pointer transition-all duration-700 hover:duration-500 hover:text-black hover:bg-mainBanner hover:bg-cover hover:bg-no-repeat hover:transition rounded-full text-white lg:grid place-items-center translate-y-[-50%]">
          <SlArrowLeft />
        </div>
        <div className="absolute hidden z-10 button-next-slide right-5 top-[50%] bg-gray-300 w-[80px] h-[80px] text-xl font-medium cursor-pointer transition-all duration-700 hover:duration-500 hover:bg-secondBanner hover:bg-cover hover:bg-no-repeat hover:text-black hover:transition rounded-full text-white lg:grid place-items-center translate-y-[-50%]">
          <SlArrowRight />
        </div>
      </Swiper>
    </div>
  );
};
export default Banner;
