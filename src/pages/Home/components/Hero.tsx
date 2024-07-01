import { Link } from "react-router-dom";
import student1 from "../../../assets/imgs/student1.jpg";

const Hero = () => {
  return (
    <div className=" w-full h-auto mx-auto  pt-10 ">
      <div className="w-full min-h-[80vh] relative overflow-hidden">
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
              At Kendrick IT Uni, we offer the best courses full-time and give
              fantastic and honourable services at super affordable prices too
            </p>
           
              <button className="border-d-green p-3 text-d-green rounded-sm px-6 bg-white ">
              <Link to="/pages/SignUp" className=" pt-4">  Get Started
            </Link>
              </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
