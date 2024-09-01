import React from "react";

import "./style2.scss";

function Testimonials() {
  const userdata = [
    {
      id: 1,
      name: "Chiranjit Das",
      date: "13 may 2023",
      description:
        "Chiranjit from Asansol here. As a salaried individual, I've always sought extra income streams, but previous attempts failed. However, Xponent Funds changed the game. Their live stock market course offers unmatched mentorship and clarity. It's a game-changer.",
    },
    {
      id: 2,
      name: "Ashish Chaudhary",

      date: "07 Aug 2023",
      description:
        "Ashish from Uttar Pradesh here. Despite being employed, I found Xponent Funds' live classes incredibly beneficial. The flexibility to schedule classes anytime enables learning alongside work commitments. Regardless of age, their courses offer valuable insights, making it accessible to anyone seeking financial literacy and success in the stock market.",
    },
    {
      id: 3,
      name: "Sukhen Gope",

      date: "21 dec 2023",
      description:
        "Hi, myself Sukhen, sharing my journey with Xponent Funds. Their live classes offer personalized mentorship and practical insights. What's remarkable is the flexibility; even with a job, I can manage my schedule for learning. It's a testament to their commitment to accessible financial education. Highly recommend for leveling up your investment game.",
    },
    {
      id: 4,
      name: "Shreya Banerjee",
      date: "19 jul 2023",
      description:
        "Shreya here, thrilled to share my journey with Xponent Funds. Bagging an internship with them was a game-changer. Their live classes offer personalized mentorship and practical insights, and the flexibility allowed me to balance learning with my schedule. Plus, earning a valuable certificate was the cherry on top. Highly recommend for anyone serious about diving into the world of investments.",
    },
    {
      id: 5,
      name: "Rajiv Mehta",
      date: "15 mar 2024",
      description:
        "Rajiv from Pune here. Xponent Funds' courses helped me find a job in the finance sector that I had been trying to land for years. Their 'Land Your Dream Job' program included with the course is life-changing. The mentors guide you through every step, making the entire journey smooth and successful.",
    },
    {
      id: 6,
      name: "Neha Sharma",
      date: "29 jan 2024",
      description:
        "I’m Neha from Jaipur. Being a single mother and working professional, finding time for upskilling was tough. But Xponent Funds’ flexible timings allowed me to complete the course at my own pace. The practical knowledge I gained here not only helped me understand the stock market better but also led to a promotion with a higher CTC. Highly recommended for working professionals.",
    },
    {
      id: 7,
      name: "Amit Roy",
      date: "17 jul 2024",
      description:
        "Amit from Kolkata. I was lost in the world of investments, not knowing where to start. But Xponent Funds gave me direction and a clear path to follow. Their live classes and mentorship are exactly what I needed to build my confidence and start investing wisely. I can’t thank them enough for their support.",
    },
    {
      id: 8,
      name: "Priya Reddy",
      date: "15 feb 2023",
      description:
        "Priya from Hyderabad here. The live course offered by Xponent Funds was all I needed to change my financial life. The sessions were engaging, the mentors were always there to guide me, and the community was incredibly supportive. If you’re serious about financial freedom, this is the course for you.",
    },
    {
      id: 9,
      name: "Sanjay Patel",
      date: "21 Aug 2023",
      description:
        "Sanjay from Ahmedabad. Xponent Funds' 'Land Your Dream Job' program is a must for anyone looking to make a mark in the finance industry. The resume-building sessions, mock interviews, and career guidance were top-notch. I landed a job with a reputed firm, thanks to the practical skills I acquired during the course.",
    },
    {
      id: 10,
      name: "Megha Joshi",
      date: "04 may 2024",
      description:
        "Hi, this is Megha from Delhi. I joined Xponent Funds for their internship opportunities, and I must say, it’s been the best decision. The hands-on experience, combined with their live classes, provided me with a deep understanding of the stock market. I’m now more confident in my investment decisions and am even considering a career change into finance.",
    },
    {
      id: 11,
      name: "Ankita Verma",
      date: "23 apr 2023",
      description:
        "Ankita from Lucknow here. Xponent Funds’ personalized mentorship is like no other. I was a complete novice, but their patient guidance and detailed explanations made everything clear. The flexibility of their course schedule allowed me to learn without compromising my job, and now, I feel empowered to make smarter financial decisions.",
    },
    {
      id: 12,
      name: "Rahul Gupta",
      date: "15 Nov 2023",
      description:
        "Rahul from Mumbai. The course at Xponent Funds helped me secure a higher-paying job in the finance sector. The practical insights and live trading sessions were instrumental in my learning. Their 'Land Your Dream Job' program included in the course is truly life-changing. If you're looking to advance your career in finance, this is the place to start.",
    },
    {
      id: 13,
      name: "Deepa Menon",
      date: "19 Oct 2023",
      description:
        "Deepa from Bangalore. Joining Xponent Funds was a turning point in my life. The flexibility of the course timings allowed me to continue my learning even while working full-time. I’ve gained invaluable knowledge and skills that have already started to pay off. The support from mentors is exceptional, and I can’t recommend this course enough.",
    },
    {
      id: 14,
      name: "Manoj Sinha",
      date: "11 Aug 2023",
      description:
        "Manoj from Chandigarh. I joined Xponent Funds' live stock market course with high hopes, and I wasn't disappointed. The mentorship, practical insights, and flexibility of scheduling made it possible for me to learn without stress. The knowledge I gained here helped me get a job with a higher CTC in a reputed firm. This course is truly worth it.",
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
