import React from "react";

import "./style2.scss";

function Testimonials() {
  const userdata = [
    {
      id: 1,
      name: "Rohan Mehta",
      date: "15 Jun 2023",
      description:
        "This webinar was truly life-changing! I’ve been trading for a few years, but after applying the strategies I learned, I’m finally seeing consistent profits. Mr. Alok Mishra’s guidance has completely transformed my approach to trading.",
    },
    {
      id: 2,
      name: "Priya Sharma",
      date: "09 Feb 2024",
      description:
        "I used to think trading was just another form of gambling, but this webinar changed my entire perspective. The practical insights and strategies shared by Mr. Mishra have helped me understand the market better, and I’m already seeing positive results!",
    },
    {
      id: 3,
      name: "Arun Verma",
      date: "23 Dec 2023",
      description:
        "After attending the webinar, I realized all the mistakes I had been making. The workshop was an eye-opener and provided me with the tools I needed to become more disciplined and profitable in my trades. I’m so grateful I attended!",
    },
    {
      id: 4,
      name: "Neha Patel",
      date: "17 Oct 2023",
      description:
        "I’ve always been interested in trading but didn’t know where to start. This webinar was perfect for someone like me, and now I feel confident and equipped to enter the market. I’m even considering purchasing the full course to deepen my knowledge!",
    },
    {
      id: 5,
      name: "Vikram Joshi",
      date: "05 Aug 2023",
      description:
        "I was skeptical at first, but this webinar exceeded my expectations. The strategies were easy to understand and apply, and I’ve already seen a noticeable improvement in my trading results. I highly recommend this to anyone serious about trading.",
    },
    {
      id: 6,
      name: "Kavita Reddy",
      date: "21 Jan 2024",
      description:
        "The webinar was incredibly insightful! I had been struggling to make consistent profits, but the techniques shared by Mr. Mishra have finally put me on the right track. I’m now seeing positive returns and couldn’t be happier!",
    },
    {
      id: 7,
      name: "Amit Singh",
      date: "02 May 2023",
      description:
        "This webinar was exactly what I needed to take my trading to the next level. The practical advice and community support are unmatched. I’ve become much more confident in my trades and am even planning to buy the advanced course soon!",
    },
    {
      id: 8,
      name: "Sakshi Desai",
      date: "14 Mar 2024",
      description:
        "I used to think trading was too risky, but this webinar taught me how to manage that risk effectively. The strategies are straightforward, and I’ve already started to see profits. I’m excited about the future and can’t wait to keep learning!",
    },
    {
      id: 9,
      name: "Rahul Kapoor",
      date: "28 Sep 2023",
      description:
        "Attending this webinar was one of the best decisions I’ve made. I’ve struggled with trading for years, but now I’m finally seeing consistent results. The strategies and insights shared by Mr. Mishra have been nothing short of life-changing.",
    },
    {
      id: 10,
      name: "Sneha Iyer",
      date: "11 Nov 2023",
      description:
        "This webinar completely shifted my mindset. I used to think of trading as a gamble, but now I understand the importance of strategy and discipline. My trades are more profitable, and I’m excited to keep improving!",
    },
  ];

  return (
    <section className="bg-[#201E1E] overflow-hidden ">
      <main className="container mx-auto px-4 md:px-6  py-12 md:py-24  relative">
        <div className="flex flex-col items-center justify-center">
          <h2
            className="font-Title font-normal text-2xl md:text-4xl md:leading-[48px] lg:text-5xl  lg:leading-[60px] xl:text-[54px] xl:leading-[71px] text-white mb-7 "
            data-aos="fade-down"
            data-aos-duration="1500"
          >
            What people <span className="custom-text">Say’s</span>
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
        <div className="flex md:gap-10 pt-9  md:pt-16  ">
          <div className="marquee flex gap-5 md:gap-10 items-center  ">
            <div className="marqueewrapper1">
              {[].concat(...Array(2).fill(userdata)).map((testimonial, idx) => {
                return (
                  <div className=" flex flex-col justify-between px-3 md:px-6 py-5 md:py-9 bg-black-gradient rounded-2xl border-[#565656] border-[1px]  w-[250px] h-[380px] md:w-[350px] md:h-[450px]  lg:w-[650px] lg:h-[280px]  mx-11">
                    <p className="text-left font-poppins text-sm md:text-base  text-[#B0B0B0] mb-4 text-wrap">
                      {testimonial.description}
                    </p>
                    <div className="flex flex-col md:flex-row justify-between items-center">
                      <div className="flex gap-2 items-center">
                        <svg
                          width="30"
                          height="30"
                          viewBox="0 0 30 30"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <circle cx="15" cy="15" r="15" fill="white" />
                          <path
                            d="M22 22V19C22 16.7909 20.2091 15 18 15H12C9.79086 15 8 16.7909 8 19V22"
                            stroke="black"
                          />
                          <circle cx="15" cy="9" r="3.5" stroke="black" />
                        </svg>

                        <h3 className="text-base md:text-lg lg:text-xl font-semibold text-white font-poppins ">
                          {testimonial.name}
                        </h3>
                      </div>
                      <h5 className="font-poppins md:text-base text-xs lg:text-lg text-white">
                        {testimonial.date}
                      </h5>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </main>
    </section>
  );
}

export default Testimonials;
