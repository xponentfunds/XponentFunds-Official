import React from "react";
import cover from "../../assets/Images/video1.png";
function Coursevideo() {
  return (
    <div className="bg-[#201E1E]">
      <section className="container mx-auto px-5 md:px-0 py-8 md:py-12 lg:py-28">
        <div className="flex justify-center items-center  lg:h-[550px]  xl:h-[580px] ">
          <div className="w-full rounded-[30px]">
            <div className="relative pt-[56.25%] rounded-[30px]">
              <iframe
                src="https://player.vimeo.com/video/1000698924?h=cf9644ef4c&autoplay=1"
                className="absolute top-0 left-0 w-full h-full"
                frameborder="0"
                allow="autoplay; fullscreen; picture-in-picture"
                allowfullscreen
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
