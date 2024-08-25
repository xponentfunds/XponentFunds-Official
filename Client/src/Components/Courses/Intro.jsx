import React from "react";
import { Link } from "react-router-dom";
// import shades from "../../assets/Images/Group 81.png";
import shades from "../../assets/Images/Group 811.png";
import mobileview1 from "../../assets/Images/mobileView.png";
import desktopview1 from "../../assets/Images/desktopView.png";
// import shades1 from "../../assets/Images/Ellipse 17.png";
// import shades2 from "../../assets/Images/Ellipse 21.png";
import shades1 from "../../assets/Images/Ellipse 171.png";
import shades2 from "../../assets/Images/Ellipse 211.png";
import { LazyLoadImage } from "react-lazy-load-image-component";

function Intro() {
  return (
    <div className="bg-[#201E1E] pt-24 md:pt-32 px-4 md:px-0  pb-10 md:pb-32 relative overflow-hidden">
      <section className="block md:hidden ">
        <div className="flex flex-col gap-4  text-white justify-center items-center">
          <button
            className="font-Title text-sm md:text-lg lg:text-xl rounded-[50px] px-4 md:px-5 bg-white bg-opacity-15 py-2 md:py-4 self-center  "
            data-aos="fade-down"
            data-aos-duration="1000"
          >
            Enhance Your Career
          </button>
          <h1
            className="font-Title  text-3xl leading-[40px]  text-center"
            data-aos="fade-right"
            data-aos-duration="1000"
          >
            <span className="custom-text">Stock Market</span>
            <br /> Basics to Pro
          </h1>
          <LazyLoadImage
            src={shades}
            alt=""
            className="absolute z-0 w-full h-full"
          />
          <LazyLoadImage
            src={mobileview1}
            alt=""
            data-aos="zoom-in-up"
            data-aos-duration="1000"
          />
          <p
            className="font-poppins text-sm lg:text-base text-center"
            data-aos="fade-left"
            data-aos-duration="1000"
          >
            This course is designed to give you a comprehensive understanding of
            the stock market and how it works. Whether you're a beginner looking
            to start investing or an experienced trader looking to improve your
            skills, this course is for you.
          </p>
          <Link to="/paymentbundleplan">
            <button className="btncustom  group self-center ">
              <span className="custom-text  ">Apply Now</span>
            </button>
          </Link>
        </div>
      </section>
      <section
        className="hidden md:block   w-full   container mx-auto rounded-[25px]  "
        // h-[650px] md:h-[450px] lg:h-[600px]
      >
        <img
          src={shades2}
          alt=""
          className=" absolute -top-1/3 -left-1/3 z-0 "
        />
        <img
          src={shades1}
          alt=""
          className=" absolute -bottom-1/2 right-0 z-0"
        />
        <div className="grid grid-cols-1 md:grid-cols-3 ">
          <div className=" md:col-span-2 p-4 md:p-0 md:pl-8 pt-6 md:pt-10 lg:pt-24">
            <div className="flex flex-col gap-2 md:gap-5 lg:gap-8 text-white">
              <button
                className="font-Title text-base md:text-lg lg:text-xl rounded-[50px] px-3 md:px-5 bg-white bg-opacity-55 py-2 md:py-4 self-start "
                data-aos="fade-down"
                data-aos-duration="1000"
              >
                Enhance Your Career
              </button>
              <h1
                className="font-Title  text-2xl md:text-3xl lg:text-4xl xl:text-[45px]  "
                data-aos="fade-right"
                data-aos-duration="1000"
              >
                <span className="custom-text">Stock Market </span>
                Basics to Pro
              </h1>
              <p
                className="font-poppins text-sm lg:text-base"
                data-aos="fade-left"
                data-aos-duration="1000"
              >
                This course is designed to give you a comprehensive
                understanding of the stock market and how it works. Whether
                you're a beginner looking to start investing or an experienced
                trader looking to improve your skills, this course is for you.
              </p>
              <Link to="/paymentbundleplan">
                <button className="btncustom  group self-start relative z-50 ">
                  <span className="custom-text  ">Apply Now</span>
                </button>
              </Link>
            </div>
          </div>
          <div className=" md:col-span-1  h-60 md:h-0 relative flex justify-center ">
            <LazyLoadImage
              src={desktopview1}
              alt=""
              data-aos="zoom-in-up"
              data-aos-duration="1000"
              className=" absolute right-0  h-[300px] md:h-[400px]  lg:h-[440px] xl:h-[500px]"
            />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Intro;
