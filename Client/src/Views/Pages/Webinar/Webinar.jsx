import React from "react";
import Webinarintro from "../../../Components/Webinar/Webinarintro";
import Videosection from "../../../Components/Webinar/Videosection";
import Learn from "../../../Components/Webinar/Learn";
import Lifechanging from "../../../Components/Webinar/Lifechanging";
import Challenges from "../../../Components/Webinar/Challenges";
import Certification from "../../../Components/Webinar/Certification";
import Timer from "../../../Components/Webinar/Timer";
import FAQ from "../../../Components/Webinar/FAQ";
import Efforts from "../../../Components/Courses/Efforts";
import FloatingBar from "./Floatingbar";
import { Helmet } from "react-helmet";
import Testimonials from "../../../Components/Webinar/Testimonialswebinar";
import Whatsapp from "../../../Utilities/Whatsapp";

function Webinar() {
  return (
    <>
      <Helmet>
        <title>Master Option Trading with Our Exclusive Webinar</title>
        <meta
          name="description"
          content="Enroll in our exclusive webinar to master and elevate your option trading skills. Learn from industry experts, gain valuable insights, and enhance your trading strategies. Secure your spot today!"
        />
        <meta
          name="keywords"
          content="option trading, trading webinar, trading skills, trading strategies, financial education"
        />
      </Helmet>
      <Webinarintro />
      <div id="video-section">
        <Videosection />
      </div>
      <FloatingBar />
      <Timer />
      <Learn />
      <Certification />
      <Efforts />
      <Lifechanging />
      <Challenges />
      <Testimonials />
      <div id="faq-section">
        <FAQ />
      </div>
      <Whatsapp/>
    </>
  );
}

export default Webinar;
