// eslint-disable-next-line no-unused-vars
import react from "react";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

import { useDarkMode } from "./DarkModeContex";

function Contact() {
  const { isDarkMode } = useDarkMode();
  const [successMessage, setSuccessMessage] = useState("");
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_xa1ljec", "template_zjcaw3c", form.current, {
        publicKey: "f4044pYfbOKd1O6LA",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          setSuccessMessage("Your message has been sent successfully!");
          form.current.reset(); // Clear the form fields
          setTimeout(() => {
            setSuccessMessage("");
          }, 5000);
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <div
      className={`contact-area ${
        isDarkMode ? "bg-black " : "bg-white "
      } rounded-[20px]  px-4 laptop:px-[60px] pt-[60px]  pb-4`}
    >
      <div className="contact-heading mb-4">
        <h2
          className={`text-[36px] relative inline-block ${
            isDarkMode ? "text-white " : "text-black "
          } mt-0 font-bold leading-[1.5px]`}
        >
          Contact
          <div className="absolute w-[100px] tablet:w-[200px] h-[3px] bg-gradient-to-r from-red-500 to-pink-500 left-[122%] top-1/2 -translate-y-1/2 rounded-[5px]"></div>
        </h2>
      </div>
      <div
        className={`form-area ${
          isDarkMode ? "bg-[#0d0d0d]" : "bg-[#f8fbfb] "
        } rounded-[20px] py-[60px] px-5 laptop:px-[45px]`}
      >
        <h5
          className={`text-[25px] ${
            isDarkMode ? "text-[#a6a6a6]" : "text-[#44566c] "
          } mb-[13px] font-normal leading-normal capitalize`}
          style={{ fontFamily: "poppins, sans serif" }}
        >
          I&apos;m Always Open To Discussing Product
        </h5>
        <h5
          className={`text-[25px] ${
            isDarkMode ? "text-white " : "text-black "
          } mb-[45px] font-bold leading-normal lowercase`}
          style={{ fontFamily: "poppins, sans serif" }}
        >
          design work or partnerships.
        </h5>
        <form ref={form} onSubmit={sendEmail} className="contact-form">
          <div className="form-input mb-[60px]">
            <label
              htmlFor="name"
              className={`input-lable text-base inline-block font-medium capitalize leading-none cursor-pointer ${
                isDarkMode ? "text-[#a6a6a6] " : "text-[#44566c] "
              } font-sans`}
            >
              Name *
            </label>
            <input
              type="text"
              name="from_name"
              className={`input-field h-[40px] text-sm font-sans block w-full outline-none border-b border-[#b5b5b5] ${
                isDarkMode ? "text-white " : ""
              } bg-transparent transition duration-300 origin-top `}
            />
          </div>
          <div className="form-input mb-[60px]">
            <label
              htmlFor="email"
              className={`input-lable text-base inline-block font-medium capitalize leading-none cursor-pointer ${
                isDarkMode ? "text-[#a6a6a6] " : "text-[#44566c] "
              } font-sans`}
            >
              Email *
            </label>
            <input
              type="email"
              name="from_email"
              className={`input-field h-[40px] text-sm font-sans block w-full outline-none border-b border-[#b5b5b5] ${
                isDarkMode ? "text-white " : ""
              } bg-transparent transition duration-300 origin-top `}
            />
          </div>
          <div className="form-input mb-[60px]">
            <label
              htmlFor="message"
              className={`input-lable text-base inline-block font-medium capitalize leading-none cursor-pointer ${
                isDarkMode ? "text-[#a6a6a6] " : "text-[#44566c] "
              } font-sans`}
            >
              Message *
            </label>
            <textarea
              name="message"
              className={`input-field h-[40px] text-sm font-sans block w-full outline-none border-b border-[#b5b5b5] ${
                isDarkMode ? "text-white " : ""
              } bg-transparent transition duration-300 origin-top `}
              cols={30}
              rows={10}
            />
          </div>
          <div className="btn mb-2">
            <button
              className={`form-btn text-base text-[#1a1a1a] cursor-pointer hover:text-white font-sans font-medium h-[50px] w-[133px] border border-[#44566c] rounded-xl ${
                isDarkMode ? "bg-[#0d0d0d] text-white" : "bg-[#f8fbfb] "
              } hover:bg-gradient-to-r from-red-500 to-pink-500 hover:border-transparent duration-300`}
              type="submit"
              value="send"
              // onSubmit={sendEmail}
            >
              Submit
            </button>
          </div>
        </form>
        {successMessage && (
          <p className={`text-${isDarkMode ? "white" : "black"}`}>
            {successMessage}
          </p>
        )}
      </div>
    </div>
  );
}

export default Contact;
