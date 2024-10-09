import { Link } from "react-router-dom";
import student1 from "../../assets/imgs/student2.jpg";
import student2 from "../../assets/imgs/student1.jpg";
import student3 from "../../assets/imgs/student3.jpg";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const Hero = () => {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className=" w-full inter h-auto mx-auto  pt-10 ">
            <div className="w-full min-h-[75vh] relative overflow-hidden">
              <img
                src={student1}
                alt="hero"
                className="w-full z-10  h-full absolute top-0   object-cover"
              />
              <div className="z-10 w-[50%]  left-0 absolute top-0 h-full bg-d-green blur-[150px]"></div>
              <div className=" z-20 w-full h-full mx-auto absolute top-0 left-0   max-w-[95%]">
                <div className="z-20 w-full h-full pt-24 max-w-[95%] mx-auto p-5 space-y-7">
                  <h1 className=" text-white  leading-[4rem] ds:text-3xl sm:text-2xl md:text-3xl lg:text-5xl font-semibold">
                    The Best Courses? <br></br> You Can Find Here!
                  </h1>
                  <p className=" text-lg text-gray-200 mb-4 md:w-[50%]">
                    At Innovate, we offer the best courses full-time and give
                    fantastic and honourable services at super affordable prices
                    too
                  </p>

                  <button className="hover:border-white border hover:text-white p-3 hover:bg-transparent smooth text-d-green rounded-sm px-6 bg-white ">
                    <Link to="/pages/SignUp" className=" pt-4">
                      {" "}
                      Get Started
                    </Link>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className=" w-full inter h-auto mx-auto  pt-10 ">
            <div className="w-full min-h-[75vh] relative overflow-hidden">
              <img
                src={student2}
                alt="hero"
                className="w-full z-10  h-full absolute top-0   object-cover"
              />
              <div className="z-10 w-[50%]  left-0 absolute top-0 h-full bg-d-green blur-[150px]"></div>
              <div className=" z-20 w-full h-full mx-auto absolute top-0 left-0   max-w-[95%]">
                <div className="z-20 w-full h-full pt-24 max-w-[95%] mx-auto p-5 space-y-7">
                  <h1 className=" text-white  leading-[4rem] ds:text-3xl sm:text-2xl md:text-3xl lg:text-5xl font-semibold">
                    Get Quality <br></br> education at it's best !
                  </h1>
                  <p className=" text-lg text-gray-200 mb-4 md:w-[50%]">
                    At Innovate, we offer the best courses full-time and give
                    fantastic and honourable services at super affordable prices
                    too
                  </p>

                  <button className="hover:border-white border hover:text-white p-3 hover:bg-transparent smooth text-d-green rounded-sm px-6 bg-white ">
                    <Link to="/pages/SignUp" className=" pt-4">
                      {" "}
                      Get Started
                    </Link>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className=" w-full inter h-auto mx-auto  pt-10 ">
            <div className="w-full min-h-[75vh] relative overflow-hidden">
              <img
                src={student3}
                alt="hero"
                className="w-full z-10  h-full absolute top-0   object-cover"
              />
              <div className="z-10 w-[50%]  left-0 absolute top-0 h-full bg-d-green blur-[150px]"></div>
              <div className=" z-20 w-full h-full mx-auto absolute top-0 left-0   max-w-[95%]">
                <div className="z-20 w-full h-full pt-24 max-w-[95%] mx-auto p-5 space-y-7">
                  <h1 className=" text-white  leading-[4rem] ds:text-3xl sm:text-2xl md:text-3xl lg:text-5xl font-semibold">
                    private mentorship <br></br>
                    and online classes!
                  </h1>
                  <p className=" text-lg text-gray-200 mb-4 md:w-[50%]">
                    At Innovate, we offer the best courses full-time and give
                    fantastic and honourable services at super affordable prices
                    too
                  </p>

                  <button className="hover:border-white border hover:text-white p-3 hover:bg-transparent smooth text-d-green rounded-sm px-6 bg-white ">
                    <Link to="/pages/SignUp" className=" pt-4">
                      {" "}
                      Get Started
                    </Link>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Hero;
