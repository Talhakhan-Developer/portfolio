// eslint-disable-next-line no-unused-vars
import react, { useState } from "react";
import { useDarkMode } from "./DarkModeContex";
import logo from "../assets/Site logo.jpg";
import { FaMoon } from "react-icons/fa";
import { FiSun } from "react-icons/fi";
import { CiUser } from "react-icons/ci";
import { LiaFileSignatureSolid } from "react-icons/lia";
import { IoBriefcaseOutline } from "react-icons/io5";
import { PiCertificateLight } from "react-icons/pi";
import { FaRegAddressBook } from "react-icons/fa";

// eslint-disable-next-line react/prop-types
function Heading({ setSelectedItem }) {
  const { isDarkMode, toggleDarkMode } = useDarkMode();
  const [isActive, setIsActive] = useState(false);
  const [activeLink, setActiveLink] = useState("about");

  const toggleLink = (link) => {
    setActiveLink(link);
    setSelectedItem(link);
    setIsActive(false);
  };

  const toggleMenu = () => {
    setIsActive(!isActive);
  };

  return (
    <div className="Heading mb-[30px] laptop:mb-[80px]">
      <div className="container mx-auto px-4 tablet:max-w-[540px] laptop:max-w-[960px] desktop:max-w-[1140px] tablet:px-6 laptop:px-8 desktop:px-12 ">
        <div className="header-wraper  p-[20px] rounded-lg tablet:mr-[-40px] tablet:ml-[-50px]">
          <div className="flex items-center">
            <div className="w-1/2">
              <div className="header-logo">
                <a className="outline-none no-underline" href="/">
                  <img
                    className="align-middle w-[153px] h-8"
                    src={logo}
                    alt="Logo Image"
                  />
                </a>
              </div>
            </div>
            <div className="w-1/2">
              <div className="header-menu-btn text-right flex items-center justify-end mb-0 ">
                <div
                  className={`dark-btn w-[50px] h-[50px] text-xl hover:bg-[#fa5252] ${
                    isDarkMode ? "bg-black text-white" : "bg-white "
                  } rounded-[50%] mr-[10px] cursor-pointer flex items-center justify-center text-[#44566c] hover:text-white`}
                  onClick={toggleDarkMode}
                >
                  {isDarkMode ? <FiSun /> : <FaMoon />}
                </div>
                <div
                  className="menu-btn tablet:hidden h-10 w-10 bg-gradient-to-r from-red-500 to-pink-500 rounded-full relative inline-flex overflow-hidden items-center justify-center duration-100 cursor-pointer "
                  onClick={toggleMenu}
                >
                  <span
                    className={` ${
                      isActive ? "rotate-45 " : "translate-y-[-5px]"
                    }`}
                  ></span>
                  <span
                    className={` ${isActive ? "translate-x-[30px]" : ""}`}
                  ></span>
                  <span
                    className={` ${
                      isActive ? "-rotate-45" : "translate-y-[5px]"
                    }`}
                  ></span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mobile-menu-wrapper relative">
          <div
            className={`mobile-menu absolute top-0 right-0 left-0 ${
              isActive ? "scale-y-100 " : "scale-y-0"
            } origin-top z-50 duration-500 `}
          >
            <div
              className={`menu-bar ${
                isDarkMode ? "bg-black" : "bg-white "
              } rounded-xl py-5 shadow-md`}
            >
              <nav className="menu-nav">
                <ul className="list-none">
                  <li
                    className="px-10 py-1"
                    onClick={() => toggleLink("about")}
                  >
                    <button
                      className={`flex cursor-pointer border-none capitalize text-sm font-medium ${
                        activeLink === "about"
                          ? "text-[#fa5252] "
                          : isDarkMode
                          ? "text-white"
                          : "text-[#44566c]"
                      } py-[5px]`}
                    >
                      <CiUser className="inline-block mr-[8px] h-[18px] w-[18px] align-top " />
                      <span className="inline-block ">About</span>
                    </button>
                  </li>
                  <li
                    className="px-10 py-1"
                    onClick={() => toggleLink("resume")}
                  >
                    <button
                      className={`flex cursor-pointer border-none capitalize text-sm font-medium ${
                        activeLink === "resume"
                          ? "text-[#fa5252] "
                          : isDarkMode
                          ? "text-white "
                          : "text-[#44566c] "
                      } py-[5px]`}
                    >
                      <LiaFileSignatureSolid className="inline-block mr-[8px] h-[18px] w-[18px] align-top " />
                      <span className="inline-block">Resume</span>
                    </button>
                  </li>
                  <li className="px-10 py-1" onClick={() => toggleLink("work")}>
                    <button
                      className={`flex cursor-pointer border-none capitalize text-sm font-medium ${
                        activeLink === "work"
                          ? "text-[#fa5252] "
                          : isDarkMode
                          ? "text-white "
                          : "text-[#44566c] "
                      } py-[5px]`}
                    >
                      <IoBriefcaseOutline className="inline-block mr-[8px] h-[18px] w-[18px] align-top " />
                      <span className="inline-block">Work</span>
                    </button>
                  </li>
                  <li
                    className="px-10 py-1"
                    onClick={() => toggleLink("certificate")}
                  >
                    <button
                      className={`flex cursor-pointer border-none capitalize text-sm font-medium ${
                        activeLink === "certificate"
                          ? "text-[#fa5252] "
                          : isDarkMode
                          ? "text-white "
                          : "text-[#44566c] "
                      } py-[5px]`}
                    >
                      <PiCertificateLight className="inline-block mr-[8px] h-[18px] w-[18px] align-top " />
                      <span className="inline-block">Licences </span>
                    </button>
                  </li>
                  <li
                    className="px-10 py-1"
                    onClick={() => toggleLink("contact")}
                  >
                    <button
                      className={`flex cursor-pointer border-none capitalize text-sm font-medium ${
                        activeLink === "contact"
                          ? "text-[#fa5252] "
                          : isDarkMode
                          ? "text-white "
                          : "text-[#44566c] "
                      } py-[5px]`}
                    >
                      <FaRegAddressBook className="inline-block mr-[8px] h-[18px] w-[18px] align-top " />
                      <span className="inline-block">Contact</span>
                    </button>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Heading;
