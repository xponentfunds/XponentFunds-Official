import React, { useState } from "react";
import cover from "../../assets/Images/coverbg.png";
function Coursevideo() {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  const handleVideoLoad = () => {
    setIsVideoLoaded(true);
  };
  return (
    <div className="bg-[#201E1E]">
      <section className="container mx-auto px-5 md:px-0 py-8 md:py-12 lg:py-28">
        <div className="flex justify-center">
          <h2
            className="font-Title font-normal text-2xl md:text-4xl md:leading-[48px] lg:text-5xl  lg:leading-[60px] xl:text-[54px] xl:leading-[71px] text-white mb-7  md:mb-14 lg:mb-28 "
            data-aos="fade-down"
            data-aos-duration="1000"
          >
            A <span className="custom-text">Sneak Peek</span>, Just for You!
          </h2>
        </div>
        <div className="flex justify-center items-center  lg:h-[550px]  xl:h-[580px] ">
          <div className="w-full rounded-[30px]">
            <div className="relative pt-[56.25%] ">
              {!isVideoLoaded && (
                <div
                  className="absolute top-0 left-0 w-full h-full bg-cover bg-center "
                  style={{
                    backgroundImage: `url(${cover})`,
                  }}
                ></div>
              )}
              <iframe
                src="https://player.vimeo.com/video/1000698924?h=cf9644ef4c&autoplay=1"
                className="absolute top-0 left-0 w-full h-full "
                frameBorder="0"
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
                onLoad={handleVideoLoad}
              ></iframe>
            </div>
            <script src="https://player.vimeo.com/api/player.js"></script>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Coursevideo;
