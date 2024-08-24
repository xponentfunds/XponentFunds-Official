import React from "react";
import trade from "../../assets/Images/trade.png";
import { Link } from "react-router-dom";

function Blog() {
  return (
    <section className="bg-[#000000] overflow-hidden ">
      <main className=" mx-auto container px-4 md:px-0 py-12 md:py-24">
        <div className="border-b border-white border-opacity-65">
          <h2
            className="font-Title custom-text text:lg md:text-2xl"
            data-aos="fade-down"
            data-aos-duration="1000"
          >
            Our Blogs
          </h2>
          <div className="my-4 md:my-9 flex justify-between items-center">
            <h2
              className="font-Title text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-white "
              data-aos="fade-left"
              data-aos-duration="1000"
            >
              Data Insights
            </h2>
            <Link to ="blog">
            
            <span className="flex gap-4 items-center text-lg md:text-2xl font-poppins text-white">
              Read All
              <svg
                width="36"
                height="36"
                viewBox="0 0 36 36"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="18" cy="18" r="17.5" stroke="white" />
                <path
                  d="M8.34013 25.0249C7.93265 25.3977 7.90453 26.0302 8.27732 26.4377C8.65011 26.8452 9.28265 26.8733 9.69014 26.5005L8.34013 25.0249ZM26.9839 10.2821C27.0085 9.73033 26.5811 9.26317 26.0293 9.23864L17.0382 8.83889C16.4865 8.81436 16.0193 9.24175 15.9948 9.79349C15.9702 10.3452 16.3976 10.8124 16.9494 10.8369L24.9415 11.1923L24.5861 19.1844C24.5616 19.7361 24.989 20.2033 25.5407 20.2278C26.0925 20.2523 26.5596 19.8249 26.5842 19.2732L26.9839 10.2821ZM9.69014 26.5005L26.6599 10.9755L25.3099 9.49984L8.34013 25.0249L9.69014 26.5005Z"
                  fill="white"
                />
              </svg>
            </span>
            </Link>
          </div>
        </div>
        <div className=" grid grid-col-1 md:grid-cols-3 gap-8 py-5 md:py-10">
          <div className="md:col-span-1">
            <img
              src={trade}
              className="h-full w-full"
              alt=""
              data-aos="zoom-in-up"
              data-aos-duration="1000"
            />
          </div>
          <div className=" md:col-span-2">
            <div className="flex flex-col gap-5 text-white">
              <h3
                className="font-Title text-xl md:text-2xl lg:text-3xl "
                data-aos="fade-down"
                data-aos-duration="1000"
              >
                Which is the Best Investment?
              </h3>
              <p
                className="font-poppins text-sm md:text-base"
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                What would you call a person, who? One fine day goes to an airline counter at the airport and puts a bundle of money on the counter and asks, “Give me the ‘best’ ticket?”. In all probability, the airline staff would think he is crazy and send him back or ask him a few basic questions before issuing him a ticket.
              </p>
              <Link to = "blog/5">
              <button className="btncustom self-start">
                <span className="custom-text"> Read more</span>
              </button>
              </Link>
            </div>
          </div>
        </div>
      </main>
    </section>
  );
}

export default Blog;
