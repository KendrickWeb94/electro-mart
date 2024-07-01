import { useState  } from "react";

import { Link } from "react-router-dom";
import { Lightbulb, MenuIcon, User, X } from "lucide-react";
import { ModeToggle } from "@/components/themes/modetoggle";
import ResponsiveNavbar from "./ResponsiveNavbar";

const Navbar = () => {
    const [activeLink, setActiveLink] = useState("home");
    const [navactive, setactive] = useState(false);
    const [toggleicon, settoggleicon] = useState(true);


  

    function handleLinkClick(link: string) {
        setActiveLink(link);
    }

    function togglenav() {
        setactive(!navactive);
        settoggleicon(!toggleicon);
    }

    return (
        <>
            {navactive && <ResponsiveNavbar />}
            <div className="w-full mx-auto bg-slate-50 dark:bg-dark top-0 fixed z-30 p-2">
                <div className="w-full mx-auto max-w-[95%] flex items-center justify-between">
                    <Link to="/">
                        <div className="logo flex items-center gap-2 text-d-green">
                            <h3 className="flex text-2xl text-d-green inter font-semibold plus">
                                Kendrick IT Uni
                                <span className="">
                                    <Lightbulb size="25px" stroke="#0eb582" />
                                </span>
                            </h3>
                        </div>
                    </Link>
                    <div className="nav-links md:flex ds:hidden list-none flex items-center gap-6 text-gray-600 dark:text-gray-300">
                        <Link to="/">
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
                        </Link>
                        <Link to="pages/About">
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
                        </Link>
                        <Link to="/pages/Contact">
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
                        </Link>
                        <Link to="/pages/Courses">
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
                        </Link>
                     
                            <Link to="/pages/Login">
                                <li>
                                    <User stroke="#0eb582" />
                                </li>
                            </Link>
                       
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
