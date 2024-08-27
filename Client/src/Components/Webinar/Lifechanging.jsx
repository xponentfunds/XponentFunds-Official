import React from "react";
import img3 from "../../assets/Images/image 36.png";
import img4 from "../../assets/Images/image 37.png";
import img5 from "../../assets/Images/image 38.png";
import img6 from "../../assets/Images/image 39.png";
import BlurImg3 from "../../assets/BlurImg/image 36.png";
import BlurImg4 from "../../assets/BlurImg/image 37.png";
import BlurImg5 from "../../assets/BlurImg/image 38.png";
import BlurImg6 from "../../assets/BlurImg/image 39.png";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

function Lifechanging() {
  const data = [
    {
      id: 1,
      name: "Proven Strategies by an Expert",
      content:
        "Learn directly from Mr. Alok Mishra, a seasoned mentor with over 8 years of experience. He has trained thousands of successful traders, and now he's sharing his time-tested strategies with you.",
      img: img3,
      PlaceholderImg: BlurImg3,
    },
    {
      id: 2,
      name: "Actionable Insights",
      content:
        "Say goodbye to theory. This webinar equips you with practical tools and techniques you can start using immediately to make smarter trading decisions.",
      img: img4,
      PlaceholderImg: BlurImg4,
    },
    {
      id: 3,
      name: "Tailored for All Levels",
      content:
        "Whether you're a beginner looking to break into the stock market or an experienced trader wanting to refine your strategies, this workshop is customized to help you achieve success from wherever you currently stand.",
      img: img5,
      PlaceholderImg: BlurImg5,
    },
    {
      id: 4,
      name: "Ongoing Community Support",
      content:
        "When you attend, you’re not just joining a webinar—you’re joining a community. With ongoing support from Xponent Funds, your journey continues long after the webinar ends.",
      img: img6,
      PlaceholderImg: BlurImg6,
    },
  ];
  return (
    <section className="bg-[#201E1E] overflow-hidden ">
      <main className="container mx-auto px-4 md:px-6 py-12 md:py-24 lg:px-10">
        <div className="flex flex-col gap-2 md:gap-5 justify-center items-center">
          <h2
            className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl xl:leading-[70px] font-Title text-white text-center"
            data-aos="fade-down"
            data-aos-duration="1000"
          >
            Why This Webinar Will
            <span className="custom-text"> Transform</span> <br /> Your Life
          </h2>
          <h5
            className="font-poppins text-[#777777] text-sm md:text-base text-center"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            This isn’t just another stock market tutorial; it’s a transformative
            experience designed to elevate your financial <br />
            knowledge and trading skills. Here’s why this workshop could be the
            game changer for you:
          </h5>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8 md:mt-16">
          {data.map((item, idx) => {
            return (
              <>
                <div key={idx} data-aos="zoom-in-up" data-aos-duration="1000">
                  <div className="flex flex-col justify-between gap-2 md:gap-8 px-7 py-8 bg-[#303030BF] items-center rounded-[10px] h-full w-full hover:scale-105 transition-all ease-in-out duration-300">
                    <div className="flex gap-2 md:gap-8 items-center flex-col">
                      <LazyLoadImage
                        src={item.img}
                        className="h-40  md:h-40 lg:h-44 relative bottom-0"
                        alt="Transformation Image"
                        PlaceholderSrc={item.PlaceholderImg}
                        effect="blur"
                      />
                      <h4 className="font-Title text-white  text-xl md:text-2xl lg:text-3xl text-center">
                        {item.name}
                      </h4>
                    </div>

                    <h5 className="font-poppins text-[#777777] text-sm md:text-base text-center">
                      {item.content}
                    </h5>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </main>
    </section>
  );
}

export default Lifechanging;
