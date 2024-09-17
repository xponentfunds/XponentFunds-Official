import React, { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Payment = () => {
  const [formData, setFormData] = useState({
    amount: "7799", // Fixed amount
    productinfo: "Bundle Plan", // Fixed product info
    firstname: "",
    lastname: "",
    email: "",
    phone: "", // Added phone number field
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const phoneRegex = /^\+?\d{10,12}$/;
    console.log(phoneRegex.test(formData.phone));
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
    console.log(formData);

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_BASE_URL}/payu`,
        formData
      );
      console.log(response);
      const payuData = response.data;

      if (payuData && payuData.key && payuData.txnid) {
        const payuForm = document.createElement("form");
        payuForm.method = "POST";
        payuForm.action = "https://secure.payu.in/_payment";

        Object.keys(payuData).forEach((key) => {
          const input = document.createElement("input");
          input.type = "hidden";
          input.name = key;
          input.value = payuData[key];
          payuForm.appendChild(input);
        });

        document.body.appendChild(payuForm);
        payuForm.submit();
      } else {
        console.error("Invalid response data", payuData);
      }
    } catch (error) {
      console.error("Error submitting payment form", error);
    }
  };

  return (
    <section className="bg-[#201E1E] px-5 md:px-6 py-20 md:py-32">
      <div className="container mx-auto flex justify-center">
        <form
          onSubmit={handleSubmit}
          className=" md:w-1/2 flex flex-col gap-5 md:gap-9"
        >
          <div className="flex flex-col gap-3 md:gap-4">
            <label className="font-poppins text-base md:text-lg lg:text-xl text-white font-medium ">
              First Name
            </label>
            <input
              type="text"
              name="firstname"
              placeholder="First Name"
              value={formData.firstname}
              onChange={handleChange}
              className="rounded-lg border-[#CBCBCB] border-[1px] w-full px-3 py-2 bg-transparent  focus:outline-none font-poppins text-white "
              required
            />
          </div>
          <div className="flex flex-col gap-3 md:gap-4">
            <label className="font-poppins text-base md:text-lg lg:text-xl text-white font-medium ">
              Last Name
            </label>
            <input
              type="text"
              name="lastname"
              placeholder="Last Name"
              value={formData.lastname}
              onChange={handleChange}
              className="rounded-lg border-[#CBCBCB] border-[1px] w-full px-3 py-2 bg-transparent  focus:outline-none font-poppins text-white "
              required
            />
          </div>

          <div className="flex flex-col gap-3 md:gap-4">
            <label className="font-poppins text-base md:text-lg lg:text-xl text-white font-medium">
              Email
            </label>
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className="rounded-lg border-[#CBCBCB] border-[1px] w-full px-3 py-2 bg-transparent  focus:outline-none font-poppins text-white"
              required
            />
          </div>

          <div className="flex flex-col gap-3 md:gap-4">
            <label className="font-poppins text-base md:text-lg lg:text-xl text-white font-medium">
              Phone
            </label>
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
              className="rounded-lg border-[#CBCBCB] border-[1px] w-full px-3 py-2 bg-transparent  focus:outline-none font-poppins text-white "
              required
            />
          </div>

          {/* <button
            type="submit"
            className="self-start  flex gap-0.5 md:gap-3 items-center font-Title text-base md:text-lg xl:text-xl bg-custom-gradient rounded-[45px] px-3 py-2 md:px-7 md:py-4 text-white hover:bg-gradient-to-r transition-all duration-300 ease-in-out hover:scale-105"
          >
            Enroll Now
            
          </button> */}
          <button
            type="submit"
            disabled={
              !formData.firstname ||
              !formData.lastname ||
              !formData.email ||
              !formData.phone
            }
            className={`self-start flex gap-0.5 md:gap-3 items-center font-Title text-base md:text-lg xl:text-xl rounded-[45px] px-3 py-2 md:px-7 md:py-4 text-white transition-all duration-300 ease-in-out hover:scale-105 ${
              !formData.firstname ||
              !formData.lastname ||
              !formData.email ||
              !formData.phone
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-custom-gradient hover:bg-gradient-to-r"
            }`}
            // onClick={() => console.log("Button Clicked!")}
          >
            {/* {console.log(
              "Button Disabled:",
              !formData.firstname ||
                !formData.lastname ||
                !formData.email ||
                !formData.phone
            )} */}
            Enroll Now
          </button>
        </form>
      </div>
      <ToastContainer />
    </section>
  );
};

export default Payment;
