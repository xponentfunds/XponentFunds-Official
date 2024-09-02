import React, { useState } from "react";
import hat from "../../assets/Svg/hat.svg";
import live from "../../assets/Svg/live.svg";
import chat from "../../assets/Svg/chat.svg";
import award from "../../assets/Svg/award.svg";
import unique from "../../assets/Images/common.png";
import team from "../../assets/Images/amit.png";
import bg from "../../assets/Images/Rectangle 122.png";
import hat1 from "../../assets/Svg/blackhat.svg";
import live1 from "../../assets/Svg/blacklive.svg";
import award1 from "../../assets/Svg/blackaward.svg";
import chat1 from "../../assets/Svg/blackchat.svg";
import { Link } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
function Benefits() {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const Benefits = [
    {
      id: 1,
      svg: hat,
      hover: hat1,
      description:
        "After completing our programme, you will receive ₹60,000 worth of services and doubt clearance for a whole year. This priceless support is intended to aid you in easily navigating any obstacles or doubts that may surface during your stock market trip.",
    },
    {
      id: 2,
      svg: award,
      hover: award1,
      description:
        "After completing our programme, you will receive ₹60,000 worth of services and doubt clearance for a whole year. This priceless support is intended to aid you in easily navigating any obstacles or doubts that may surface during your stock market trip.",
    },
    {
      id: 3,
      svg: live,
      hover: live1,
      description:
        "After completing our programme, you will receive ₹60,000 worth of services and doubt clearance for a whole year. This priceless support is intended to aid you in easily navigating any obstacles or doubts that may surface during your stock market trip.",
    },
    {
      id: 4,
      svg: chat,
      hover: chat1,
      description:
        "After completing our programme, you will receive ₹60,000 worth of services and doubt clearance for a whole year. This priceless support is intended to aid you in easily navigating any obstacles or doubts that may surface during your stock market trip.",
    },
  ];
  return (
    <section className="bg-[#201E1E] relative overflow-hidden ">
      <main className="mx-auto container  px-4 md:px-6 py-12 md:py-24 lg:px-10">
        <div className="flex flex-col items-center justify-center">
          <h2
            className="font-Title text-center text-2xl md:text-3xl lg:text-4xl xl:text-[45px] xl:leading-[70px]  text-white mb-7"
            data-aos="fade-down"
            data-aos-duration="1500"
          >
            <span className="custom-text">Additional Benefits</span>
          </h2>

          <svg
            width="1440"
            height="5"
            viewBox="0 0 1440 5"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="1440" height="5" fill="url(#paint0_diamond_28_3)" />
            <defs>
              <radialGradient
                id="paint0_diamond_28_3"
                cx="0"
                cy="0"
                r="1"
                gradientUnits="userSpaceOnUse"
                gradientTransform="translate(720 2.5) scale(720 2.5)"
              >
                <stop stop-color="white" />
                <stop offset="1" stop-opacity="0" />
              </radialGradient>
            </defs>
          </svg>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-16">
          {Benefits.map((data, idx) => {
            return (
              <>
                <div
                  key={idx}
                  data-aos="fade-up-right"
                  data-aos-duration="1000"
                  data-aos-delay={`${idx * 100}`}
                  onMouseEnter={() => setHoveredIndex(idx)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  <div className="rounded-xl bg-[#303030] bg-opacity-75 p-4 md:p-8 flex gap-5 flex-col group hover:bg-white  hover:bg-opacity-100 cursor-pointer">
                    <LazyLoadImage
                      src={hoveredIndex === idx ? data.hover : data.svg}
                      alt=""
                      className="self-start transition-all duration-300"
                    />
                    <p className="group-hover:text-black text-white font-poppins text-sm  md:text-base lg:text-xl xl:text-[22px]">
                      {data.description}
                    </p>
                  </div>
                </div>
              </>
            );
          })}
        </div>
        <div className="flex flex-col md:flex-row mt-8 md:mt-16 lg:mt-24 xl:mt-28 ">
          <div className="md:w-[40%] flex justify-center md:justify-start">
            <LazyLoadImage
              src={unique}
              alt=""
              className="md:w-4/5 h-full object-cover"
              data-aos="fade-right"
              data-aos-duration="1000"
            />
          </div>

          <div className="md:w-[60%] flex flex-col p-6 md:p-10 lg:p-14 bg-[#303030BF] rounded-xl bg-opacity-75 gap-3 md:gap-6 mt-8 md:mt-0">
            <h3
              className="font-Title text-2xl md:text-3xl lg:text-4xl xl:text-[45px] xl:leading-[60px] text-white"
              data-aos="zoom-in"
              data-aos-duration="1000"
            >
              Land your <span className="custom-text"> dream </span> job
            </h3>
            <h5 className="font-poppins text-sm md:text-base lg:text-lg text-[#DBDBDB]">
              Our course doesn’t just teach you skills—it helps you build a
              career. With our 100% job assistance, you'll get:
            </h5>
            <ul className="font-poppins text-sm md:text-base lg:text-lg text-[#DBDBDB] list-disc list-inside ">
              <li>
                Personalized Resume Building : Craft a standout resume with
                expert guidance.
              </li>
              <li>
                Interview Preparation : Ace your interviews with confidence
                through mock sessions and tailored feedback.
              </li>
              <li>
                Exclusive Job Opportunities : We connect you with top financial
                firms and companies.
              </li>
            </ul>
            <h5 className="font-poppins text-sm md:text-base lg:text-lg text-[#DBDBDB]">
              Join us, and let's turn your dreams into reality.
            </h5>

            <div className="flex gap-5">
              <Link to="/paymentbundleplan">
                <button
                  className="xl:text-xl text-base md:text-lg  py-1 md:py-2 px-4 md:px-5 font-Title bg-white text-black rounded-[45px]"
                  data-aos="zoom-in-up"
                  data-aos-duration="1000"
                >
                  Enroll Now
                </button>
              </Link>
              <a
                href="https://wa.me/918900177062?text=Hey%2C%20I%20have%20a%20query"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button
                  className="xl:text-xl text-base md:text-lg  py-1 md:py-2 px-4 md:px-5 font-Title  text-white rounded-[45px] border-white border-2"
                  data-aos="zoom-in-up"
                  data-aos-duration="1000"
                >
                  Enquire
                </button>
              </a>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 mt-10 md:mt-20 gap-8 md:gap-14">
          <div className="order-2 md:order-1 md:col-span-2 flex items-center">
            <div className="flex flex-col gap-3 md:gap-5">
              <h4
                className="font-Title text-2xl md:text-3xl lg:text-4xl xl:text-[45px] text-white"
                data-aos="fade-down"
                data-aos-duration="1000"
              >
                meet your <span className="custom-text">mentor</span>
              </h4>
              <h5
                className="font-Title  text-lg md:text-xl  xl:text-2xl text-white"
                data-aos="fade-down"
                data-aos-duration="1000"
              >
                Mr. Alok Mishra
              </h5>
              <h6
                className="font-Title bg-[#737373] py-1  md:py-2 px-3 md:px-4 text-base md:text-lg lg:text-xl  self-start rounded-[45px] text-white"
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                Finance Expert
              </h6>
              <p
                className="font-poppins text-sm md:text-base text-[#DBDBDB]"
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                Alok Mishra is a renowned stock market mentor with over 8 years
                of educating numerous individuals on how to succeed. His deep
                know-how and smart tips let learners move through the
                ever-changing stock trade with sureness.
                <br />
                With Mr. Mishra's help, you'll get a full grip on how the market
                moves, pick up ways to stay calm when buying and selling, and
                build strong mental power to use your thoughts well. His
                one-on-one style gives both newbies and pros the tools and
                self-control they need to hit big goals with their money.
                <br />
                Having Alok Mishra as your guide, you're set to make smart
                choices, up your trade wins, and open new doors to wealth in
                the stock market.
                <br />
              </p>
            </div>
          </div>
          <div className="order-1 md:order-2 md:cols-span-1">
            <div className="flex justify-center items-end">
              <LazyLoadImage
                src={bg}
                className="absolute h-[260px] md:h-[250px] lg:h-[340px] "
                alt=""
              />
              <LazyLoadImage
                src={team}
                alt=""
                className=" h-[300px]    md:h-[320px] lg:h-[390px] "
                data-aos="zoom-in-up"
                data-aos-duration="1500"
              />
            </div>
          </div>
        </div>
      </main>
    </section>
  );
}

export default Benefits;
