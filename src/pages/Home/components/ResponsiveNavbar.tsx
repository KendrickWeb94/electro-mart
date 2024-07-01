import { ModeToggle } from "@/components/themes/modetoggle";
import {
  Book,
  HomeIcon,
  Lightbulb,
  Newspaper,
  Phone,
  User,
} from "lucide-react";
import { SetStateAction, useState } from "react";

const ResponsiveNavbar = () => {
  const [activeLink, setActiveLink] = useState("home"); // State to track active link

  function handleLinkClick(link: SetStateAction<string>) {
    setActiveLink(link);
  }
  return (
    <div className=" max-w-md h-screen fixed z-50 bg-white dark:bg-black shadow-sm p-5">
      <div className=" relative h-full w-full">
        <div className="logo flex items-center gap-2 text-d-green">
          <h3 className="flex text-xl text-d-green inter font-semibold plus">
            Kendrick IT Uni
            <span className="">
              <Lightbulb size="19px" stroke="#0eb582" />
            </span>
          </h3>
        </div>

        <div className="nav-links list-none flex flex-col pt-10 gap-6 text-gray-600 dark:text-gray-300">
          <li
            className={`relative dark:text-gray-300 text-base flex items-center gap-3 list-none dark:hover:text-d-green hover:text-d-green smooth cursor-pointer ${
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
            <Newspaper className="text-d-green" size="15px" /> About
          </li>
          <li
            className={`relative  list-none dark:hover:text-d-green flex items-center gap-3 hover:text-d-green smooth cursor-pointer ${
              activeLink === "contact" ? " text-d-green dark:text-d-green" : ""
            }`}
            onClick={() => handleLinkClick("contact")}
          >
            <Phone className=" text-d-green" size="15px" /> Contact
          </li>
          <li
            className={`relative  list-none flex items-center gap-3 dark:hover:text-d-green hover:text-d-green smooth cursor-pointer ${
              activeLink === "courses" ? " text-d-green dark:text-d-green " : ""
            }`}
            onClick={() => handleLinkClick("courses")}
          >
            <Book className=" text-d-green" size="15px" />
            Courses
          </li>
          <li className="flex items-center gap-3">
            <User stroke="#0eb582" size="15px" />
            <p className="">Account</p>
          </li>
          <div className=" absolute bottom-0 left-0 ">
            <ModeToggle />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResponsiveNavbar;
