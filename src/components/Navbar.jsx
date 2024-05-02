// eslint-disable-next-line no-unused-vars
import react, { useState } from "react";
import { CiUser } from "react-icons/ci";
import { LiaFileSignatureSolid } from "react-icons/lia";
import { IoBriefcaseOutline } from "react-icons/io5";
import { PiCertificateLight } from "react-icons/pi";
import { FaRegAddressBook } from "react-icons/fa";
import { useDarkMode } from "./DarkModeContex";

// eslint-disable-next-line react/prop-types
function Navbar({ setSelectedItem }) {
  const [activeLink, setActiveLink] = useState("about");
  const { isDarkMode } = useDarkMode();

  const toggleLink = (link) => {
    setActiveLink(link);
    setSelectedItem(link);
  };
  return (
    <div className="hidden tablet:block  navbar text-right mb-10">
      <div
        className={`navbar-wraper relative inline-block ${
          isDarkMode ? "bg-black " : "bg-white "
        }  rounded-[16px] p-8 laptop:sticky laptop:top-[-45px]`}
      >
        <nav>
          <ul className="list-none flex gap-3 justify-between">
            <li
              className={`flex justify-center items-center w-[84px] h-[84px] rounded-xl ${
                activeLink === "about"
                  ? "bg-gradient-to-r from-red-500 to-pink-500 text-white duration-300"
                  : isDarkMode
                  ? "bg-[#212425] text-white "
                  : "bg-[#f3f6f6] text-[#44566c] "
              }   text-center `}
              onClick={() => toggleLink("about")}
            >
              <button className="flex justify-center items-center flex-col text-base font-medium ">
                <span className="mb-3 text-2xl">
                  <CiUser />
                </span>
                <p>About</p>
              </button>
            </li>
            <li
              className={`flex justify-center items-center w-[84px] h-[84px] rounded-xl ${
                activeLink === "resume"
                  ? "bg-gradient-to-r from-red-500 to-pink-500 text-white duration-300"
                  : isDarkMode
                  ? "bg-[#212425] text-white "
                  : "bg-[#f3f6f6] text-[#44566c] "
              } text-center `}
              onClick={() => toggleLink("resume")}
            >
              <button className="flex justify-center items-center flex-col text-base font-medium ">
                <span className="mb-3 text-2xl">
                  <LiaFileSignatureSolid />
                </span>
                <p>Resume</p>
              </button>
            </li>
            <li
              className={`flex justify-center items-center w-[84px] h-[84px] rounded-xl ${
                activeLink === "work"
                  ? "bg-gradient-to-r from-red-500 to-pink-500 text-white duration-300"
                  : isDarkMode
                  ? "bg-[#212425] text-white "
                  : "bg-[#f3f6f6] text-[#44566c] "
              } text-center `}
              onClick={() => toggleLink("work")}
            >
              <button className="flex justify-center items-center flex-col text-base font-medium ">
                <span className="mb-3 text-2xl">
                  <IoBriefcaseOutline />
                </span>
                <p>Works</p>
              </button>
            </li>
            <li
              className={`flex justify-center items-center w-[84px] h-[84px] rounded-xl ${
                activeLink === "certificate"
                  ? "bg-gradient-to-r from-red-500 to-pink-500 text-white duration-300"
                  : isDarkMode
                  ? "bg-[#212425] text-white "
                  : "bg-[#f3f6f6] text-[#44566c] "
              } text-center `}
              onClick={() => toggleLink("certificate")}
            >
              <button className="flex justify-center items-center flex-col text-base font-medium ">
                <span className="mb-3 text-2xl">
                  <PiCertificateLight />
                </span>
                <p>Licences</p>
              </button>
            </li>
            <li
              className={`flex justify-center items-center w-[84px] h-[84px] rounded-xl ${
                activeLink === "contact"
                  ? "bg-gradient-to-r from-red-500 to-pink-500 text-white duration-300"
                  : isDarkMode
                  ? "bg-[#212425] text-white "
                  : "bg-[#f3f6f6] text-[#44566c] "
              } text-center `}
              onClick={() => toggleLink("contact")}
            >
              <button className="flex justify-center items-center flex-col text-base font-medium ">
                <span className="mb-3 text-2xl">
                  <FaRegAddressBook />
                </span>
                <p>Contact</p>
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Navbar;
