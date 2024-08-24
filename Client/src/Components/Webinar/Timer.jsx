import React from "react";
import bg from "../../assets/Images/Rectangle 30.png";

import { useTimer } from "react-timer-hook";
import { Link } from "react-router-dom";

function Timer() {
  const getExpiryTime = () => {
    const time = new Date();
    time.setMinutes(time.getMinutes() + 15);
    // time.setHours(time.getHours() + 1);
    return time;
  };

  const { seconds, minutes, hours, restart } = useTimer({
    expiryTimestamp: getExpiryTime(),
    onExpire: () => {
      restart(getExpiryTime(), true);
    },
  });

  // Helper function to extract digits
  const getDigits = (number) => {
    const digits = String(number).padStart(2, "0").split("");
    return digits;
  };

  const hoursDigits = getDigits(hours);
  const minutesDigits = getDigits(minutes);
  const secondsDigits = getDigits(seconds);
  return (
    <section
      className="h-[400px] md:h-[450px] lg:h-[500px]  w-full relative  overflow-hidden"
      style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="mx-auto container py-12 px-4 md:px-0 md:py-24 ">
        <div className="flex flex-col gap-3 md:gap-5 lg:gap-8 items-center justify-center">
          <h2
            className="text-2xl md:text-3xl  lg:text-[40px]  font-Title text-white text-center"
            data-aos="fade-down"
            data-aos-duration="1000"
          >
            Offer ends in
          </h2>
          <p
            className="text-base lg:text-lg font-poppins text-white text-center"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            "Don't miss out on this exclusive deal! Limited-time offer ends
            soon. Secure your spot now and take advantage of incredible savings
            before time runs out!"
          </p>
          <div className="timer flex gap-4 ">
            <div className="flex flex-col gap-4 items-center justify-center">
              <div className="flex gap-2 items-center text-white  ">
                <h3
                  className="font-poppins  font-semibold bg-black p-2 md:p-4  text-2xl md:text-3xl lg:text-4xl rounded-md"
                  data-aos="flip-up"
                  data-aos-duration="1000"
                >
                  {hoursDigits[0]}
                </h3>

                <h3
                  className="font-poppins  font-semibold bg-black p-2 md:p-4  text-2xl md:text-3xl lg:text-4xl rounded-md"
                  data-aos="flip-up"
                  data-aos-duration="1000"
                >
                  {hoursDigits[1]}
                </h3>
              </div>
              <p
                className="font-poppins text-sm md:text-base lg:text-lg font-medium text-white"
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                Hour
              </p>
            </div>
            <h3 className="font-poppins  font-semibold    text-2xl md:text-3xl lg:text-4xl text-white pt-4">
              :
            </h3>
            <div className="flex flex-col gap-4 items-center justify-center">
              <div className="flex gap-2 items-center text-white  ">
                <h3
                  className="font-poppins  font-semibold bg-black p-2 md:p-4  text-2xl md:text-3xl lg:text-4xl rounded-md  "
                  data-aos="flip-up"
                  data-aos-duration="1000"
                >
                  {minutesDigits[0]}
                </h3>

                <h3
                  className="font-poppins  font-semibold bg-black p-2 md:p-4  text-2xl md:text-3xl lg:text-4xl rounded-md"
                  data-aos="flip-up"
                  data-aos-duration="1000"
                >
                  {minutesDigits[1]}
                </h3>
              </div>
              <p
                className="font-poppins text-sm md:text-base lg:text-lg font-medium text-white"
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                Minutes
              </p>
            </div>
            <h3 className="font-poppins  font-semibold    text-2xl md:text-3xl lg:text-4xl  text-white pt-4">
              :
            </h3>
            <div className="flex flex-col gap-4 items-center justify-center">
              <div className="flex gap-2 items-center text-white  ">
                <h3
                  className="font-poppins  font-semibold bg-black p-2 md:p-4  text-2xl md:text-3xl lg:text-4xl rounded-md"
                  data-aos="flip-up"
                  data-aos-duration="1000"
                >
                  {secondsDigits[0]}
                </h3>

                <h3
                  className="font-poppins  font-semibold bg-black p-2 md:p-4  text-2xl md:text-3xl lg:text-4xl rounded-md"
                  data-aos="flip-up"
                  data-aos-duration="1000"
                >
                  {secondsDigits[1]}
                </h3>
              </div>
              <p
                className="font-poppins text-sm md:text-base lg:text-lg font-medium text-white"
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                Seconds
              </p>
            </div>
          </div>
          <Link to = "/paymentwebinar">
          <button
            className="self-center xl:text-xl text-base md:text-lg  py-2 px-5 font-Title bg-white text-black rounded-[45px] "
            data-aos="zoom-in-up"
            data-aos-duration="1000"
          >
            Enroll Now
          </button>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Timer;
