import React, { useState } from "react";
import webinar from "../../assets/Images/coursae.png";
import { Link } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";

function Courses() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const Coursedata = [
    {
      id: 1,
      title: "Phase 1 Plan",
      Amount: "₹2633/- only",
      subdata: [
        <li>Phase 1 of our course</li>,
        <li>Doubt Support</li>,
        <li>Chat Support</li>,
        <li>Complimentary excess</li>,
      ],
    },
    {
      id: 1,
      title: "Phase 2 Plan",
      Amount: "₹2633/- only",
      subdata: [
        <li>Phase 2 of our course</li>,
        <li>Doubt Support</li>,
        <li>Chat Support</li>,
        <li>Complimentary excess</li>,
      ],
    },
    {
      id: 1,
      title: "Phase 3 Plan",
      Amount: "₹2633/- only",
      subdata: [
        <li>Phase 3 of our course</li>,
        <li>Doubt Support</li>,
        <li>Chat Support</li>,
        <li>No Additional Benefits</li>,
      ],
    },
    {
      id: 1,
      title: "Premium Plan",
      Amount: "₹7999/- only",
      subdata: [
        <li>Phase 1, 2, 3 of our course</li>,
        <li>Doubt Support</li>,
        <li>Chat Support</li>,
        <li>Complimentary excess</li>,
      ],
    },
  ];
  return (
    <section className="bg-[#201E1E] overflow-hidden ">
      <main className="mx-auto container px-4 md:px-0 py-12 md:py-24">
        <div className="mb-12 md:mb-20 flex flex-col justify-center items-center">
          <h2
            className="mb-7 text-2xl md:text-3xl lg:text-4xl xl:text-[45px] text-center font-Title custom-text"
            data-aos="fade-down"
            data-aos-duration="1500"
          >
            Our course
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
        <div className=" bg-[#303030BF] bg-opacity-75  rounded-xl p-6 md:p-11 ">
          <div className="grid grid-cols-1 md:grid-cols-2 ">
            <div
              className={` md:w-[350px] bg-white flex flex-col  py-5 px-6  rounded-lg   text-black 
                 `}
              data-aos="zoom-in-up"
              data-aos-duration="1000"
            >
              <div
                className={`pb-2 flex flex-col gap-1 border-b-[1px] border-black
                     `}
              >
                <h3 className="font-poppins font-medium text-base md:text-lg">
                  Bundle Plan
                </h3>
                <p className="font-poppins font-bold text-base md:text-lg">
                  ₹7799/- only
                </p>
              </div>

              <ul className="py-5 font-medium">
                <li
                  className={` font-poppins text-sm md:text-base pb-4 text-black`}
                >
                  Includes:
                </li>

                <li
                  className={` font-poppins text-sm md:text-base pb-3 text-black`}
                >
                  Phase 1, 2, 3 of our course
                </li>
                <li
                  className={` font-poppins text-sm md:text-base pb-3 text-black`}
                >
                  1 to 1 Doubt Session with Mentor
                </li>
                <li
                  className={` font-poppins text-sm md:text-base pb-3 text-black`}
                >
                  Additional Benefits
                </li>
                <li
                  className={` font-poppins text-sm md:text-base pb-3 text-black`}
                >
                  Internship Opportunities
                </li>
                <li
                  className={` font-poppins text-sm md:text-base pb-3 text-black`}
                >
                  Easy EMI Options
                </li>
              </ul>
              <Link to="/paymentbundleplan">
                <button
                  className={`   text-black mt-6 
                    btn
                  `}
                >
                  Enroll Now
                </button>
              </Link>
            </div>
            <div className="flex justify-end mt-10 md:mt-0">
              <LazyLoadImage
                src={webinar}
                alt="Course Image"
                className="w-auto lg:w-[460px] xl:w-[520px] object-cover"
                data-aos="fade-left"
                data-aos-duration="1000"
              />
            </div>
          </div>
        </div>
        {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-4 lg:gap-4 xl:gap-8">
          {Coursedata.map((course, idx) => {
            return (
              <div data-aos="zoom-in-up" data-aos-duration="1000">
                <div
                  key={idx}
                  className={`flex flex-col  py-5 px-6  rounded-2xl  hover:shadow-lg hover:-translate-y-3 transition-transform duration-300 ease-in-out transform group text-white bg-white bg-opacity-10 text-white" hover:bg-white  hover:text-black
                 `}
                  onMouseEnter={() => setHoveredIndex(idx)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  
                  <div
                    className={`pb-2 flex flex-col gap-1 border-b-[1px] group-hover:border-b-black group-hover:border-opacity-80 border-opacity-80  border-b-white  
                     `}
                  >
                    
                    <h3 className="font-poppins font-medium text-base md:text-lg">
                      {course.title}
                    </h3>
                    <p className="font-poppins font-bold text-base md:text-lg">
                      {course.Amount}
                    </p>
                  </div>

                  <ul className="py-5">
                    <li
                      className={` font-poppins text-sm md:text-base pb-4 text-[#C1C1C1] group-hover:text-black`}
                    >
                     
                      Includes:
                    </li>
                    {course.subdata.map((item, i) => (
                      <li
                        key={i}
                        className={` font-poppins text-sm md:text-base pb-1 text-[#C1C1C1] group-hover:text-black`}
                      >
                        
                        {item}
                      </li>
                    ))}
                  </ul>
                  <button
                    className={`btnwhite   text-black mt-2  ${
                      hoveredIndex === idx ? "btn" : "btnwhite"
                    }`}
                  >
                 
                    Know more
                  </button>
                </div>
              </div>
            );
          })}
        </div> */}
      </main>
    </section>
  );
}

export default Courses;
