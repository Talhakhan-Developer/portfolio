import "./App.css";
// eslint-disable-next-line no-unused-vars
import react, { useState } from "react";
import { useDarkMode } from "./components/DarkModeContex";
import darkImage from "../src/assets/bg-dark-image.jpg";
import lightImage from "../src/assets/Bg-image.jpg";
import Heading from "./components/Heading";
import Profile from "./components/Profile";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Resume from "./components/Resume";
import Contact from "./components/Contact";
import Works from "./components/Works";
import Certificates from "./components/Certificates";

function App() {
  const [selectedItem, setSelectedItem] = useState("about");
  const { isDarkMode } = useDarkMode();
  const backgroundImage = isDarkMode ? darkImage : lightImage;

  return (
    <div
      className={`page-wrapper pt-5 laptop:pt-[50px] pb-[60px] bg-cover bg-center bg-fixed mobile:bg-fixed w-full font-sans font-normal text-body-text text-base leading-base`}
      style={{ background: `url(${backgroundImage})` }}
    >
      <Heading setSelectedItem={setSelectedItem} />
      <div className="container px-[15px] mx-auto mobile:px-6 tablet:px-8 latop:px-12 desktop:px-16">
        <div className="row flex flex-wrap">
          <Profile />
          <div className="second w-full laptop:w-2/3 desktop:w-2/3 px-4">
            <Navbar setSelectedItem={setSelectedItem} />
            {selectedItem === "about" && <About />}
            {selectedItem === "resume" && <Resume />}
            {selectedItem === "contact" && <Contact />}
            {selectedItem === "work" && <Works />}
            {selectedItem === "certificate" && <Certificates />}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
