import React, { useEffect, useRef, useState } from "react";
import CountUp from "react-countup";

const CountUpOnView = ({ start = 0, end, duration = 3, ...props }) => {
  const countUpRef = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
        } else {
          setInView(false);
        }
      },
      {
        threshold: 0.1,
      }
    );

    if (countUpRef.current) {
      observer.observe(countUpRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={countUpRef}>
      {inView && (
        <CountUp start={start} end={end} duration={duration} {...props} />
      )}
    </div>
  );
};
function Banner() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  useEffect;
  const bannerData = [
    { id: 1, name: "Classes Done", qty: 5893 },
    { id: 1, name: "Students enrolled", qty: 307 },
    { id: 1, name: "Years of Expertise", qty: 5 },
    { id: 1, name: "Internship Offer", qty: 47 },
  ];
  return (
    <section className="bg-black overflow-hidden ">
      <main className="mx-auto container py-8 md:py-16 lg:py-20 xl:py-24 px-4 md:px-6 lg:px-10">
        <div className="grid  grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
          {bannerData.map((data, idx) => {
            return (
              <>
                <div
                  className={`flex flex-col gap-5 p-3 md:p-5 group  ${
                    idx === bannerData.length - 1 ? "" : "border-r border-white"
                  }   `}
                  onMouseEnter={() => setHoveredIndex(idx)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  <span
                    className={`transition-all ease-in-out duration-300 font-Title text-3xl md:text-4xl lg:text-5xl xl:text-[55px] text-white group-hover:scale-105  cursor-pointer ${
                      hoveredIndex === idx ? "custom-text" : "text-white"
                    } `}
                  >
                    {/* {data.qty} */}
                    <CountUpOnView
                      start={0}
                      end={data.qty}
                      duration={3}
                      suffix="+"
                    />
                    {/* <CountUp start={0} end={100} duration={5} suffix="+" /> */}
                  </span>

                  <h5
                    className={`transition-all ease-in-out duration-300 font-poppins text-lg md:text-xl xl:text-2xl  group-hover:scale-105 ${
                      hoveredIndex === idx ? "text-white" : "text-[#636363]"
                    }  `}
                  >
                    {data.name}
                  </h5>
                </div>
              </>
            );
          })}
        </div>
      </main>
    </section>
  );
}

export default Banner;
