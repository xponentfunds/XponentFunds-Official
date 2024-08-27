import React, { useState } from "react";
import Typewriter from "typewriter-effect";
// import heroImg from "../../assets/Images/heroimg.png";
import heroImg from "../../assets/Images/heroimg1.png";
import tradesvg from "../../assets/Svg/Trade.svg";
import { Link } from "react-router-dom";
import tradesvg2 from "../../assets/Svg/Trade2.svg";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import blurhero from "../../assets/BlurImg/heroimg.jpg";
import blurtrade1 from "../../assets/BlurImg/trade-accuracy.jpg";
import blurtrade2 from "../../assets/BlurImg/trade-accuracy (1).jpg";
function Herosection() {
  return (
    <>
      <section className="bg-[#201E1E] relative  overflow-hidden ">
        <div className="grid grid-cols-1 md:grid-cols-3  container mx-auto px-4 md:px-6 lg:px-10 pt-28 md:pt-48  lg:pt-64 pb-28 md:pb-32 lg:pb-44">
          <div className="col-span-2">
            <div className="flex flex-col gap-7">
              <h1 className="font-Title  text-2xl  leading-[45px] md:leading-[55px] md:text-3xl lg:text-4xl xl:text-[45px] lg:leading-[68px] font-normal text-white">
                UNLOCK THE SECRETS TO BECOME A{" "}
                <span className="text-custom-linear custom-text">
                  TOP-TIER
                  <Typewriter
                    options={{
                      strings: ["TRADER", "INVESTOR", "ANALYST"],
                      autoStart: true,
                      loop: true,
                      delay: 75,
                      deleteSpeed: 50,
                    }}
                    className="text-white"
                  />
                </span>
              </h1>
              <h2 className="font-poppins text-sm  md:text-base xl:text-lg text-white w-3/4">
                Unlock the secrets of the top 1% professional institutional
                traders with the Super Trader Program. Get unlimited access to
                powerful institutional trading ideas.
              </h2>
              <Link to="course">
                <button
                  className="font-Title text-base lg:text-lg xl:text-xl bg-custom-gradient rounded-[45px] px-7 py-4 text-white self-start hover:bg-gradient-to-r  transition-all duration-300 ease-in-out hover:scale-105 "
                  // onClick={() => setIsOpen(true)}
                >
                  GET STARTED
                </button>
              </Link>

              {/* <button className="font-Title text-base lg:text-lg xl:text-xl bg-custom-gradient rounded-[45px] px-7 py-4 text-white self-start self">
                GET STARTED
              </button> */}
            </div>
          </div>
          <div className="h-[450px]  md:h-0 block sm:hidden md:block">
            <LazyLoadImage
              src={tradesvg}
              PlaceholderSrc={blurtrade1}
              // effect="blur"
              alt="Trading accuracy"
              className=" floating  absolute z-[1]  right-[35%] top-[52%] md:top-[20%] md:right-[15%] lg:right-[25%]"
            />
            <LazyLoadImage
              src={heroImg}
              // PlaceholderSrc={blurhero}
              // effect="blur"
              className=" absolute w-[370px] h-[500px] md:w-[360px] md:h-[580px] lg:w-[510px] lg:h-[680px]  xl:w-[540px] xl:h-[700px] right-0 bottom-0  z-0"
              alt="Trading app"
              data-aos="fade-left"
              data-aos-duration="1000"
            />

            <LazyLoadImage
              src={tradesvg2}
              PlaceholderSrc={blurtrade2}
              // effect="blur"
              alt="Trading accuracy"
              className="floating  absolute z-[1] right-[55%]  md:right-[30%] bottom-[2%] md:bottom-[10%]"
            />
          </div>
        </div>
      </section>
    </>
  );
}

export default Herosection;
