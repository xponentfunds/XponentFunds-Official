import React from "react";
// import bg from "../../assets/Images/Group 40.png";
import bg from "../../assets/Images/Group 401.png";
import mobile from "../../assets/Images/mobile.png";
import { LazyLoadImage } from "react-lazy-load-image-component";

function MainBanner() {
  return (
    <section
      className="h-[750px] md:h-[450px] lg:h-[480px]  w-full relative  "
      style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="mx-auto container py-12 px-4 md:px-0 ">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="order-2 md:order-1 h-60 md:h-0">
            <LazyLoadImage
              src={mobile}
              alt="Mobile Phone"
              data-aos="fade-right"
              data-aos-duration="1000"
              className=" absolute left-0  md:top-[-20%] lg:top-[-28%] h-[320px] md:h-[400px]  lg:h-[480px] xl:h-[560px]"
            />
          </div>
          <div className="order-1 md:order-2">
            <div className="flex flex-col gap-5 text-white">
              <h5
                className="font-poppins text-lg md:text-2xl "
                data-aos="fade-down"
                data-aos-duration="1000"
              >
                Welcome to
              </h5>
              <h3
                className="font-Title  text-2xl md:text-3xl lg:text-4xl xl:text-[45px] "
                data-aos="fade-down"
                data-aos-duration="1000"
              >
                Xponent Funds
              </h3>
              <p
                className="font-poppins text-sm lg:text-base"
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                Welcome to Xponent Funds, your superior guide in fine financial
                knowledge and independence. We provide live interactive courses
                to you to make you skilled with all the required knowledge and
                tools for getting success in the stock market. We give valuable
                certifications and internship opportunities, ensuring that the
                support is given after the course runs as well. For more than
                five years, we have been consistent in empowering the clients
                through the mastery of consulting services we offer.
              </p>
              <a
                href="https://wa.me/918900177062?text=Hey%2C%20I%20have%20a%20query"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="btncustom  group self-start ">
                  <span className="custom-text">Whatsapp Now</span>
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MainBanner;
