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

function FAQ() {
  return (
    <section className="bg-[#201E1E] overflow-hidden ">
      <main className="container mx-auto px-4 md:px-6 lg:px-10 py-12 md:py-24">
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
          <AccordionItem title="When and where the workshop is going to happen and how long it would be?">
            <p>
              The workshop will be held on Google meet and the duration will be
              2 hr
            </p>
          </AccordionItem>
          <AccordionItem title="What should I be prepared before the workshop starts?">
            <p>
              Make sure you come 10mins before the scheduled time and bring a
              plain notebook and a pen so that you can write the important
              points you find. <br /> Its advised that to attend the workshop on
              PC with good network for better learning experience.
            </p>
          </AccordionItem>
          <AccordionItem title="Can I take trading as a full time business after this workshop?">
            <p>
              In this webinar you will be guided with the step by step process
              to learn and grow in stock market along with some advanve concept.
              <br />
              As with your increasing experience and profit, for sure you can
              make it a full time business.
            </p>
          </AccordionItem>
          <AccordionItem title="I have heard people loosing a lot of money in stock market and advise us to not to invest in it, as the one who are lucky can only make money from it.">
            <p>
              f you play like gambling, then for sure you are on wrong track and
              you will loose money sooner or later. <br />
              Trading and investing in stock market is just like other
              businesses, hence required a specific skillset which will be
              taught to you in this workshop
            </p>
          </AccordionItem>
          <AccordionItem title="The stock market is a fully new industry for me. Is this workshop helpful for me?">
            <p>
              No matter what you have done previously, this workshop is going to
              focus on the fundamentals of the stock market so that even a
              newbie can grasp it in no time and find it easier to implement.
            </p>
          </AccordionItem>
        </div>
      </main>
    </section>
  );
}

export default FAQ;
