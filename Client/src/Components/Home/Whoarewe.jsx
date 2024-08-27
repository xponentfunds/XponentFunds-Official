import React from "react";
import team from "../../assets/Images/xponentteam.png";
import chart from "../../assets/Images/charts.png";
import { LazyLoadImage } from "react-lazy-load-image-component";

function Whoarewe() {
  return (
    <section className="bg-[#000000] relative overflow-hidden ">
      <main className=" mx-auto container px-4 md:px-6 pt-12 md:pt-24 pb-12 lg:px-10">
        <div className=" grid grid-col-1 lg:grid-cols-3 gap-8 md:py-10">
          <div className=" lg:col-span-1">
            <div className="flex flex-col gap-7 text-white">
              <h5
                className="font-Title text-lg md:text-2xl  custom-text "
                data-aos="fade-down"
                data-aos-duration="1000"
              >
                XPONENT FUNDS
              </h5>
              <h3
                className="font-Title text-3xl md:text-4xl lg:text-5xl"
                data-aos="fade-right"
                data-aos-duration="1000"
              >
                Who are we?
              </h3>
              <p
                className="font-poppins text-sm md:text-base lg:text-sm xl:text-base"
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                Xponent Funds was founded with the mission to democratize
                financial education. For years now, we've been assisting people
                with the intricacies of the stock market by being absolutely
                faithful professionals. Aritra Banerjee is the one leading us
                and his team of experienced financial advisors is the one making
                an effort to give clients the best advice. We are determined to
                making finance accessible, reliable, and expert for all those
                who may take an interest in this field. Our values are
                integrity, transparency, and putting the client first in order
                to ensure that your benefit is always the main thing we
                consider. Be with us in order to start out on your journey to
                financial freedom.
              </p>
            </div>
          </div>
          <div className="h-[250px] md:h-[450px] lg:col-span-2">
            <div className=" w-full h-full justify-center">
              <LazyLoadImage
                src={chart}
                alt="Trading charts"
                className="absolute h-[250px] md:h-[420px] lg:h-[380px] xl:h-[420px] bottom-[5%] md:bottom-[10%] lg:bottom-[20%]  right-[4%] lg:right-0 custom-center"
                data-aos="fade-left"
                data-aos-duration="1000"
              />
              <LazyLoadImage
                src={team}
                alt="Xponent Fund Team"
                className="absolute h-[150px] md:w-[900px] md:h-[300px] lg:w-[760px] xl:w-[900px] right-0  z-10 bottom-0 custom-center"
                data-aos="fade-up"
                data-aos-duration="1000"
              />
            </div>
          </div>
        </div>
      </main>
    </section>
  );
}

export default Whoarewe;
