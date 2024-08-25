import React from "react";
// import prop from "../../assets/Images/Rectangle 44.png";
import prop from "../../assets/Images/Rectangle 441.png";
import transparent from "../../assets/Images/Rectangle 13.png";
import { LazyLoadImage } from "react-lazy-load-image-component";

function Consultation() {
  return (
    <section className="bg-black overflow-hidden ">
      <main className="container mx-auto py-12 md:py-24 relative">
        <div className="flex justify-center items-center">
          <LazyLoadImage
            src={transparent}
            alt=""
            className="h-[200px] md:h-[400px] absolute top-0 right-0 z-10"
          />
          <LazyLoadImage
            src={transparent}
            alt=""
            className="h-[200px] md:h-[400px] absolute bottom-0 left-0 z-10"
          />
          <div className="rounded-3xl  flex flex-col gap-8 bg-[#282828] p-4 md:p-8 w-[80%] justify-center items-center gradient-border">
            <h2
              data-aos="fade-down"
              data-aos-duration="1000"
              className="  text-2xl md:text-3xl lg:text-4xl xl:text-[45px] font-Title text-center text-white"
            >
              Book Free <span className="custom-text">consultation</span>
            </h2>
            <h5
              className="font-poppins text-lg md:text-2xl text-white text-center"
              data-aos="fade-right"
              data-aos-duration="1000"
            >
              Come on, Book a free consult with the expert.
            </h5>
            <div className="flex flex-col ">
              <LazyLoadImage
                src={prop}
                alt="Booking Image"
                className="h-[200px] md:h-[350px] md:w-[400px] "
                data-aos="zoom-in-up"
                data-aos-duration="1000"
                // data-aos-easing="ease-in-out"
              />
              <a
                href="https://calendly.com/xponentfunds"
                target="_blank"
                rel="noopener noreferrer"
                className="btncustom self-center relative z-20"
              >
                <span className="custom-text">Book Now</span>
              </a>
            </div>
          </div>
        </div>
      </main>
    </section>
  );
}

export default Consultation;
