import React, { useEffect, useRef, useState } from "react";
import Herosection from "../../../Components/Home/Herosection";
import Contactus from "../../../Components/Home/Contactus";
import Courses from "../../../Components/Home/Courses";
import Whychooseus from "../../../Components/Home/Whychooseus";
import Blog from "../../../Components/Home/Blog";
import Whoarewe from "../../../Components/Home/Whoarewe";
import Banner from "../../../Components/Home/Banner";
import Consultation from "../../../Components/Home/Consultation";
import MainBanner from "../../../Components/Home/MainBanner";
import Demataccount from "../../../Components/Home/Demataccount";
import Modal from "../../../Utilities/Modal";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Loader from "../../../Utilities/Loader";
import { Helmet } from "react-helmet";
import Test from "../../../Utilities/Test";

function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const dematRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({ name: "", phone: "" });

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          setIsOpen(true);
        }
      },
      { threshold: 0.5 }
    );

    if (dematRef.current) {
      observer.observe(dematRef.current);
    }

    return () => {
      if (dematRef.current) {
        observer.unobserve(dematRef.current);
      }
    };
  }, []);

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    const phoneRegex = /^\+?\d{10,12}$/;
    if (!phoneRegex.test(formData.phone)) {
      toast.error("Please enter a valid phone number.", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      return;
    }

    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_BASE_URL}/api/quickform`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );
      if (response.ok) {
        toast.success("Form submitted successfully!", {
          position: "top-right",
          autoClose: 5000,

          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          onClose: () => setIsOpen(false),
        });
        setFormData({
          name: "",
          phone: "",
        });
        // setIsOpen(false)
      } else {
        toast.error("Failed to submit form.", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      }
    } catch (error) {
      toast.error("An error occurred. Please try again later.", {
        position: "top-right",
        autoClose: 3000,
      });
    }
  };

  return (
    <>
      <Helmet>
        <title>Your Financial Partner | Xponent Funds</title>
        <meta
          name="description"
          content="Join the Super Trader Program to access exclusive institutional trading ideas and insights. Discover the secrets of top 1% professional traders and elevate your trading strategies. Get started today for unlimited access!"
        />
        <meta
          name="keywords"
          content="trading, institutional trading, professional traders, trading strategies, Super Trader Program"
        />
      </Helmet>
      {/* <Test /> */}
      <Herosection />
      <MainBanner />
      <Consultation />
      <Banner />
      <div ref={dematRef}>
        <Demataccount />
      </div>
      {isOpen && (
        <Modal
          setIsOpen={setIsOpen}
          formData={formData}
          handleInputChange={handleInputChange}
          handleFormSubmit={handleFormSubmit}
        />
      )}
      <ToastContainer />
      <Whoarewe />
      <Whychooseus />
      <Blog />
      <Courses />
      <Contactus />
    </>
  );
}

export default Home;
