// eslint-disable-next-line no-unused-vars
import react from "react";
import img from "../assets/profile.webp";
import cv from "../assets/CV.pdf";
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { IoPhonePortraitOutline } from "react-icons/io5";
import { CiMail } from "react-icons/ci";
import { FaLocationDot } from "react-icons/fa6";
import { SlCalender } from "react-icons/sl";
import { FaDownload } from "react-icons/fa6";
import { useDarkMode } from "./DarkModeContex";
import { FaGithub } from "react-icons/fa";
function Profile() {
  const { isDarkMode } = useDarkMode();

  return (
    <div className="Profile w-full laptop:w-1/3 desktop:w-1/3 px-4 mb-4">
      <div
        className={`personal-info text-center w-full px-[15px] py-[30px] rounded-[20px] ${
          isDarkMode ? "bg-black " : "bg-white "
        } sticky -top-[40px]`}
      >
        <div className="img-area w-[240px] h-[240px] rounded-[20px] overflow-hidden laptop:mt-[-100px] mb-[21px] mx-auto">
          <img
            src={img}
            className="w-full h-full object-cover rounded-[20px]"
            alt="Profile Image"
          />
        </div>
        <h4
          className={`Name laptop:text-xl capitalize font-medium ${
            isDarkMode ? "text-white " : "text-black "
          } mb-2`}
        >
          Talha Khan
        </h4>
        <span
          className={`Bio laptop:text-sm inline-block font-medium capitalize ${
            isDarkMode ? "bg-[#1d1d1d] text-[#a6a6a6]" : "bg-[#f3f6f6] "
          }  rounded px-5 py-1 mb-4`}
          style={{ fontFamily: "poppins, sans-serif" }}
        >
          Software Engineer
        </span>
        <ul className="Social-links flex items-center justify-between w-[260px] px-[7.5px] mb-[30px] mx-auto list-none">
          <li className="mx-1">
            <a
              className={`text-xl text-[#1773ea] w-10 h-10 rounded-lg ${
                isDarkMode ? "bg-[#1d1d1d] " : "bg-[#f3f6f6] "
              } flex justify-center items-center leading-10`}
              href="https://www.facebook.com/iamTalhaKhn/"
            >
              <FaFacebookF />
            </a>
          </li>
          <li className="mx-1">
            <a
              className={`text-xl text-[#000] w-10 h-10 rounded-lg  ${
                isDarkMode ? "bg-[#1d1d1d] text-white" : "bg-[#f3f6f6] "
              } flex justify-center items-center leading-10`}
              href="https://twitter.com/i_am_Talhakhan"
            >
              <FaXTwitter />
            </a>
          </li>
          <li className="mx-1">
            <a
              className={`text-xl text-[#e12a72] w-10 h-10 rounded-lg  ${
                isDarkMode ? "bg-[#1d1d1d] " : "bg-[#f3f6f6] "
              } flex justify-center items-center leading-10`}
              href="https://www.instagram.com/i_am_talhakhan/"
            >
              <FaInstagram />
            </a>
          </li>
          <li className="mx-1">
            <a
              className={`text-xl text-[#144679] w-10 h-10 rounded-lg  ${
                isDarkMode ? "bg-[#1d1d1d] " : "bg-[#f3f6f6] "
              } flex justify-center items-center leading-10`}
              href="https://linkedin.com/in/imtalhakhan"
            >
              <FaLinkedinIn />
            </a>
          </li>
          <li className="mx-1">
            <a
              className={`text-xl  w-10 h-10 rounded-lg  ${
                isDarkMode
                  ? "bg-[#1d1d1d] text-[#9b59b6] "
                  : "bg-[#f3f6f6] text-black "
              } flex justify-center items-center leading-10`}
              href="https://github.com/Talhakhan-Developer"
            >
              <FaGithub />
            </a>
          </li>
        </ul>
        <div
          className={`contact-area px-[15px] laptop:py-[20px]  ${
            isDarkMode ? "bg-[#1d1d1d] " : "bg-[#f3f6f6] "
          } rounded-2xl text-left mb-[30px]`}
        >
          <div className="flex items-center py-[10px] gap-[10px] border-b">
            <div
              className={`Icon flex items-center justify-center text-[#e93b81] text-[25px] w-[44px] h-[44px]   ${
                isDarkMode ? "bg-black " : "bg-white "
              } rounded-md text-center shadow-md `}
            >
              <IoPhonePortraitOutline />
            </div>
            <div className="Text">
              <span
                className={`block text-xs leading-[18px] capitalize ${
                  isDarkMode ? "text-[#7a8383] " : "text-[#44566c]"
                }  font-normal mb-1`}
              >
                Phone
              </span>
              <p
                className={`text-base leading-[24px] font-normal ${
                  isDarkMode ? "text-white " : "text-black "
                } capitalize`}
              >
                +92 340 9241528
              </p>
            </div>
          </div>

          <div className="flex items-center py-[10px] gap-[10px] border-b">
            <div
              className={` Icon flex items-center justify-center text-[#6ab5b9] ${
                isDarkMode ? "bg-black " : "bg-white "
              } text-[25px] w-[44px] h-[44px]   rounded-md text-center shadow-md `}
            >
              <CiMail />
            </div>
            <div className="Text">
              <span
                className={` block text-xs leading-[18px] capitalize ${
                  isDarkMode ? "text-[#7a8383] " : "text-[#44566c]"
                }  font-normal mb-1`}
              >
                Email
              </span>
              <p
                className={` text-base leading-[24px] font-normal ${
                  isDarkMode ? "text-white " : "text-black "
                }`}
              >
                iamtalhkhn@gmail.com
              </p>
            </div>
          </div>
          <div className="flex items-center py-[10px] gap-[10px] border-b">
            <div
              className={` Icon flex items-center justify-center text-[#fd7590] ${
                isDarkMode ? "bg-black " : "bg-white "
              } text-[25px] w-[44px] h-[44px]   rounded-md text-center shadow-md `}
            >
              <FaLocationDot />
            </div>
            <div className="Text">
              <span
                className={` block text-xs leading-[18px] capitalize ${
                  isDarkMode ? "text-[#7a8383] " : "text-[#44566c]"
                }  font-normal mb-1`}
              >
                Location
              </span>
              <p
                className={` text-base leading-[24px] font-normal ${
                  isDarkMode ? "text-white " : "text-black "
                } capitalize`}
              >
                Shahi Bagh Saidu Sharif Swat
              </p>
            </div>
          </div>
          <div className="flex items-center py-[10px] gap-[10px]">
            <div
              className={` Icon flex items-center justify-center text-[#c17ceb] ${
                isDarkMode ? "bg-black " : "bg-white "
              } text-[25px] w-[44px] h-[44px]   rounded-md text-center shadow-md `}
            >
              <SlCalender />
            </div>
            <div className="Text">
              <span
                className={` block text-xs leading-[18px] capitalize ${
                  isDarkMode ? "text-[#7a8383] " : "text-[#44566c]"
                }  font-normal mb-1`}
              >
                Birthday
              </span>
              <p
                className={` text-base leading-[24px] font-normal ${
                  isDarkMode ? "text-white " : "text-black "
                } capitalize`}
              >
                March 3rd, 2001
              </p>
            </div>
          </div>
        </div>
        <div className="cv-download">
          <a
            href={cv}
            download
            className="text-lg font-normal text-white bg-gradient-to-r from-red-500 to-pink-500 leading-[27px] py-3 px-[30px] rounded-[10px] border-none duration-300 hover:translate-y-[-2px]"
          >
            <span className="mr-[5px] inline-block ">
              <FaDownload />
            </span>
            Download CV
          </a>
        </div>
      </div>
    </div>
  );
}

export default Profile;
