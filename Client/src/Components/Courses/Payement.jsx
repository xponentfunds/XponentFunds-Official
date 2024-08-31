import React, { useState } from "react";
import webinar from "../../assets/Images/coursae.png";
import { Link } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { LazyLoadImage } from "react-lazy-load-image-component";

function Payement() {
  const showToastMessage = (event) => {
    event.preventDefault();
    console.log("Button clicked!");
    toast.info("Please purchase the Phase One plan first.", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      // theme: "light",
    });
  };
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const data = [
    {
      id: 1,
      name: "Student or Working Professional",
      description: "looking for a passive or active income source",
    },
    {
      id: 2,
      name: "Don't know about",
      description:
        "Option Trading properly, but want to learn it from scratches",
    },
  ];
  const Coursedata = [
    {
      id: 1,
      title: "Phase 1 Plan",
      Amount: "₹2633/- only",
      description:
        "Get access to the Phase 1 of our course and make your first move in the Stock Market",
      subdata: [
        <li>Phase 1 of our course</li>,
        <li>Doubt Support</li>,
        <li>Chat Support</li>,
        <li>Complimentary excess</li>,
      ],
    },
    {
      id: 2,
      title: "Phase 2 Plan",
      Amount: "₹3933/- only",
      description:
        "Expand the scope of your learning from Phase 1 by progressing to Phase 2 of our course",
      subdata: [
        <li>Phase 2 of our course</li>,
        <li>Doubt Support</li>,
        <li>Chat Support</li>,
        <li>Complimentary excess</li>,
      ],
    },
    {
      id: 3,
      title: "Phase 3 Plan",
      Amount: "₹2933/- only",
      description:
        "Advance your learning even further as you enter Phase 3,  the final step of our course",
      subdata: [
        <li>Phase 3 of our course</li>,
        <li>Doubt Support</li>,
        <li>Chat Support</li>,
        <li>No Additional Benefits</li>,
      ],
    },
  ];
  return (
    <section className="bg-[#201E1E] relative overflow-hidden ">
      <main className="mx-auto container  px-4 md:px-6 py-8 md:py-12 lg:py-20 lg:px-10">
        <div className="flex flex-col items-center justify-center">
          <h2
            className="font-Title text-center text-3xl md:text-4xl lg:text-5xl lg:leading-[70px]  text-white mb-7"
            data-aos="fade-down"
            data-aos-duration="1500"
          >
            This <span className="custom-text">Course</span> is Designed for{" "}
            <br />
            You if You're
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
        <div className="grid md:grid-cols-2 gap-5 mt-14 ">
          {data.map((item, idx) => {
            return (
              <>
                <div
                  key={idx}
                  data-aos="fade-up-right"
                  data-aos-duration="1000"
                  data-aos-delay={`${idx * 200}`}
                >
                  <div className="px-6 py-7 rounded-xl bg-[#303030BF] bg-opacity-75 text-center flex flex-col gap-3 hover:scale-100 transition-all duration-300 group ease-in-out cursor-pointer hover:bg-white">
                    <h3 className="font-Title text-white  text-xl lg:text-2xl xl:text-3xl group-hover:text-black">
                      {item.name}
                    </h3>
                    <h5 className="font-poppins text-base md:text-lg lg:text-xl xl:text-[22px] text-[#777777] group-hover:text-slate-600">
                      {item.description}
                    </h5>
                  </div>
                </div>
              </>
            );
          })}
        </div>
        <div className="flex flex-col gap-5 md:gap-8 mt-10 md:mt-14 lg:mt-20">
          <h2
            className="font-Title text-center md:text-left text-2xl md:text-3xl lg:text-4xl xl:text-[45px] text-white mb-7"
            data-aos="fade-right"
            data-aos-duration="1000"
          >
            Our <span className="custom-text"> Bundle </span> plan
          </h2>
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
                  alt=""
                  className="w-auto lg:w-[460px] xl:w-[520px] object-cover"
                  data-aos="fade-left"
                  data-aos-duration="1000"
                />
              </div>
            </div>
          </div>
          <div class="flex items-center mt-8 md:mt-16">
            <div class="border-t  border-white flex-grow"></div>
            <span class="px-8 font-bold text-white font-poppins text-lg md:text-xl lg:text-2xl">
              OR
            </span>
            <div class="border-t border-white flex-grow"></div>
          </div>
          <div className="flex flex-col items-center justify-center mt-8 md:mt-16">
            <h2
              className="font-Title text-center text-3xl md:text-4xl lg:text-5xl lg:leading-[70px]  text-white mb-7"
              data-aos="fade-down"
              data-aos-duration="1500"
            >
              pay as you <span className="custom-text">Progess</span>
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
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 lg:gap-20 xl:gap-24 pt-14">
            {Coursedata.map((course, idx) => {
              return (
                <div data-aos="zoom-in-up" data-aos-duration="1000">
                  <div
                    key={idx}
                    className={ ` justify-between flex flex-col  py-5 px-6  rounded-2xl  hover:shadow-lg hover:-translate-y-3 transition-transform duration-300 ease-in-out transform group text-white bg-[#B7D8FF17] bg-opacity-10 text-white" hover:bg-white  hover:text-black h-full w-full
                 `}
                    onMouseEnter={() => setHoveredIndex(idx)}
                    onMouseLeave={() => setHoveredIndex(null)}
                  >
                    <div
                      className={`pb-3 flex flex-col gap-3 border-b-[1px] group-hover:border-b-black group-hover:border-opacity-80 border-opacity-80  border-b-white  
                     `}
                    >
                      <h3 className="font-poppins font-medium text-base md:text-lg">
                        {course.title}
                      </h3>
                      <p className="font-poppins font-bold text-base md:text-lg">
                        {course.Amount}
                      </p>
                      <p className="font-poppins text-sm md:text-base lg:text-lg">
                        {course.description}
                      </p>
                    </div>

                    <ul className="py-5">
                      <li
                        className={` font-poppins font-medium text-sm md:text-base pb-5 text-[#C1C1C1] group-hover:text-black`}
                      >
                        Includes:
                      </li>
                      {course.subdata.map((item, i) => (
                        <li
                          key={i}
                          className={` font-poppins font-medium text-sm md:text-base pb-3 text-[#C1C1C1] group-hover:text-black`}
                        >
                          {item}
                        </li>
                      ))}
                    </ul>
                    {idx === 0 ? (
                      <Link to="/paymentphaseoneplan">
                        <button
                          className={`btnwhite w-full text-black mt-2 ${
                            hoveredIndex === idx ? "btn" : "btnwhite"
                          }`}
                        >
                          Enroll Now
                        </button>
                      </Link>
                    ) : (
                      <Link onClick={showToastMessage}>
                        <button
                          className={`btnwhite flex items-center gap-2 w-full justify-center text-black mt-2 ${
                            hoveredIndex === idx ? "btn" : "btnwhite"
                          }`}
                        >
                          Not Available
                          <span className="h-8 w-8">
                            <svg
                              viewBox="0 0 512 512"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <title />
                              <g data-name="1" id="_1">
                                <path d="M380,450H143a15,15,0,0,1-15-15V213.66a15,15,0,0,1,15-15H380a15,15,0,0,1,15,15V435A15,15,0,0,1,380,450ZM158,420H365V228.66H158Z" />
                                <path d="M351.66,228.66H171.41a15,15,0,0,1-15-15V153.12a105.13,105.13,0,0,1,210.25,0v60.54A15,15,0,0,1,351.66,228.66Zm-165.25-30H336.66V153.12a75.13,75.13,0,0,0-150.25,0Z" />
                                <path d="M261.54,352.67a46.5,46.5,0,1,1,46.5-46.5A46.55,46.55,0,0,1,261.54,352.67Zm0-63a16.5,16.5,0,1,0,16.5,16.5A16.52,16.52,0,0,0,261.54,289.67Z" />
                                <path d="M261.54,389a15,15,0,0,1-15-15V337.67a15,15,0,1,1,30,0V374A15,15,0,0,1,261.54,389Z" />
                              </g>
                            </svg>
                          </span>
                        </button>
                      </Link>
                    )}
                    {/* <Link to="/paymentphaseoneplan">
                      <button
                        className={`btnwhite w-full  text-black mt-2  ${
                          hoveredIndex === idx ? "btn" : "btnwhite"
                        }`}
                      >
                        Buy Now
                      </button>
                    </Link> */}
                  </div>
                </div>
              );
            })}
            <ToastContainer />
          </div>
        </div>
      </main>
    </section>
  );
}

export default Payement;
