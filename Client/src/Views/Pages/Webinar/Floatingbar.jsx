import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const FloatingBar = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const videoSection = document.getElementById("video-section");
      const faqSection = document.getElementById("faq-section");

      const videoSectionPosition = videoSection.getBoundingClientRect().top;
      const faqSectionBottom = faqSection.getBoundingClientRect().bottom;

      if (videoSectionPosition <= 0 && faqSectionBottom > window.innerHeight) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`shadow-xl flex flex-col md:flex-row  gap-2 md:gap-4 lg:gap-10 md:items-center fixed bottom-4 left-0 transform transition-transform duration-500 z-[100] bg-[#2C2C2C] p-5  lg:pl-10 xl:pl-20  md:py-6 md:px-9 ${
        isVisible ? "translate-x-0" : "-translate-x-full"
      }`}
      style={{ borderRadius: "40px 72px 72px 0px" }}
    >
      <div className="flex flex-col gap-1 md:gap-5">
        <h3 className="hidden sm:block font-Title text-xl md:text-3xl lg:text-4xl text-white">
          Join Us Now
        </h3>
       
        <h5 className=" font-poppins text-xs md:text-base lg:text-lg text-[#C1C1C1]">
          Hurry up and enroll in our webinar!
        </h5>
      </div>
      <div className="flex gap-2 md:gap-4">
        <Link to="/paymentwebinar">
          <button className="  self-start  flex gap-0.5 md:gap-3 items-center font-Title  text-sm md:text-lg xl:text-xl bg-custom-gradient rounded-[45px] px-3 py-2 md:px-7 md:py-4 text-white hover:bg-gradient-to-r transition-all duration-300 ease-in-out hover:scale-105">
            Enroll Now
            <svg
              width="19"
              height="17"
              viewBox="0 0 19 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.14842 15.1705C0.74282 15.5454 0.74282 16.1531 1.14842 16.528C1.55401 16.9028 2.21161 16.9028 2.61721 16.528L1.14842 15.1705ZM18.9888 1C18.9888 0.469887 18.5238 0.0401451 17.9502 0.0401449L8.60281 0.0401456C8.02921 0.0401453 7.56422 0.469888 7.56422 1C7.56422 1.53011 8.02921 1.95986 8.60281 1.95986L16.9116 1.95986L16.9116 9.6387C16.9116 10.1688 17.3766 10.5986 17.9502 10.5986C18.5238 10.5986 18.9888 10.1688 18.9888 9.6387L18.9888 1ZM2.61721 16.528L18.6846 1.67872L17.2158 0.321281L1.14842 15.1705L2.61721 16.528Z"
                fill="white"
              />
            </svg>
          </button>
        </Link>
        {/* <button className="group self-start font-Title text-sm md:text-lg xl:text-xl bg-white rounded-[45px] px-3 md:px-7  py-2 md:py-4 transition-all duration-300 ease-in-out hover:scale-105 ">
          <span className="custom-text  ">View Plan</span>
        </button> */}
      </div>
    </div>
  );
};

export default FloatingBar;
