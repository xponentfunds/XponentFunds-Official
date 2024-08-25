import React from "react";
import "./style.scss";
import logo1 from "../../assets/Images/effort1.png";
import logo2 from "../../assets/Images/effort2.png";
import logo3 from "../../assets/Images/effort3.png";
import logo4 from "../../assets/Images/effort4.png";
import logo5 from "../../assets/Images/effort1.png";
import logo6 from "../../assets/Images/effort2.png";
import logo7 from "../../assets/Images/effort3.png";
import logo8 from "../../assets/Images/effort4.png";
import logo9 from "../../assets/Images/effort1.png";
import logo10 from "../../assets/Images/effort2.png";
import logo11 from "../../assets/Images/Group 82.png";
import logo12 from "../../assets/Images/Group 83.png";
import logo13 from "../../assets/Images/efforts.png";

import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

import BlurImg1 from "../../assets/BlurImg/effort1.png";
import BlurImg2 from "../../assets/BlurImg/effort2.png";
import BlurImg3 from "../../assets/BlurImg/effort3.png";
import BlurImg4 from "../../assets/BlurImg/effort4.png";
import BlurImg5 from "../../assets/BlurImg/effort1.png";
import BlurImg6 from "../../assets/BlurImg/effort2.png";
import BlurImg7 from "../../assets/BlurImg/effort3.png";
import BlurImg8 from "../../assets/BlurImg/effort4.png";
import BlurImg9 from "../../assets/BlurImg/effort1.png";
import BlurImg10 from "../../assets/BlurImg/effort2.png";
import BlurImg11 from "../../assets/BlurImg/Group 82.png";
import BlurImg12 from "../../assets/BlurImg/Group 83.png";
import BlurImg13 from "../../assets/BlurImg/efforts.png";

function Efforts() {
  const logos = [
    {
      id: 1,
      logo: logo1,
      PlaceholderImage: BlurImg1,
    },
    {
      id: 2,
      logo: logo2,
      PlaceholderImage: BlurImg2,
    },
    {
      id: 3,
      logo: logo3,
      PlaceholderImage: BlurImg3,
    },
    {
      id: 4,
      logo: logo4,
      PlaceholderImage: BlurImg4,
    },
    { id: 11, logo: logo11, PlaceholderImage: BlurImg11 },

    { id: 12, logo: logo12, PlaceholderImage: BlurImg12 },
    { id: 13, logo: logo13, PlaceholderImage: BlurImg13 },
    {
      id: 5,
      logo: logo5,
      PlaceholderImage: BlurImg5,
    },
    {
      id: 6,
      logo: logo6,
      PlaceholderImage: BlurImg6,
    },
    {
      id: 7,
      logo: logo7,
      PlaceholderImage: BlurImg7,
    },
    {
      id: 8,
      logo: logo8,
      PlaceholderImage: BlurImg8,
    },
    { id: 11, logo: logo11, PlaceholderImage: BlurImg11 },

    { id: 12, logo: logo12, PlaceholderImage: BlurImg12 },
    { id: 13, logo: logo13, PlaceholderImage: BlurImg13 },
    {
      id: 9,
      logo: logo9,
      PlaceholderImage: BlurImg9,
    },
    {
      id: 10,
      logo: logo10,
      PlaceholderImage: BlurImg10,
    },
    { id: 11, logo: logo11, PlaceholderImage: BlurImg11 },
    { id: 12, logo: logo12, PlaceholderImage: BlurImg12 },
    { id: 13, logo: logo13, PlaceholderImage: BlurImg13 },
  ];
  return (
    <section className="bg-[#201E1E]  overflow-hidden">
      <main className="container mx-auto">
        <div class="flex items-center px-5 md:px-0 pt-8 md:pt-16">
          <span class="pr-10 pb-12    font-bold font-Title text-2xl md:text-3xl lg:text-4xl lg:leading-[45px] xl:text-[45px] xl:leading-[58px] text-white ">
            Our Efforts <br /> Recognised By
          </span>
          <div class="border-b border-white flex-grow"></div>
        </div>
        <div className="marquee flex gap-10 items-center py-8 md:py-14 lg:py-20 ">
          <div className="marqueewrapper">
            {[...logos, ...logos].map((obj, index) => (
              <div key={index} className="logitem">
                <img
                  src={obj.logo}
                  alt=""
                  className="logo"
                  // PlaceholderSrc={obj.PlaceholderImage}
                  // effect="blur"
                />
              </div>
            ))}
          </div>
        </div>
      </main>
    </section>
  );
}

export default Efforts;
