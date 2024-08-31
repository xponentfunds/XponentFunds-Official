import React from "react";
import Intro from "../../../Components/Courses/Intro";
import Courses1 from "../../../Components/Courses/Courses";
import Payement from "../../../Components/Courses/Payement";
import Testimonials from "../../../Components/Webinar/Testimonials";
import Benefits from "../../../Components/Courses/Benefits";
import Whychooseus from "../../../Components/Home/Whychooseus";
import Efforts from "../../../Components/Courses/Efforts";
import Coursevideo from "../../../Components/Courses/Coursevideo";
import Coursecertificate from "../../../Components/Courses/Coursecertificate";
import Coursefaq from "../../../Components/Courses/Coursefaq";
import { Helmet } from "react-helmet";

function Courses() {
  return (
    <>
      <Helmet>
        <title>Comprehensive Stock Market Course for All Levels</title>
        <meta
          name="description"
          content="This course is designed to give you a comprehensive understanding of the stock market and how it works. Whether you're a beginner starting to invest or an experienced trader looking to enhance your skills, our course is tailored for you. Enroll today and master the stock market!"
        />
        <meta
          name="keywords"
          content="stock market course, trading course, financial education, investment training, stock trading skills"
        />
      </Helmet>
      <Intro />
      <Coursevideo />
      <Courses1 />
      <Payement />
      <Efforts />
      <Coursecertificate />
      <Benefits />
      <Whychooseus />
      <Testimonials />
      <Coursefaq />
    </>
  );
}

export default Courses;
