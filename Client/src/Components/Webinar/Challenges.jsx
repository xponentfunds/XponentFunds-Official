import React, { useState } from "react";

function Challenges() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const reasonData = [
    {
      id: "01",
      title: "Lack of Experience",
      description:
        "Easily getting lost in the financial markets? Build confidence and get the knowledge you need to start making right decisions.",
    },
    {
      id: "02",
      title: "Emotional Decision-Making",
      description:
        "Emotional trading bothering you? Learn how to manage your emotions and implement a trading plan with discipline.",
    },
    {
      id: "03",
      title: "Risk Management Issues",
      description:
        "Bad risk management draining you? Find out how to protect your capital for long-term success.",
    },
    {
      id: "04",
      title: "No Trading Plan",
      description:
        "No plan? Create a strategy and keep an eye on your goal through the road map to trading.",
    },
  ];
  return (
    <section className="bg-[#0B0B0B] overflow-hidden ">
      <main className="container mx-auto px-4 md:px-6 lg:px-10 py-12 md:py-24">
        <div className="flex justify-start mb-12">
          <h2
            className="font-Title text-2xl md:text-3xl lg:text-4xl xl:text-[46px] xl:leading-[60px] text-white"
            data-aos="fade-right"
            data-aos-duration="1000"
          >
            Struggling with These Challenges? <br /> Join Our Webinar to
            Overcome Them!
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2  gap-4 md:gap-10 lg:gap-14 xl:gap-16">
          {reasonData.map((data, idx) => {
            return (
              <div
                className="flex flex-col gap-5 py-7 rounded-2xl group hover:bg-gradient-to-r p-6 transition-all duration-300 ease-in-out cursor-pointer hover:scale-105"
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

export default Challenges;
