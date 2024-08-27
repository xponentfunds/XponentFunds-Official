import React, { useState } from "react";

const AccordionItem = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b py-6">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full text-left md:px-4 md:py-2 flex  gap-2 md:gap-0 justify-between items-center focus:outline-none"
      >
        <h3 className="font-poppins font-medium text-base md:text-lg lg:text-xl xl:text-2xl text-[#B0B0B0] w-[95%]">
          {title}
        </h3>
        <svg
          className={`transform transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
          width="34"
          height="19"
          viewBox="0 0 34 19"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M2 2L14.0607 15.9795C15.2234 17.3271 17.297 17.372 18.5168 16.0759L31.7647 2"
            stroke="white"
            stroke-width="3"
            stroke-linecap="round"
          />
        </svg>
      </button>
      {isOpen && (
        <div className="md:px-4 py-2">
          <h5 className="text-sm md:text-base lg:text-lg font-poppins text-white ">
            {children}
          </h5>
        </div>
      )}
    </div>
  );
};

function Coursefaq() {
  return (
    <section className="bg-[#201E1E] overflow-hidden ">
      <main className="container mx-auto px-4 md:px-6 py-8 lg:px-10 md:py-12 lg:py-20">
        <div className="flex flex-col items-center justify-center">
          <h2
            className="font-Title font-normal text-2xl md:text-4xl md:leading-[48px] lg:text-5xl  lg:leading-[60px] xl:text-[54px] xl:leading-[71px] text-white mb-7 "
            data-aos="fade-down"
            data-aos-duration="1500"
          >
            Frequently Asked
            <span className="custom-text"> Questions</span>
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

        <div className="flex flex-col gap-2 md:gap-5 mt-5 md:mt-16">
          <AccordionItem title="What are the timings, and when will my classes start?">
            <p>
              You can schedule your classes from Monday to Friday between 6 to 9
              pm or at any time on the weekend.
            </p>
          </AccordionItem>

          <AccordionItem title="How can I schedule classes?">
            <p>
              After purchasing the course, you'll receive a call from our team
              within an hour at most, and you can schedule your classes
              instantly according to your choice.
            </p>
          </AccordionItem>
          <AccordionItem title="How many classes will there be, and what will be the duration of the classes?">
            <p>
              There will be 2 live classes every week, each with a duration of 1
              to 1.5 hours.
            </p>
          </AccordionItem>
          <AccordionItem title="What is the total duration of the course?">
            <p>
              This course has a total duration of 3 months, but depending on
              your pace, it may take longer than 3 months.
            </p>
          </AccordionItem>
          <AccordionItem title="What will happen if I miss a class?">
            <p>
              You will receive an extra class covering the topic you missed.
            </p>
          </AccordionItem>
        </div>
      </main>
    </section>
  );
}

export default Coursefaq;
