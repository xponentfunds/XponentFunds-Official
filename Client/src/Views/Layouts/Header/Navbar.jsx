import React, { useEffect, useState } from "react";
// import logo from "../../../assets/Images/Logo.png";
// import logo from "../../../assets/Images/logo1.png";
import logo from "../../../assets/Images/updatedlogo.png"
// import logo from "../../../assets/Svg/navlogo.svg";
import blurlogo from "../../../assets/Images/blurlogo.png";
import { Link } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

function Navbar() {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [toggle, setToggle] = useState(false);

  const clicked = () => {
    setToggle(!toggle);
  };
  const handleLinkClickk = () => {
    e.preventDefault();
    setToggle(false);
  };

  const linkPaths = {
    HOME: "/",
    WEBINAR: "/webinar",
    COURSE: "/course",
    CONTACT: "/contact",
    BLOG: "/blog",
  };

  useEffect(() => {
    if (toggle) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [toggle]);

  return (
    <>
      <section className="bg-transparent absolute top-0 z-10 min-w-full ">
        <nav
          className={`px-4 md:px-6 lg:px-10  container mx-auto navbar-transition py-2 flex justify-between items-center  transition-all duration-500 ease-in-out `}
        >
          <div className="flex items-center">
            <a href="/">
              <LazyLoadImage
                src={logo}
                PlaceholderSrc={blurlogo}
                effect="blur"
                className={`h-[50px] sm:h-[60px] lg:h-[80px]`}
                alt="Company Logo"
              />
            
            </a>
          </div>
          <div
            className={` fixed min-h-[60vh] ${
              toggle
                ? "z-20 top-0 h-screen w-full bg-black"
                : "md:static min-h-fit top-[-100%]"
            } left-0 flex md:items-center justify-between md:justify-center`}
          >
            {/* Navbar menu in the center */}
            <ul className=" flex pl-8 md:pl-0 pt-5 md:pt-0  md:text-sm flex-col md:flex-row gap-8 md:gap-5 lg:gap-10   md:items-center">
              <div className="flex items-center md:hidden">
                <a href="/">
                  <img
                    src={logo}
                    alt="Logo"
                    // className="h-[60px] sm:h-[70px] lg:h-[90px]"
                    className={`h-[50px] sm:h-[70px] lg:h-[90px]  md:hidden  ${
                      toggle ? "" : " top-[-100%]"
                    }`}
                  />
                </a>
              </div>
              {["HOME", "WEBINAR", "COURSE", "CONTACT", "BLOG"].map(
                (link, index) => (
                  <li>
                    <Link
                      to={linkPaths[link]}
                      className={`font-Title font-normal text-base transition-all duration-300 ease-in-out ${
                        hoveredIndex === index
                          ? "bg-white rounded-[40px] px-4 py-2"
                          : "text-white"
                      }`}
                      onClick={() => handleLinkClickk()}
                      onMouseEnter={() => setHoveredIndex(index)}
                      onMouseLeave={() => setHoveredIndex(null)}
                    >
                      <span
                        className={
                          hoveredIndex === index ? "custom-text" : "text-white"
                        }
                      >
                        {link}
                      </span>
                    </Link>
                  </li>
                )
              )}
            </ul>
            <svg
              width="22"
              height="22"
              viewBox="0 0 22 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              onClick={() => {
                clicked();
              }}
              className="m-5 text-4xl cursor-pointer md:hidden"
            >
              <rect
                x="1.41406"
                width="29"
                height="2"
                rx="1"
                transform="rotate(45 1.41406 0)"
                fill="#D9D9D9"
              />
              <rect
                width="29"
                height="2"
                rx="1"
                transform="matrix(-0.707107 0.707107 0.707107 0.707107 20.5063 0)"
                fill="#D9D9D9"
              />
            </svg>
          </div>

          {/* Call button on the right */}
          <div className="flex justify-center items-center gap-4">
            {/* <Link to="/product"> */}
            <a
              href="mailto:support@xponentfunds.com"
              className="hidden md:block font-poppins font-semibold text-base text-white transition-all duration-300 ease-in-out bg-[#373434] md:text-base rounded-[40px]  md:px-8 md:py-3 hover:scale-105"
            >
              Email Us
            </a>
            {/* </Link> */}

            {!toggle ? (
              <svg
                width="29"
                height="18"
                viewBox="0 0 29 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                onClick={() => {
                  clicked();
                }}
                className="text-4xl cursor-pointer md:hidden"
              >
                <rect width="29" height="2" rx="1" fill="#D9D9D9" />
                <rect x="8" y="8" width="21" height="2" rx="1" fill="#D9D9D9" />
                <rect y="16" width="29" height="2" rx="1" fill="#D9D9D9" />
              </svg>
            ) : (
              <svg
                width="22"
                height="22"
                viewBox="0 0 22 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                onClick={() => {
                  clicked();
                }}
                className="text-4xl cursor-pointer md:hidden"
              >
                <rect
                  x="1.41406"
                  width="29"
                  height="2"
                  rx="1"
                  transform="rotate(45 1.41406 0)"
                  fill="#D9D9D9"
                />
                <rect
                  width="29"
                  height="2"
                  rx="1"
                  transform="matrix(-0.707107 0.707107 0.707107 0.707107 20.5063 0)"
                  fill="#D9D9D9"
                />
              </svg>
            )}
          </div>
        </nav>
      </section>
    </>
  );
}

export default Navbar;
