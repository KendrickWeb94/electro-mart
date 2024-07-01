import { ModeToggle } from "@/components/themes/modetoggle";
import { Lightbulb, MenuIcon, User, X } from "lucide-react";
import { SetStateAction, useState } from "react";
import ResponsiveNavbar from "./ResponsiveNavbar";

const Navbar = () => {
  const [activeLink, setActiveLink] = useState("home"); // State to track active link
  const [navactive, setactive] = useState(false); // State to track active link
  const [toggleicon, settoggleicon] = useState(true); // State to track active link

  function handleLinkClick(link: SetStateAction<string>) {
    setActiveLink(link);
  }

  function togglenav() {
    setactive(!navactive);
    settoggleicon(!toggleicon);
  }
  return (
    <>
      {navactive && <ResponsiveNavbar />}{" "}
      <div className="w-full mx-auto bg-slate-50  dark:bg-dark top-0 fixed z-30 p-2">
        <div className="w-full mx-auto max-w-[95%] flex items-center justify-between">
          <div className="logo flex items-center gap-2 text-d-green">
            <h3 className="flex text-2xl text-d-green inter font-semibold plus">
              Kendrick IT Uni
              <span className="">
                <Lightbulb size="25px" stroke="#0eb582" />
              </span>
            </h3>
          </div>
          <div className="nav-links md:flex ds:hidden list-none flex items-center gap-6 text-gray-600 dark:text-gray-300">
            <li
              className={`relative dark:text-gray-300 list-none dark:hover:text-d-green hover:text-d-green smooth cursor-pointer ${
                activeLink === "home"
                  ? "after:absolute after:bottom-0 after:mt-2 after:left-0 after:border-d-green after:border text-d-green dark:text-d-green after:w-[90%] after:h-[0.5px]"
                  : ""
              }`}
              onClick={() => handleLinkClick("home")}
            >
              Home
            </li>
            <li
              className={`relative  list-none dark:hover:text-d-green hover:text-yd-greensmooth cursor-pointer ${
                activeLink === "about"
                  ? "after:absolute after:bottom-0 after:mt-2 after:left-0 after:border-d-green after:border text-d-green dark:text-d-green after:w-[90%] after:h-[0.5px]"
                  : ""
              }`}
              onClick={() => handleLinkClick("about")}
            >
              About
            </li>
            <li
              className={`relative  list-none dark:hover:text-d-green hover:text-d-green smooth cursor-pointer ${
                activeLink === "contact"
                  ? "after:absolute after:bottom-0 after:mt-2 after:left-0 after:border-d-green after:border text-d-green dark:text-d-green after:w-[90%] after:h-[0.5px]"
                  : ""
              }`}
              onClick={() => handleLinkClick("contact")}
            >
              Contact
            </li>
            <li
              className={`relative  list-none dark:hover:text-d-green hover:text-d-green smooth cursor-pointer ${
                activeLink === "courses"
                  ? "after:absolute after:bottom-0 after:mt-2 after:left-0 after:border-d-green after:border text-d-green dark:text-d-green after:w-[90%] after:h-[0.5px]"
                  : ""
              }`}
              onClick={() => handleLinkClick("courses")}
            >
              Courses
            </li>
            <li className="">
              <User stroke="#0eb582" />
            </li>
            <ModeToggle />
          </div>
          <div className="md:hidden ds:block">
            <div
              className="toggle_icon flex gap-1 flex-col h-auto cursor-pointer"
              onClick={togglenav}
            >
              <X
                className={`text-d-green ${toggleicon ? "hidden" : "block"}`}
                size={30}
              />
              <MenuIcon
                className={`text-d-green ${toggleicon ? "block" : "hidden"}`}
                size={30}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
