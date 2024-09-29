import React, { useEffect, useRef, useState } from "react";
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
import Modal from "../../../Utilities/Modal";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Whatsapp from "../../../Utilities/Whatsapp";

function Courses() {
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
      { threshold: 0.2 }
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

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
    // Cleanup class on unmount
    return () => document.body.classList.remove("overflow-hidden");
  }, [isOpen]);

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
        onClose: () => setIsOpen(false),
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
          onClose: () => {
            setIsOpen(false);
            toast.dismiss(); // Dismiss toasts when modal closes
          },
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
          onClose: () => setIsOpen(false),
        });
      }
    } catch (error) {
      toast.error("An error occurred. Please try again later.", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        onClose: () => setIsOpen(false),
      });
    }
  };
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
      <div ref={dematRef}>
        <Payement />
      </div>
      {isOpen && (
        <Modal
          setIsOpen={(state) => {
            setIsOpen(state);
            if (!state) toast.dismiss(); // Dismiss toasts when the modal closes
          }}
          formData={formData}
          handleInputChange={handleInputChange}
          handleFormSubmit={handleFormSubmit}
        />
      )}
      <ToastContainer />

      <Efforts />
      <Coursecertificate />
      <Benefits />
      <Whychooseus />
      <Testimonials />
      <Coursefaq />
      <Whatsapp/>
    </>
  );
}

export default Courses;
