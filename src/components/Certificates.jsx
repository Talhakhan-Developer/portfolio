// eslint-disable-next-line no-unused-vars
import react from "react";
import python from "../assets/python.png";
import javascript from "../assets/javascript.png";
import reactCourse from "../assets/React-Basic.png";
import spark from "../assets/The-Spark-Foundation.png";
import version from "../assets/Version-control.png";
import letsupgrade from "../assets/letsupgrade.png";
import { useDarkMode } from "./DarkModeContex";

function Certificates() {
  const { isDarkMode } = useDarkMode();

  return (
    <div
      className={`contact-area ${
        isDarkMode ? "bg-black " : "bg-white "
      } rounded-[20px] px-5 laptop:px-[60px] pt-[60px]  pb-4`}
    >
      <div className="contact-heading mb-4">
        <h2
          className={`text-[30px] laptop:text-[36px] relative inline-block ${
            isDarkMode ? "text-white " : "text-black "
          } mt-0 font-bold leading-[1.5px]`}
        >
          Certificates
          <div className="absolute w-[50%] tablet:w-[200px] h-[3px] bg-gradient-to-r from-red-500 to-pink-500 left-[110%] laptop:left[122%] top-1/2 -translate-y-1/2 rounded-[5px]"></div>
        </h2>
      </div>
      <div className="certificates-area">
        <div className="row grid grid-cols-1 gap-4 laptop:grid-cols-2 mobile:grid-cols-1">
          <div
            className={`item ${
              isDarkMode
                ? "bg-[#0d0d0d] border-[1px] border-[#353535] "
                : "bg-[#fff4f4] "
            }  w-full mb-5 rounded-xl p-5`}
          >
            <img
              src={python}
              alt="Project Image"
              width="310 px"
              height="310 px"
              className=" object-cover  mb-4"
            />
            <h6
              className={`text-base font-medium mb-0 capitalize font-sans ${
                isDarkMode ? "text-white " : "text-black "
              } leading-normal mt-0`}
            >
              Python Crash Course
            </h6>
          </div>
          <div
            className={`item ${
              isDarkMode
                ? "bg-[#0d0d0d] border-[1px] border-[#353535]  "
                : "bg-[#eef5fa] "
            } w-full mb-5 rounded-xl p-5`}
          >
            <img
              src={javascript}
              alt="Project Image"
              width="310 px"
              height="310 px"
              className=" object-cover  mb-4"
            />
            <h6
              className={`text-base font-medium mb-0 capitalize font-sans ${
                isDarkMode ? "text-white " : "text-black "
              } leading-normal mt-0`}
            >
              Programming With Javascript
            </h6>
          </div>
          <div
            className={`item ${
              isDarkMode
                ? "bg-[#0d0d0d] border-[1px] border-[#353535]  "
                : "bg-[#eef5fa] "
            } w-full mb-5 rounded-xl p-5`}
          >
            <img
              src={reactCourse}
              alt="Project Image"
              width="310 px"
              height="310 px"
              className=" object-cover  mb-4"
            />
            <h6
              className={`text-base font-medium mb-0 capitalize font-sans ${
                isDarkMode ? "text-white " : "text-black "
              } leading-normal mt-0`}
            >
              Reactjs, Meta
            </h6>
          </div>
          <div
            className={`item ${
              isDarkMode
                ? "bg-[#0d0d0d] border-[1px] border-[#353535]  "
                : "bg-[#fff4f4] "
            } w-full mb-5 rounded-xl p-5`}
          >
            <img
              src={spark}
              alt="Project Image"
              width="310 px"
              height="310 px"
              className=" object-cover  mb-4"
            />
            <h6
              className={`text-base font-medium mb-0 capitalize font-sans ${
                isDarkMode ? "text-white " : "text-black "
              } leading-normal mt-0`}
            >
              The Spark Foundation
            </h6>
          </div>
          <div
            className={`item ${
              isDarkMode
                ? "bg-[#0d0d0d] border-[1px] border-[#353535]  "
                : "bg-[#fff4f4] "
            }w-full mb-5 rounded-xl p-5`}
          >
            <img
              src={version}
              alt="Project Image"
              width="310 px"
              height="310 px"
              className=" object-cover  mb-4"
            />
            <h6
              className={`text-base font-medium mb-0 capitalize font-sans ${
                isDarkMode ? "text-white " : "text-black "
              } leading-normal mt-0`}
            >
              Version Control
            </h6>
          </div>
          <div
            className={`item ${
              isDarkMode
                ? "bg-[#0d0d0d] border-[1px] border-[#353535]  "
                : "bg-[#eef5fa] "
            } w-full mb-5 rounded-xl p-5`}
          >
            <img
              src={letsupgrade}
              alt="Project Image"
              width="310 px"
              height="310 px"
              className=" object-cover  mb-4"
            />
            <h6
              className={`text-base font-medium mb-0 capitalize font-sans ${
                isDarkMode ? "text-white " : "text-black "
              } leading-normal mt-0`}
            >
              LetsUpgrade, india
            </h6>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Certificates;
