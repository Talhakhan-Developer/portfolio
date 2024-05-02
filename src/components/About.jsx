// eslint-disable-next-line no-unused-vars
import react from "react";
import { CgWebsite } from "react-icons/cg";
import { MdOutlineAppShortcut } from "react-icons/md";
import { TfiRulerPencil } from "react-icons/tfi";
import { FaGitAlt } from "react-icons/fa6";
import { useDarkMode } from "./DarkModeContex";
function About() {
  const { isDarkMode } = useDarkMode();
  return (
    <div
      className={`about-area  ${
        isDarkMode ? "bg-black " : "bg-white "
      } rounded-[20px] px-5 laptop:px-[60px] pt-[60px]  pb-4`}
    >
      <div className="about-heading mb-4">
        <h2
          className={`text-[36px] relative inline-block ${
            isDarkMode ? "text-white " : "text-black "
          } mt-0 font-bold leading-[1.5px]`}
        >
          About
          <div className="absolute w-[100px] tablet:w-[200px] h-[3px] bg-gradient-to-r from-red-500 to-pink-500 left-[122%] top-1/2 -translate-y-1/2 rounded-[5px]"></div>
        </h2>
        <p
          className={`mt-4 ${
            isDarkMode ? "text-[#7a8383]" : "text-[#44566c] "
          } text-base font-normal leading-normal`}
          style={{ fontFamily: "poppins, sans-serif" }}
        >
          As an aspiring Software Engineer, I possess a strong foundation in
          <strong> JavaScript</strong>, particularly in{" "}
          <strong> MERN Stack</strong> and <strong> web development</strong>,
          with a solid foundation in <strong> Python</strong>. Eager to
          contribute in a dynamic environment, I&apos;m self-motivated and
          hardworking.
        </p>
        <p
          className={`mt-4 ${
            isDarkMode ? "text-[#7a8383]" : "text-[#44566c] "
          } text-base font-normal leading-normal`}
          style={{ fontFamily: "poppins, sans-serif" }}
        >
          Seeking opportunities to apply my skills, I aim to grow professionally
          while making meaningful contributions to the organization&apos;s
          success
        </p>
      </div>
      <div className="i-do mb-4">
        <div className="i-do-title mb-[30px]">
          <h3
            className={`${
              isDarkMode ? "text-white " : "text-black "
            } leading-normal text-[24px] capitalize font-medium`}
            style={{ fontFamily: "poppins, sans-serif" }}
          >
            What I Do!
          </h3>
        </div>
        <div className="i-do-contents mb-[30px]">
          <div className="row grid grid-cols-1 gap-4  laptop:grid-cols-2 laptop:grid-rows-2">
            <div>
              <div
                className={`i-d0-item flex rounded-xl gap-[10px] tablet:gap-[20px] p-5 ${
                  isDarkMode
                    ? "bg-black border-[1px]  border-[#353535] "
                    : "bg-[#fff4f4]"
                }`}
              >
                <div className="icon text-[40px] text-[#d566ff]">
                  <CgWebsite />
                </div>
                <div className="text ">
                  <h4
                    className={` mb-[10px] font-medium text-[22px] ${
                      isDarkMode ? "text-white " : "text-black"
                    } `}
                    style={{ fontFamily: "poppins, sans-serif" }}
                  >
                    Web Development
                  </h4>
                  <p
                    className={`leading-[30px] ${
                      isDarkMode ? "text-[#7a8383]" : "text-[#44566c]"
                    } text-base font-normal `}
                  >
                    My proficiency in Web Development spans various technologies
                    and frameworks, including HTML, CSS, JavaScript, React,
                    Node.js, and MongoDB.
                  </p>
                </div>
              </div>
            </div>
            <div>
              <div
                className={`i-d0-item flex rounded-xl gap-[10px] tablet:gap-[20px] p-5 mb-[10px] ${
                  isDarkMode
                    ? "bg-black border-[1px] border-[#353535] "
                    : "bg-[#eef5fa]"
                }`}
              >
                <div className="icon text-[40px] text-[#dda10c]">
                  <MdOutlineAppShortcut />
                </div>
                <div className="text ">
                  <h4
                    className={` mb-[10px] font-medium text-[22px] ${
                      isDarkMode ? "text-white " : "text-black"
                    } `}
                    style={{ fontFamily: "poppins, sans-serif" }}
                  >
                    App Development
                  </h4>
                  <p
                    className={`leading-[30px] ${
                      isDarkMode ? "text-[#7a8383]" : "text-[#44566c]"
                    } text-base font-normal `}
                  >
                    I&apos;m a Flutter developer with a strong foundation in app
                    UI design and development. I create exceptional,
                    user-friendly apps that deliver high performance.
                  </p>
                </div>
              </div>
            </div>
            <div>
              <div
                className={`i-d0-item flex rounded-xl gap-[10px] tablet:gap-[20px] p-5 ${
                  isDarkMode
                    ? "bg-black border-[1px]  border-[#353535] "
                    : "bg-[#eef5fa]"
                }`}
              >
                <div className="icon text-[40px] text-[#ff6080]">
                  <TfiRulerPencil />
                </div>
                <div className="text ">
                  <h4
                    className={` mb-[10px] font-medium text-[22px] ${
                      isDarkMode ? "text-white " : "text-black"
                    } `}
                    style={{ fontFamily: "poppins, sans-serif" }}
                  >
                    UI/UX Design
                  </h4>
                  <p
                    className={`leading-[30px] ${
                      isDarkMode ? "text-[#7a8383]" : "text-[#44566c]"
                    } text-base font-normal `}
                  >
                    Design intuitive UIs with Figma & Adobe XD. Prioritize user
                    needs for intuitive, user-friendly experiences.
                  </p>
                </div>
              </div>
            </div>
            <div>
              <div
                className={`i-d0-item flex rounded-xl gap-[10px] tablet:gap-[20px] p-5 mt-[10px] ${
                  isDarkMode
                    ? "bg-black border-[1px]  border-[#353535] "
                    : "bg-[#fff4f4]"
                }`}
              >
                <div className="icon text-[40px] text-[#269fff]">
                  <FaGitAlt />
                </div>
                <div className="text ">
                  <h4
                    className={` mb-[10px] font-medium text-[22px] ${
                      isDarkMode ? "text-white " : "text-black"
                    } `}
                    style={{ fontFamily: "poppins, sans-serif" }}
                  >
                    Version Control
                  </h4>
                  <p
                    className={`leading-[30px] ${
                      isDarkMode ? "text-[#7a8383]" : "text-[#44566c]"
                    } text-base font-normal `}
                  >
                    Version control champion. Leverage Git & GitHub for seamless
                    collaboration, ensuring clean code.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
