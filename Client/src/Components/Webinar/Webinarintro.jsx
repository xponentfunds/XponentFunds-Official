import React, { useEffect, useRef, useState } from "react";
import bg from "../../assets/Images/Group 36.png";
import hand from "../../assets/Images/image 32.png";
import img1 from "../../assets/Images/image 35.png";

import CountUp from "react-countup";
import { Link } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";

const CountUpOnView = ({ start = 0, end, duration = 3, ...props }) => {
  const countUpRef = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
        } else {
          setInView(false);
        }
      },
      {
        threshold: 0.1,
      }
    );

    if (countUpRef.current) {
      observer.observe(countUpRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={countUpRef}>
      {inView && (
        <CountUp start={start} end={end} duration={duration} {...props} />
      )}
    </div>
  );
};
function Webinarintro() {
  return (
    <div className="bg-[#201E1E] py-20   md:py-32">
      <section
        className="h-[300px] md:h-[500px] lg:h-[500px] xl:h-[620px]  w-full relative  bg-[#201E1E] py-8 md:py-14 "
        style={{
          backgroundImage: `url(${bg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="mx-auto container  px-4 md:px-0 ">
          <div className="grid grid-cols-1 md:grid-cols-2 md:gap-10">
            <div className="flex ">
              <div className="flex flex-col gap-2 md:gap-5 lg:gap-8 text-white ">
                <h1 className="font-Title  text-2xl md:text-[28px] md:leading-[35px] lg:text-4xl xl:text-[40px] xl:leading-[54px]  ">
                  Turn the market in <br />
                  your favour by mastering
                  <span className="custom-text"> option </span>
                  <span className="custom-text">trading</span>
                </h1>

                <h4 className="font-poppins text-[#C1C1C1] text-base md:text-lg">
                  Enroll in this incredible webinar to master and elevate your
                  option trading skills!
                </h4>

                <h2 className="font-Title   text-2xl md:text-3xl lg:text-4xl text-white">
                  Just at <span className="font-semibold">₹49/-</span>
                </h2>
                <div className="flex gap-4">
                  <Link to="/paymentwebinar">
                    <button className="  self-start  flex gap-0.5 md:gap-3 items-center font-Title text-base md:text-lg xl:text-xl bg-custom-gradient rounded-[45px] px-3 py-2 md:px-7 md:py-4 text-white hover:bg-gradient-to-r transition-all duration-300 ease-in-out hover:scale-105">
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
                  {/* <button className="group self-start font-Title text-base md:text-lg xl:text-xl bg-white rounded-[45px] px-3 md:px-7  py-2 md:py-4 transition-all duration-300 ease-in-out hover:scale-105 ">
                    <span className="custom-text  ">View Plan</span>
                  </button> */}
                </div>
                <div className="flex gap-2 md:gap-4 mt-2 md:mt-4 lg:mt-6">
                  <div className=" flex flex-col gap-2 p-2 md:p-4 text-white bg-[#333333] rounded-xl">
                    <h5 className=" text-center text-lg md:text-2xl lg:text-3xl font-poppins">
                      22nd Sep
                    </h5>
                    <h6 className="font-Title text-xs md:text-sm text-center">
                      Date
                    </h6>
                  </div>
                  <div className="  flex flex-col gap-2 p-2 md:p-4 text-white bg-[#333333] rounded-xl">
                    <h5 className=" text-center text-lg md:text-2xl lg:text-3xl font-poppins">
                      11 0’clock
                    </h5>
                    <h6 className="font-Title text-xs md:text-sm text-center">
                      Time
                    </h6>
                  </div>
                  <div className="  flex flex-col gap-2 p-2 md:p-4 text-white bg-[#333333] rounded-xl">
                    <h5 className=" text-center text-lg md:text-2xl lg:text-3xl font-poppins">
                      Zoom
                    </h5>
                    <h6 className="font-Title text-xs md:text-sm text-center">
                      WorkShop
                    </h6>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex  relative h-[450px] md:h-auto ">
              <div className="bg-white rounded-xl p-1 md:p-3 floating absolute bottom-1/4 md:bottom-2/4  right-0 z-50 text-center">
                <h3 className="text-black font-poppins font-medium text-xl md:text-2xl lg:text-3xl mb-2">
                  <CountUpOnView start={0} end={307} duration={3} suffix="+" />
                </h3>
                <h5 className="text-black font-Title text-sm md:text-base">
                  Students
                </h5>
              </div>
              <div className="bg-white rounded-xl p-1 md:p-3 floating absolute bottom-0 md:bottom-1/4 right-0 z-50 text-center">
                <h3 className="text-black font-poppins font-medium text-xl md:text-2xl lg:text-3xl mb-2">
                  <CountUpOnView start={0} end={5893} duration={3} suffix="+" />
                </h3>
                <h5 className="text-black font-Title text-sm md:text-base">
                  Classes done
                </h5>
              </div>

              <LazyLoadImage
                src={img1}
                alt="Computer"
                className="absolute bottom-0 md:bottom-[20%] z-40   xl:right-1/3 w-48 md:w-52 lg:w-64 xl:w-auto"
              />
              <LazyLoadImage
                data-aos="zoom-in-up"
                data-aos-duration="1000"
                ata-aos-offset="0"
                src={hand}
                alt="Hand with Mobile Phone"
                className="absolute w-[220px] h-[350px] md:w-[300px] md:h-[500px] lg:h-auto lg:w-auto xl:h-auto xl:w-auto md:right-0 lg:right-1/4 bottom-[10%] md:-top-[15%] z-0 "
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Webinarintro;
