import React from "react";
import bg from "../../assets/Images/Webinarbg2.png";
import certificate from "../../assets/Images/Certificate.png";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Link } from "react-router-dom";
function Certification() {
  return (
    <section
      className="h-[750px] md:h-[550px]  lg:h-[580px]  w-full relative  "
      style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="mx-auto container py-12 px-4 md:px-0 md:py-24 ">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-10">
          <div className="order-2 md:order-1  flex justify-center md:justify-start  mt-6 md:mt-0">
            <LazyLoadImage
              src={certificate}
              alt="Webinar Certificate"
              data-aos="fade-right"
              data-aos-duration="1000"
              className="h-auto md:h-auto  "
            />
          </div>
          <div className="order-1 md:order-2 flex items-center">
            <div className="flex flex-col gap-2 md:gap-5 text-white justify-center">
              <h3
                className="font-Title  text-2xl md:text-3xl lg:text-4xl xl:text-[45px] xl:leading-[50px] "
                data-aos="fade-down"
                data-aos-duration="1000"
              >
                Certificate of <br /> Completion
              </h3>
              <p
                className="font-poppins text-sm lg:text-base"
                data-aos="fade-down"
                data-aos-duration="1000"
              >
                At the end of the webinar, each attendee who has remained for
                the whole session will be given an official Certificate of
                Completion from Xponent Funds. This simply proves one's
                commitment and learning and validates one's successful
                comprehension of the key concepts and strategies reviewed in the
                workshop. This certificate authenticates that you have improved
                your knowledge and skills in the Stock market under the able
                guidance of Veteran Stock Market Mentor Mr. Alok Mishra, which
                provides you a great credential to continue further on the
                financial journey.
              </p>
              <div className="flex gap-5">
                <Link to="/paymentwebinar">
                  <button
                    className="xl:text-xl text-base md:text-lg  py-1 md:py-2 px-4 md:px-5 font-Title bg-white text-black rounded-[45px]"
                    data-aos="zoom-in-up"
                    data-aos-duration="1000"
                  >
                    Enroll Now
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Certification;
