import React, { useState } from "react";
import cover from "../../assets/Images/coverbg.png";
// import cover from "../../assets/Images/video1.png";

function Videosection() {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  const handleVideoLoad = () => {
    setIsVideoLoaded(true);
  };
  return (
    <div className="bg-[#201E1E]">
      <section className="container mx-auto px-5 md:px-6 lg:px-10 pt-8 md:pt-20 lg:pt-28 xl:pt-20 pb-10 xl:pb-28 2xl:pb-44 ">
        <div className="flex justify-center">
          <h2
            className="font-Title font-normal text-2xl md:text-4xl md:leading-[48px] lg:text-5xl  lg:leading-[60px] xl:text-[54px] xl:leading-[71px] text-white mb-4 md:mb-14 lg:mb-0 xl:mb-28  2xl:mb-48 text-center"
            data-aos="fade-down"
            data-aos-duration="1000"
          >
            A <span className="custom-text">Message </span> for You!
          </h2>
        </div>

        <div className="flex justify-center items-center lg:h-[550px]  xl:h-[580px] ">
          <div className="w-full rounded-[30px]">
            <div className="relative pt-[56.25%]">
              {!isVideoLoaded && (
                <div
                  className="absolute top-0 left-0 w-full h-full bg-cover bg-center"
                  style={{
                    backgroundImage: `url(${cover})`,
                  }}
                ></div>
              )}
              <iframe
                src="https://player.vimeo.com/video/1000658866?h=8a3fb21b5b&autoplay=1"
                className="absolute top-0 left-0 w-full h-full"
                frameBorder="0"
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
                onLoad={handleVideoLoad}
              ></iframe>
            </div>
          </div>
          {/* <div className="w-full rounded-[30px]">
            <div className="relative pt-[56.25%]">
              <iframe
                src="https://player.vimeo.com/video/1000658866?h=8a3fb21b5b&autoplay=1"
                className="absolute top-0 left-0 w-full h-full"
                frameborder="0"
                allow="autoplay; fullscreen; picture-in-picture"
                allowfullscreen
              ></iframe>
            </div>
            <script src="https://player.vimeo.com/api/player.js"></script>
          </div> */}
        </div>
      </section>
    </div>
  );
}

export default Videosection;
