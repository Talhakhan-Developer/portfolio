// eslint-disable-next-line no-unused-vars
import react from "react";
import { FaGraduationCap } from "react-icons/fa6";
import { IoBriefcaseOutline } from "react-icons/io5";
import { useDarkMode } from "./DarkModeContex";
function Resume() {
  const { isDarkMode } = useDarkMode();

  return (
    <div
      className={`resume-area ${
        isDarkMode ? "bg-black " : "bg-white "
      } rounded-[20px] px-5 laptop:px-[60px] pt-[60px]  pb-4`}
    >
      <div className="resume-heading mb-6">
        <h2
          className={`text-[36px] relative inline-block ${
            isDarkMode ? "text-white " : "text-black "
          } mt-0 font-bold leading-[1.5px]`}
        >
          Resume
          <div className="absolute w-[100px] tablet:w-[200px] h-[3px] bg-gradient-to-r from-red-500 to-pink-500 left-[122%] top-1/2 -translate-y-1/2 rounded-[5px]"></div>
        </h2>
      </div>
      <div className="work mb-4">
        <div className="row grid grid-cols-1 gap-4 laptop:grid-cols-2">
          <div className="education ">
            <div className="title-wraper flex items-center mb-5">
              <div className="icon mr-2 text-[38px] text-[#ff4d4e]">
                <FaGraduationCap />
              </div>
              <h3
                className={`font-medium text-[24px] ${
                  isDarkMode ? "text-white " : "text-black "
                }
          `}
                style={{ fontFamily: "poppins, sans-serif" }}
              >
                Education
              </h3>
            </div>
            <div className="card-wraper">
              <div
                className={`card mb-5 p-5 ${
                  isDarkMode ? "bg-black " : "bg-[#fff4f4] "
                }  rounded-xl`}
              >
                <span
                  className={`card-subtitle mb-2 text-sm ${
                    isDarkMode ? "text-[#7a8383] " : "text-[#44566c] "
                  } font-normal `}
                  style={{ fontFamily: "Roboto, sans-serif" }}
                >
                  Sep 2020 – Present
                </span>
                <h3
                  className={` font-medium text-[18px] ${
                    isDarkMode ? "text-white" : "text-black "
                  } mb-1`}
                  style={{ fontFamily: "poppins, sans-serif" }}
                >
                  BS: Software Engineering
                </h3>
                <p
                  className={`card-subtitle  text-base ${
                    isDarkMode ? "text-[#7a8383] " : "text-[#44566c] "
                  } font-normal `}
                  style={{ fontFamily: "Roboto, sans-serif" }}
                >
                  University of Swat
                </p>
              </div>
            </div>
            <div className="card-wraper">
              <div
                className={`card mb-5 p-5 ${
                  isDarkMode ? "bg-black " : "bg-[#eef5fa] "
                }  rounded-xl`}
              >
                <span
                  className={`card-subtitle mb-2 text-sm ${
                    isDarkMode ? "text-[#7a8383] " : "text-[#44566c] "
                  } font-normal `}
                  style={{ fontFamily: "Roboto, sans-serif" }}
                >
                  Aug 2018 – July 2020
                </span>
                <h3
                  className={` font-medium text-[18px] ${
                    isDarkMode ? "text-white" : "text-black "
                  } mb-1`}
                  style={{ fontFamily: "poppins, sans-serif" }}
                >
                  F.sc: Pre-Engineering
                </h3>
                <p
                  className={`card-subtitle  text-base ${
                    isDarkMode ? "text-[#7a8383] " : "text-[#44566c] "
                  } font-normal `}
                  style={{ fontFamily: "Roboto, sans-serif" }}
                >
                  GCMHSS Wadudia Saidu Sharif Swat
                </p>
              </div>
            </div>
            <div className="card-wraper">
              <div
                className={`card mb-5 p-5 ${
                  isDarkMode ? "bg-black " : "bg-[#fff4f4] "
                }  rounded-xl`}
              >
                <span
                  className={`card-subtitle mb-2 text-sm ${
                    isDarkMode ? "text-[#7a8383] " : "text-[#44566c] "
                  } font-normal `}
                  style={{ fontFamily: "Roboto, sans-serif" }}
                >
                  2016-2018
                </span>
                <h3
                  className={` font-medium text-[18px] ${
                    isDarkMode ? "text-white" : "text-black "
                  } mb-1`}
                  style={{ fontFamily: "poppins, sans-serif" }}
                >
                  Matric: Science
                </h3>
                <p
                  className={`card-subtitle  text-base ${
                    isDarkMode ? "text-[#7a8383] " : "text-[#44566c] "
                  } font-normal `}
                  style={{ fontFamily: "Roboto, sans-serif" }}
                >
                  GCMHSS Wadudia Saidu Sharif Swat
                </p>
              </div>
            </div>
          </div>
          <div className="experiance ">
            <div className="title-wraper flex items-center mb-5">
              <div className="icon mr-2 text-[38px] text-[#ff4d4e]">
                <IoBriefcaseOutline />
              </div>
              <h3
                className={`font-medium text-[24px] ${
                  isDarkMode ? "text-white " : "text-black "
                }`}
                style={{ fontFamily: "poppins, sans-serif" }}
              >
                Experiance
              </h3>
            </div>
            <div className="card-wraper">
              <div
                className={`card mb-5 p-5 ${
                  isDarkMode ? "bg-black " : "bg-[#eef5fa] "
                }  rounded-xl`}
              >
                <span
                  className={`card-subtitle mb-2 text-sm ${
                    isDarkMode ? "text-[#7a8383] " : "text-[#44566c] "
                  } font-normal `}
                  style={{ fontFamily: "Roboto, sans-serif" }}
                >
                  2023-2024
                </span>
                <h3
                  className={` font-medium text-[18px] ${
                    isDarkMode ? "text-white" : "text-black "
                  } mb-1`}
                  style={{ fontFamily: "poppins, sans-serif" }}
                >
                  Web Developer
                </h3>
                <p
                  className={`card-subtitle  text-base ${
                    isDarkMode ? "text-[#7a8383] " : "text-[#44566c] "
                  } font-normal `}
                  style={{ fontFamily: "Roboto, sans-serif" }}
                >
                  ShawlsLer Inc.
                </p>
              </div>
            </div>
            <div className="card-wraper">
              <div
                className={`card mb-5 p-5 ${
                  isDarkMode ? "bg-black " : "bg-[#fff4f4] "
                }  rounded-xl`}
              >
                <span
                  className={`card-subtitle mb-2 text-sm ${
                    isDarkMode ? "text-[#7a8383] " : "text-[#44566c] "
                  } font-normal `}
                  style={{ fontFamily: "Roboto, sans-serif" }}
                >
                  Semester [2021]
                </span>
                <h3
                  className={` font-medium text-[18px] ${
                    isDarkMode ? "text-white" : "text-black "
                  } mb-1`}
                  style={{ fontFamily: "poppins, sans-serif" }}
                >
                  Web Developer
                </h3>
                <p
                  className={`card-subtitle  text-base ${
                    isDarkMode ? "text-[#7a8383] " : "text-[#44566c] "
                  } font-normal `}
                  style={{ fontFamily: "Roboto, sans-serif" }}
                >
                  Semester project (personal project)
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="skills-area mb-4">
        <div className="row grid grid-cols-1  laptop:grid-cols-2 gap-x-8">
          <div className="skills">
            <div className="title">
              <h3
                className={` font-medium text-[24px] ${
                  isDarkMode ? "text-white " : "text-black "
                } mb-5`}
                style={{ fontFamily: "poppins, sans-serif" }}
              >
                Working Skills
              </h3>
            </div>
            <div className="skill-bar mb-[30px]">
              <div
                className={`title-wrap flex justify-between items-center mb-[7px] ${
                  isDarkMode ? "text-[#7a8383] " : "text-[#44566c] "
                }  text-base font-normal`}
              >
                <div
                  className="title"
                  style={{ fontFamily: "poppins, sans-serif" }}
                >
                  Web Design
                </div>
                <span style={{ fontFamily: "poppins, sans-serif" }}>85%</span>
              </div>
              <div className="progress-bar-wraper h-[6px] bg-[#edf2f2] rounded-md">
                <div className="progress w-[85%] bg-[#ff6464] h-full rounded-md"></div>
              </div>
            </div>
            <div className="skill-bar mb-[30px]">
              <div
                className={`title-wrap flex justify-between items-center mb-[7px] ${
                  isDarkMode ? "text-[#7a8383] " : "text-[#44566c] "
                }  text-base font-normal`}
              >
                <div
                  className="title"
                  style={{ fontFamily: "poppins, sans-serif" }}
                >
                  Mobile App
                </div>
                <span style={{ fontFamily: "poppins, sans-serif" }}>75%</span>
              </div>
              <div className="progress-bar-wraper h-[6px] bg-[#edf2f2] rounded-md">
                <div className="progress w-[75%] bg-[#9272d4] h-full rounded-md"></div>
              </div>
            </div>
            <div className="skill-bar mb-[30px]">
              <div
                className={`title-wrap flex justify-between items-center mb-[7px] ${
                  isDarkMode ? "text-[#7a8383] " : "text-[#44566c] "
                }  text-base font-normal`}
              >
                <div
                  className="title"
                  style={{ fontFamily: "poppins, sans-serif" }}
                >
                  Figma
                </div>
                <span style={{ fontFamily: "poppins, sans-serif" }}>80%</span>
              </div>
              <div className="progress-bar-wraper h-[6px] bg-[#edf2f2] rounded-md">
                <div className="progress w-[80%] bg-[#5185d4] h-full rounded-md"></div>
              </div>
            </div>
            <div className="skill-bar mb-[30px]">
              <div
                className={`title-wrap flex justify-between items-center mb-[7px] ${
                  isDarkMode ? "text-[#7a8383] " : "text-[#44566c] "
                }  text-base font-normal`}
              >
                <div
                  className="title"
                  style={{ fontFamily: "poppins, sans-serif" }}
                >
                  Python
                </div>
                <span style={{ fontFamily: "poppins, sans-serif" }}>60%</span>
              </div>
              <div className="progress-bar-wraper h-[6px] bg-[#edf2f2] rounded-md">
                <div className="progress w-[60%] bg-[#ca56f2] h-full rounded-md"></div>
              </div>
            </div>
          </div>
          <div className="knowledges">
            <div className="title">
              <h3
                className={` font-medium text-[24px] ${
                  isDarkMode ? "text-white " : "text-black "
                } mb-5`}
                style={{ fontFamily: "poppins, sans-serif" }}
              >
                Languages
              </h3>
            </div>
            <div className="tags">
              <span
                className={`tag inline-block text-base font-normal ${
                  isDarkMode ? "bg-[#1d1d1d] text-[#7a8383] " : "bg-[#edf2f2] "
                } rounded-lg py-2 px-5 mr-4 mb-4`}
              >
                C/C++
              </span>
              <span
                className={`tag inline-block text-base font-normal ${
                  isDarkMode ? "bg-[#1d1d1d] text-[#7a8383] " : "bg-[#edf2f2] "
                } rounded-lg py-2 px-5 mr-4 mb-4`}
              >
                HTML5
              </span>
              <span
                className={`tag inline-block text-base font-normal ${
                  isDarkMode ? "bg-[#1d1d1d] text-[#7a8383] " : "bg-[#edf2f2] "
                } rounded-lg py-2 px-5 mr-4 mb-4`}
              >
                CSS3
              </span>
              <span
                className={`tag inline-block text-base font-normal ${
                  isDarkMode ? "bg-[#1d1d1d] text-[#7a8383] " : "bg-[#edf2f2] "
                } rounded-lg py-2 px-5 mr-4 mb-4`}
              >
                Javascript
              </span>

              <span
                className={`tag inline-block text-base font-normal ${
                  isDarkMode ? "bg-[#1d1d1d] text-[#7a8383] " : "bg-[#edf2f2] "
                } rounded-lg py-2 px-5 mr-4 mb-4`}
              >
                Java
              </span>
              <span
                className={`tag inline-block text-base font-normal ${
                  isDarkMode ? "bg-[#1d1d1d] text-[#7a8383] " : "bg-[#edf2f2] "
                } rounded-lg py-2 px-5 mr-4 mb-4`}
              >
                Python
              </span>
              <span
                className={`tag inline-block text-base font-normal ${
                  isDarkMode ? "bg-[#1d1d1d] text-[#7a8383] " : "bg-[#edf2f2] "
                } rounded-lg py-2 px-5 mr-4 mb-4`}
              >
                UI Design
              </span>
              <span
                className={`tag inline-block text-base font-normal ${
                  isDarkMode ? "bg-[#1d1d1d] text-[#7a8383] " : "bg-[#edf2f2] "
                } rounded-lg py-2 px-5 mr-4 mb-4`}
              >
                Reactjs
              </span>
              <span
                className={`tag inline-block text-base font-normal ${
                  isDarkMode ? "bg-[#1d1d1d] text-[#7a8383] " : "bg-[#edf2f2] "
                } rounded-lg py-2 px-5 mr-4 mb-4`}
              >
                Nodejs
              </span>
              <span
                className={`tag inline-block text-base font-normal ${
                  isDarkMode ? "bg-[#1d1d1d] text-[#7a8383] " : "bg-[#edf2f2] "
                } rounded-lg py-2 px-5 mr-4 mb-4`}
              >
                Tailwind css
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Resume;
