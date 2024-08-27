import React, { useState } from "react";

function Whychooseus() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const reasonData = [
    {
      id: "01",
      title: "INDUSTRY EXPERT",
      description:
        "We provide real-time classes that we guarantee to a personalized follow-up support even if you have already completed our course. We are always here to support you with every little thing, letting you carry on with your learning and personal growth without interruption.",
    },
    {
      id: "02",
      title: "Internship & Job Opportunities",
      description:
        "Having finished our courses, you get the chance to follow some practical training and come to work. We have a great network that will help you start your career by learning both practical and field connections.",
    },
    {
      id: "03",
      title: "Market Expertise",
      description:
        "Acquire deep market understanding and professional guidance that turns complicated concepts simple. The combination of modern and old teaching methods enables the learner to practice approved to be very efficient.",
    },
    {
      id: "04",
      title: "Cutting-Edge Strategies & Tools",
      description:
        "Access new systems created by the professionals and use excellent programs. You will benefit from them the most during the market analysis to assist you in taking the best decisions.",
    },
  ];
  return (
    <section className="bg-[#201E1E] overflow-hidden ">
      <main className="container mx-auto px-4 md:px-6 py-8 md:py-12 lg:py-20 lg:px-10">
        <div className="flex flex-col items-center justify-center mb-12 md:mb-20">
          <h2
            className=" text-2xl md:text-3xl lg:text-4xl xl:text-[45px] text-center font-Title text-white mb-7"
            data-aos="fade-down"
            data-aos-duration="1000"
          >
            Why Choose Us?
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
        <div className="grid grid-cols-1 md:grid-cols-2  gap-4 md:gap-4 lg:gap-4 xl:gap-8">
          {reasonData.map((data, idx) => {
            return (
              <div
                className="flex flex-col gap-5 py-5 rounded-2xl group hover:bg-gradient-to-r p-4 transition-all duration-300 ease-in-out cursor-pointer hover:scale-105"
                onMouseEnter={() => setHoveredIndex(idx)}
                onMouseLeave={() => setHoveredIndex(null)}
                data-aos="flip-down"
                data-aos-duration="1000"
              >
                <div className="  flex items-center justify-center h-16 w-16 md:h-20 md:w-20  rounded-full font-poppins  text-2xl md:text-4xl font-semibold text-white bg-opacity-10 bg-white group-hover:text-[#201E1E] group-hover:bg-white ">
                  {data.id}
                </div>
                <h3
                  className={`font-Title text-lg md:text-2xl ${
                    hoveredIndex === idx ? "text-white" : "custom-text"
                  }    font-medium  `}
                >
                  {data.title}
                </h3>
                <p className="text-sm md:text-base font-poppins text-white  group-hover:">
                  {data.description}
                </p>
              </div>
            );
          })}
        </div>
      </main>
    </section>
  );
}

export default Whychooseus;
