import React from "react";
import cover from "../../assets/Images/video1.png";

function Videosection() {
  return (
    <div className="bg-[#201E1E]">
      <section className="container mx-auto px-5 md:px-0 pt-[550px] md:pt-20  pb-10 md:pb-28">
        <div className="flex justify-center items-center lg:h-[550px]  xl:h-[580px] ">
          <div className="w-full rounded-[30px]">
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
          </div>
        </div>
      </section>
    </div>
  );
}

export default Videosection;
