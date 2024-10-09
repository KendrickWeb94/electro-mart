
import {
  Book,
  HomeIcon,

  LightbulbIcon,

  Newspaper,
  Phone,
  
  UserRound,
} from "lucide-react";
import { SetStateAction, useState } from "react";

const ResponsiveNavbar = () => {
  const [activeLink, setActiveLink] = useState("home"); // State to track active link

  function handleLinkClick(link: SetStateAction<string>) {
    setActiveLink(link);
  }
  return (
    <div className=" w-[300px] h-screen fixed z-50 bg-white dark:bg-black shadow-sm p-5">
      <div className=" relative h-full w-full">
        <div className="logo flex items-center gap-2 text-d-green">
          <h3 className="flex text-xl text-d-green inter font-semibold plus">
           Innovate
            <span className="">
              <LightbulbIcon />
            </span>
          </h3>
        </div>

       <div className="flex flex-col items-start h-full -translate-y-9 justify-center">
       <div className="nav-links list-none flex flex-col gap-8 text-gray-600 dark:text-gray-300">
          <li
            className={`relative dark:text-gray-300 text-base flex gap-3 list-none dark:hover:text-d-green hover:text-d-green smooth cursor-pointer ${
              activeLink === "home" ? " text-d-green" : ""
            }`}
            onClick={() => handleLinkClick("home")}
          >
            <HomeIcon size="19px" /> Home
          </li>
          <li
            className={`relative  list-none flex items-center gap-3 dark:hover:text-d-green hover:text-yd-greensmooth cursor-pointer ${
              activeLink === "about" ? "  text-d-green dark:text-d-green" : ""
            }`}
            onClick={() => handleLinkClick("about")}
          >
            <Newspaper className="text-d-green" size="15px" />  More about us
          </li>
          <li
            className={`relative  list-none dark:hover:text-d-green flex items-center gap-3 hover:text-d-green smooth cursor-pointer ${
              activeLink === "contact" ? " text-d-green dark:text-d-green" : ""
            }`}
            onClick={() => handleLinkClick("contact")}
          >
            <Phone className=" text-d-green" size="15px" />  How to contact us 
          </li>
          <li
            className={`relative  list-none flex items-center gap-3 dark:hover:text-d-green hover:text-d-green smooth cursor-pointer ${
              activeLink === "courses" ? " text-d-green dark:text-d-green " : ""
            }`}
            onClick={() => handleLinkClick("courses")}
          >
            <Book className=" text-d-green" size="15px" />
            The courses we offer
          </li>
          <li className="flex items-center gap-3">
            <UserRound className=" text-d-green" size={18}/>
            <p className="">Your Account</p>
          </li>
       
        </div>
       </div>
      </div>
    </div>
  );
};

export default ResponsiveNavbar;
