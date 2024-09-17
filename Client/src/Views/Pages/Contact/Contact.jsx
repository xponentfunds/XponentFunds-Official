import React, { useState } from "react";
// import bg from "../../../assets/Images/Group 80.png";
import bg from "../../../assets/Images/Group 801.png";
import bg1 from "../../../assets/Images/Rectangle 195.png";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Helmet } from "react-helmet";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    profession: "",
    experience: "",
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
    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_BASE_URL}/api/contact`,
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
        });
        setFormData({
          name: "",
          email: "",
          phone: "",
          profession: "",
          experience: "",
        });
      } else {
        toast.error("Failed to submit form.", {
          position: "top-right",
          autoClose: 5000,
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
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };

  return (
    <>
      <Helmet>
        <title>Contact Us | Get in Touch with Our Team</title>
        <meta
          name="description"
          content="Have questions or need assistance? Reach out to us through our Contact Us page. Our team is here to help you with any inquiries or support you need. Fill out the form or use the contact information provided to get in touch with us today!"
        />
        <meta
          name="keywords"
          content="contact us, customer support, get in touch, contact information, customer service"
        />
      </Helmet>
      <div className="bg-[#201E1E] pt-16 md:pt-20 lg:pt-28">
        <section
          className=" "
          // style={{
          //   backgroundImage: `url(${bg})`,
          //   backgroundSize: "cover",
          //   backgroundPosition: "center",
          //   backgroundRepeat: "no-repeat",
          // }}
        >
          <div className="mx-auto container py-8 md:py-12 lg:py-16 px-4 md:px-6 lg:px-10 flex justify-center items-center h-full ">
            <h1 className="font-Title text-2xl md:text-3xl lg:text-4xl xl:text-[45px] text-white ">
              <span className="custom-text">Contact us</span>
            </h1>
          </div>
        </section>
      </div>
      <section className="bg-[#201E1E] py-8 md:py-12 lg:py-16 px-4 md:px-6 lg:px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 mx-auto container gap-12 md:gap-24">
          <div className="order-2 md:order-1 flex flex-col gap-3 md:gap-6 lg:gap-9 bg-contact-linear rounded-[25px] px-5 md:px-9 py-8 md:py-14 text-white">
            <h2 className="font-Title text-2xl md:text-3xl lg:text-4xl">
              Get in touch
            </h2>
            <div className="flex flex-col gap-3">
              <h4 className="font-poppins font-bold text-lg md:text-xl lg:text-2xl">
                Mail Us
              </h4>
              <h5 className="font-poppins font-medium text-base md:text-lg lg:text-xl">
                Our team is ready to assist you. Reach out to us at
                help@xponentfunds.com.
              </h5>
            </div>
            <div className="flex flex-col gap-3">
              <h4 className="font-poppins font-bold text-lg md:text-xl lg:text-2xl">
                Call Us
              </h4>
              <h5 className="font-poppins font-medium text-base md:text-lg lg:text-xl">
                We're available Monday to Friday from 10 am to 6 pm at
                01169290876.
              </h5>
            </div>
            <div className="flex flex-col gap-3">
              <h4 className="font-poppins font-bold text-lg md:text-xl lg:text-2xl">
                Social Media
              </h4>
              <li className="flex gap-2 lg:gap-3 items-center">
                <a
                  href="http://instagram.com/xponentfunds"
                  target="_blank"
                  rel=""
                  aria-label="Visit Our instagram"
                >
                  <svg
                    width="19"
                    height="18"
                    viewBox="0 0 19 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="transform transition-transform duration-300 hover:scale-125 hover:text-blue-700 cursor-pointer"
                  >
                    <g clip-path="url(#clip0_46_41)">
                      <path
                        d="M9.50001 1.5C11.651 1.5 11.9193 1.5075 12.7633 1.545C13.6064 1.5825 14.1803 1.70775 14.6854 1.89375C15.2079 2.08425 15.6481 2.34225 16.0883 2.7585C16.4908 3.13342 16.8023 3.58694 17.0011 4.0875C17.1966 4.56525 17.3296 5.10975 17.3692 5.9085C17.4064 6.708 17.4167 6.96225 17.4167 9C17.4167 11.0378 17.4088 11.292 17.3692 12.0915C17.3296 12.8903 17.1966 13.434 17.0011 13.9125C16.8029 14.4133 16.4913 14.867 16.0883 15.2415C15.6924 15.6227 15.2137 15.9178 14.6854 16.1063C14.1811 16.2915 13.6064 16.4175 12.7633 16.455C11.9193 16.4903 11.651 16.5 9.50001 16.5C7.34905 16.5 7.08068 16.4925 6.23676 16.455C5.39363 16.4175 4.81968 16.2915 4.31459 16.1063C3.78602 15.9184 3.30722 15.6232 2.91176 15.2415C2.50912 14.8666 2.19762 14.4131 1.99897 13.9125C1.80264 13.4347 1.67043 12.8903 1.63084 12.0915C1.59364 11.292 1.58334 11.0378 1.58334 9C1.58334 6.96225 1.59126 6.708 1.63084 5.9085C1.67043 5.109 1.80264 4.566 1.99897 4.0875C2.19707 3.58663 2.50865 3.13299 2.91176 2.7585C3.30733 2.37692 3.7861 2.0818 4.31459 1.89375C4.81968 1.70775 5.39284 1.5825 6.23676 1.545C7.08068 1.50975 7.34905 1.5 9.50001 1.5ZM9.50001 5.25C8.45019 5.25 7.44338 5.64509 6.70105 6.34835C5.95871 7.05161 5.54168 8.00544 5.54168 9C5.54168 9.99456 5.95871 10.9484 6.70105 11.6517C7.44338 12.3549 8.45019 12.75 9.50001 12.75C10.5498 12.75 11.5566 12.3549 12.299 11.6517C13.0413 10.9484 13.4583 9.99456 13.4583 9C13.4583 8.00544 13.0413 7.05161 12.299 6.34835C11.5566 5.64509 10.5498 5.25 9.50001 5.25ZM14.6458 5.0625C14.6458 4.81386 14.5416 4.5754 14.356 4.39959C14.1704 4.22377 13.9187 4.125 13.6563 4.125C13.3938 4.125 13.1421 4.22377 12.9565 4.39959C12.7709 4.5754 12.6667 4.81386 12.6667 5.0625C12.6667 5.31114 12.7709 5.5496 12.9565 5.72541C13.1421 5.90123 13.3938 6 13.6563 6C13.9187 6 14.1704 5.90123 14.356 5.72541C14.5416 5.5496 14.6458 5.31114 14.6458 5.0625ZM9.50001 6.75C10.1299 6.75 10.734 6.98705 11.1794 7.40901C11.6248 7.83097 11.875 8.40326 11.875 9C11.875 9.59674 11.6248 10.169 11.1794 10.591C10.734 11.0129 10.1299 11.25 9.50001 11.25C8.87012 11.25 8.26603 11.0129 7.82063 10.591C7.37523 10.169 7.12501 9.59674 7.12501 9C7.12501 8.40326 7.37523 7.83097 7.82063 7.40901C8.26603 6.98705 8.87012 6.75 9.50001 6.75Z"
                        fill="white"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_46_41">
                        <rect width="19" height="18" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>{" "}
                </a>
                <a
                  href="http://facebook.com/xponentfunds"
                  target="_blank"
                  aria-label="Visit Our facebook page"
                >
                  <svg
                    className="transform transition-transform duration-300 hover:scale-125 hover:text-blue-700 cursor-pointer"
                    width="19"
                    height="18"
                    viewBox="0 0 19 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clip-path="url(#clip0_46_44)">
                      <path
                        d="M11.0836 10.125H13.0627L13.8544 7.125H11.0836V5.625C11.0836 4.8525 11.0836 4.125 12.6669 4.125H13.8544V1.605C13.5963 1.57275 12.6218 1.5 11.5926 1.5C9.44323 1.5 7.9169 2.74275 7.9169 5.025V7.125H5.5419V10.125H7.9169V16.5H11.0836V10.125Z"
                        fill="white"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_46_44">
                        <rect width="19" height="18" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </a>
                <a
                  href="https://www.linkedin.com/company/xponent-fund-management/ "
                  target="_blank"
                  aria-label="Visit Our linkedin company"
                >
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="transform transition-transform duration-300 hover:scale-125 hover:text-blue-700 cursor-pointer"
                  >
                    <g clip-path="url(#clip0_46_35)">
                      <path
                        d="M5.20502 3.74977C5.20482 4.1476 5.04659 4.52905 4.76515 4.81021C4.4837 5.09138 4.10209 5.24922 3.70427 5.24902C3.30644 5.24882 2.92499 5.0906 2.64383 4.80915C2.36266 4.52771 2.20482 4.1461 2.20502 3.74827C2.20522 3.35045 2.36344 2.969 2.64489 2.68783C2.92633 2.40667 3.30794 2.24882 3.70577 2.24902C4.10359 2.24922 4.48504 2.40745 4.76621 2.68889C5.04737 2.97034 5.20522 3.35195 5.20502 3.74977ZM5.25002 6.35977H2.25002V15.7498H5.25002V6.35977ZM9.99002 6.35977H7.00502V15.7498H9.96002V10.8223C9.96002 8.07727 13.5375 7.82227 13.5375 10.8223V15.7498H16.5V9.80227C16.5 5.17477 11.205 5.34727 9.96002 7.61977L9.99002 6.35977Z"
                        fill="white"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_46_35">
                        <rect width="18" height="18" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </a>
                <a
                  href="https://youtube.com/@xponentfunds?feature=shared"
                  target="_blank"
                  aria-label="Visit Our youtube"
                >
                  <svg
                    width="18"
                    height="20"
                    viewBox="0 0 18 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="transform transition-transform duration-300 hover:scale-125 hover:text-blue-700 cursor-pointer"
                  >
                    <path
                      d="M17.6239 5.18613C17.417 4.32559 16.8071 3.64797 16.0326 3.41797C14.6287 3 9 3 9 3C9 3 3.37124 3 1.96738 3.41797C1.19303 3.64797 0.583031 4.32559 0.376066 5.18613C0 6.74582 0 10.0001 0 10.0001C0 10.0001 0 13.2543 0.376066 14.8139C0.583031 15.6744 1.19303 16.3522 1.96738 16.5822C3.37124 17 9 17 9 17C9 17 14.6287 17 16.0326 16.5822C16.8071 16.3522 17.417 15.6744 17.6239 14.8139C18 13.2543 18 10.0001 18 10.0001C18 10.0001 18 6.74582 17.6239 5.18613ZM7.1999 13.0002V7.00004L11.8763 10.0001L7.1999 13.0002Z"
                      fill="white"
                    />
                  </svg>
                </a>
              </li>
            </div>
          </div>
          <div className="order-1 md:order-2 flex justify-center items-center  ">
            <form
              onSubmit={handleSubmit}
              className="px-8 w-full flex flex-col gap-5 md:gap-9"
            >
              <div className="flex flex-col gap-3 md:gap-4">
                <label className="font-poppins text-base md:text-lg lg:text-xl text-white font-medium ">
                  Your Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="rounded-lg border-[#CBCBCB] border-[1px] w-full px-3 py-2 bg-transparent  focus:outline-none font-poppins text-white "
                  placeholder="Enter your name"
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
                  value={formData.email}
                  onChange={handleChange}
                  className="rounded-lg border-[#CBCBCB] border-[1px] w-full px-3 py-2 bg-transparent  focus:outline-none font-poppins text-white"
                  placeholder="Enter your email"
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
                  value={formData.phone}
                  onChange={handleChange}
                  className="rounded-lg border-[#CBCBCB] border-[1px] w-full px-3 py-2 bg-transparent  focus:outline-none font-poppins text-white"
                  placeholder="Enter your phone number"
                  required
                />
              </div>

              <div className="flex flex-col gap-3 md:gap-4">
                <label className="font-poppins text-base md:text-lg lg:text-xl text-white font-medium">
                  Profession
                </label>
                <select
                  name="profession"
                  value={formData.profession}
                  onChange={handleChange}
                  aria-label="profession"
                  className="rounded-lg border-[#CBCBCB] border-[1px] w-full px-3 py-2 bg-transparent  focus:outline-none font-poppins text-white text-sm md:text-base lg:text-lg xl:text-xl"
                  required
                >
                  <option value="" disabled>
                    Select your profession
                  </option>
                  <option value="student" className="text-black font-poppins">
                    Student
                  </option>
                  <option
                    value="Working professional"
                    className="text-black font-poppins"
                  >
                    Working professional
                  </option>
                  <option
                    value="Freelancer"
                    className="text-black font-poppins"
                  >
                    Freelancer
                  </option>
                  <option value="Others" className="text-black font-poppins">
                    Others
                  </option>
                </select>
              </div>

              <div className="flex flex-col gap-3 md:gap-4">
                <label className="font-poppins text-base md:text-lg lg:text-xl text-white font-medium">
                  How many years of trading experience do you have?
                </label>
                <select
                  name="experience"
                  value={formData.experience}
                  onChange={handleChange}
                  aria-label="experience"
                  className="rounded-lg border-[#CBCBCB] border-[1px] w-full px-3 py-2 bg-transparent  focus:outline-none font-poppins text-white text-sm md:text-base lg:text-lg xl:text-xl"
                  required
                >
                  <option value="" disabled>
                    Select your experience
                  </option>
                  <option
                    value="0-1 years"
                    className="text-black font-poppins "
                  >
                    0-1 years
                  </option>
                  <option value="1-2 years" className="text-black font-poppins">
                    1-2 years
                  </option>
                  <option value="2-3 years" className="text-black font-poppins">
                    2-3 years
                  </option>
                  <option value="4+ years" className="text-black font-poppins">
                    4+ years
                  </option>
                </select>
              </div>
              {/* 
              <button
                type="submit"
                className="self-start  flex gap-0.5 md:gap-3 items-center font-Title text-base md:text-lg xl:text-xl bg-custom-gradient rounded-[45px] px-3 py-2 md:px-7 md:py-4 text-white hover:bg-gradient-to-r transition-all duration-300 ease-in-out hover:scale-105"
              >
                Submit
              </button> */}
              <button
                type="submit"
                disabled={
                  !formData.name ||
                  !formData.email ||
                  !formData.phone ||
                  !formData.profession ||
                  !formData.experience
                }
                className={`self-start flex gap-0.5 md:gap-3 items-center font-Title text-base md:text-lg xl:text-xl rounded-[45px] px-3 py-2 md:px-7 md:py-4 text-white transition-all duration-300 ease-in-out hover:scale-105 ${
                  !formData.name ||
                  !formData.email ||
                  !formData.phone ||
                  !formData.profession ||
                  !formData.experience
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-custom-gradient hover:bg-gradient-to-r"
                }`}
              >
                Submit
              </button>
            </form>
          </div>
        </div>
        <ToastContainer />
      </section>
    </>
  );
}

export default Contact;
