import React from "react";
import mobile2 from "../../assets/Images/mobile2.png";
import mobile4 from "../../assets/Images/Group 39.png";
import { LazyLoadImage } from "react-lazy-load-image-component";

function Demataccount() {
  return (
    <section className="bg-[#201E1E] relative overflow-hidden ">
      <main className="mx-auto container  px-4 md:px-0 py-12 md:py-24">
        <div className="flex flex-col items-center justify-center">
          <h2
            className="font-Title font-normal text-2xl md:text-4xl md:leading-[48px] lg:text-5xl  lg:leading-[60px] xl:text-[54px] xl:leading-[71px] text-white mb-7 "
            data-aos="fade-down"
            data-aos-duration="1000"
          >
            open a <span className="custom-text">demat account</span> <br />
            with us in just 5 min
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
        <div className="grid grid-cols-1 lg:grid-cols-2 pt-16">
          <div className="flex justify-end h-[350px] md:h-[600px] xl:h-[550px] ">
            <LazyLoadImage
              src={mobile4}
              data-aos="fade-right"
              data-aos-duration="1000"
              alt="Upstox Application"
              className="absolute left-0 w-[450px] md:w-auto lg:w-[520px] xl:w-[650px] "
            />
            {/* <img src={mobile1} alt="" className="relative z-10 -top-5"  /> */}
            <LazyLoadImage
              src={mobile2}
              // data-aos-offset="200"
              data-aos="fade-right"
              data-aos-duration="1000"
              data-aos-delay="500"
              alt="Upstox Application"
              className="absolute z-10   left-[55%] md:left-[430px] lg:left-[300px] xl:left-[360px]  w-[150px] md:w-auto  lg:w-[180px] xl:w-[220px] top-[22%] md:top-[26%] lg:top-[33%] xl:top-[35%]"
            />
          </div>
          <div className="flex flex-col gap-5 text-white mt-6 md:mt-0">
            <h3
              className="font-Title text-xl md:tex-2xl xl:text-3xl "
              data-aos="fade-left"
              data-aos-duration="1000"
            >
              Open a Demat Account with Us.
            </h3>
            <p
              className="font-poppins text-sm md:text-base"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              Open a UPSTOX Demat account quickly and easily through Xponent
              Funds. As an authorized UPSTOX partner, we make it easy to set up
              an account. Benefit from UPSTOX's powerful trading tools and
              expert advice. Join us today and take the first step toward
              effective and profitable investment
            </p>
            <a
              href="https://upstox.com/open-account/?f=74BLH9"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="btncustom self-start">
                <span className="custom-text"> OPEN MY ACCOUNT</span>
              </button>
            </a>
          </div>
        </div>
      </main>
    </section>
  );
}

export default Demataccount;
