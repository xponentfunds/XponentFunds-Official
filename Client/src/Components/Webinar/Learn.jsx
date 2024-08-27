import React from "react";
// import team from "../../assets/Images/member.png";
import team from "../../assets/Images/amit.png";
import bg from "../../assets/Images/Rectangle 122.png";
import { LazyLoadImage } from "react-lazy-load-image-component";

function Learn() {
  const learnData = [
    { id: 1, name: "Market Analysis and understanding" },
    { id: 2, name: "Stop Loss Hunting Strategy" },
    { id: 3, name: "How to Draw Supply and Demand Zone" },
    { id: 4, name: "Risk Management" },
    { id: 5, name: "95% Accurate swing Trading" },
  ];
  return (
    <section className="bg-[#201E1E] overflow-hidden ">
      <main className="container mx-auto px-4 md:px-6 lg:px-10 py-12 md:py-24">
        <div className="flex flex-col gap-3 md:gap-5">
          <h2
            className="font-Title text-2xl md:text-3xl lg:text-4xl xl:text-[45px] text-white"
            data-aos="fade-down"
            data-aos-duration="1000"
          >
            THINGS YOU'LL LEARN IN THIS{" "}
            <span className="custom-text">MASTERCLASS</span>
          </h2>
        </div>
        <div className="py-10 md:py-16  border-b-[1px] border-b-[#6B6B6B]">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-10  ">
            {learnData.slice(0, 3).map((data, idx) => {
              return (
                <div
                  key={idx}
                  data-aos="fade-up-right"
                  data-aos-duration="1000"
                  data-aos-delay={idx * 100}
                >
                  <div className=" bg-[#2C2C2C] cursor-pointer flex justify-center items-center p-6 group hover:bg-white hover:scale-105 transition-all ease-in-out  duration-300 h-full w-full">
                    <h3 className="font-poppins font-medium text-xl  md:text-2xl xl:text-[30px] xl:leading-[40px] text-center text-white group-hover:text-black">
                      {data.name}
                    </h3>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="flex flex-col md:flex-row items-center gap-5 md:gap-10 justify-center pt-5 md:pt-10">
            {learnData.slice(3, 5).map((data, idx) => {
              return (
                <div
                  key={idx}
                  data-aos="fade-up-right"
                  data-aos-duration="1000"
                  data-aos-delay={idx * 100}
                  className="w-full h-full md:w-auto md:h-auto"
                >
                  <div className=" bg-[#2C2C2C] cursor-pointer flex justify-center items-center p-6 group hover:bg-white hover:scale-105 transition-all ease-in-out  duration-300 h-full w-full">
                    <h3 className="font-poppins font-medium text-xl  md:text-2xl xl:text-[30px] xl:leading-[40px] text-center text-white group-hover:text-black">
                      {data.name}
                    </h3>
                  </div>
                </div>
              );
            })}
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
                Mr. Alok Mishra is a respected leader in the stock market, known
                for his deep expertise and dedication to empowering others. With
                over 8 years of experience, he has successfully guided thousands
                in mastering option trading.
                <br />
                As your lead mentor, Mr. Mishra will share valuable insights and
                actionable strategies to help you achieve significant milestones
                in your stock market journey. His proven success as a finance
                expert ensures you’ll be learning from one of the best.
              </p>
            </div>
          </div>
          <div className="order-1 md:order-2 md:cols-span-1">
            <div className="flex justify-center items-end">
              <LazyLoadImage
                src={bg}
                className="absolute h-[260px] md:h-[250px] lg:h-[340px] "
                alt="background image"
              />
              <LazyLoadImage
                src={team}
                alt="Mentor Image"
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

export default Learn;
