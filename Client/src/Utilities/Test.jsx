import React from "react";
import desktopview1 from "../assets/Images/success.jpg";
import { Link } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";

function Test() {
  return (
    <section className="bg-[#201E1E] pt-24 md:pt-32 px-4 md:px-0 pb-10 md:pb-32 relative overflow-hidden">
      <div className="container mx-auto">
        <div className="flex flex-col gap-2 md:gap-5 lg:gap-8 text-white justify-center items-center text-center">
          <h1 className="font-Title text-2xl md:text-3xl lg:text-4xl xl:text-[45px]">
            Congratulations on Taking the First Step Towards Profitable
            <span className="custom-text"> Trading!</span>
          </h1>
          <LazyLoadImage
            src={desktopview1}
            alt=""
            // data-aos="zoom-in-up"
            // data-aos-duration="1000"
            className="object-cover h-[300px] md:h-[400px] lg:h-[440px] xl:h-[500px]"
          />
          <h2 className="font-Title text-xl md:text-2xl lg:text-3xl">
            A Special Message from Alok Mishra
          </h2>
          <p className="font-poppins text-sm md:text-base lg:text-lg">
            Hey there, I've got a special message for you!
            <br />
            It's fantastic to see you here! By joining this webinar, you've
            taken a significant step towards transforming yourself into a
            consistently profitable trader. Our team is dedicated to clearing
            all your doubts and equipping you with the skills to join the top 1%
            of successful traders.
            <br />
            To kickstart this journey, please join our exclusive WhatsApp group.
            We'll be sharing the webinar access link there, along with regular
            updates, valuable tips, and continuous support. Don't miss out on
            this opportunity to connect and grow with like-minded individuals!
          </p>
          <div className="flex flex-col gap-2 md:gap-5">
            <h3 className="font-Title text-xl md:text-2xl lg:text-3xl">
              Join Our WhatsApp Group
            </h3>
           
              <a
                href="https://chat.whatsapp.com/your-whatsapp-group-link"
                className="text-white bg-gradient-to-tr from-green-400 to-green-600 hover:from-green-500 hover:to-green-700 font-semibold py-3 px-5 rounded-full shadow-md transition-shadow duration-300 ease-in-out self-center  font-poppins "
                target="_blank"
                rel="noopener noreferrer"
              >
                Click Here to Join the WhatsApp Group Now
              </a>
         
            <p className="font-poppins text-sm md:text-base lg:text-lg">
              Note: The webinar access link will be provided exclusively in this
              group. Ensure you join to stay updated and not miss any important
              information.
            </p>
          </div>
          <div className="flex flex-col gap-2 md:gap-5">
            <h3 className="font-Title text-xl md:text-2xl lg:text-3xl">
              Need Assistance?
            </h3>
            <p className="font-poppins text-sm md:text-base lg:text-lg">
              If you have any questions or need support, feel free to reach out
              to us at *011 6929 0876*. We're here to help you every step of the
              way.
            </p>
          </div>
          <h4 className="font-poppins font-semibold text-xl">
            We're thrilled to have you on board. Let's work together to achieve
            trading excellence and financial success!
          </h4>
        </div>
      </div>
    </section>
  );
}

export default Test;
