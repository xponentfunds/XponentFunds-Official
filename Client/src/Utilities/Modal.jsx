import React from "react";

function Modal({ setIsOpen, formData, handleInputChange, handleFormSubmit }) {
  return (
    <div
      id="modal"
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-80 z-50"
    >
      <div className="bg-[#0E1217] border-[#686868] border rounded-3xl  px-4  md:px-6 lg:px-8 py-6 md:py-8 lg:py-10 relative">
        <svg
          width="18"
          height="18"
          viewBox="0 0 18 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          onClick={() => setIsOpen(false)}
          className="absolute top-6 right-8 cursor-pointer"
        >
          <path d="M1 1L17 17" stroke="white" stroke-linecap="round" />
          <path d="M17 1L1 17" stroke="white" stroke-linecap="round" />
        </svg>

        <div className="flex flex-col gap-2 md:gap-4 lg:gap-7">
          <div className="">
            <h2 className="text-xl md:text-2xl lg:text-3xl text-white font-Title ">
              Get in touch
            </h2>
            <p className="text-[#747474]  font-poppins font-medium text-sm md:text-base lg:text-lg">
              Fill in the details and our team will get back to you.
            </p>
          </div>
          <form
            onSubmit={handleFormSubmit}
            className="flex flex-col gap-2 md:gap-4 lg:gap-7"
          >
            <div className="flex flex-col gap-1 md:gap-3">
              <label className="font-poppins text-white text-base md:text-lg lg:text-xl font-medium">
                Your Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className="bg-[#151A1F] border-[#4E4E4E] text-white font-poppins  rounded-2xl w-full px-4 py-2 border focus:outline-none "
                required
              />
            </div>
            <div className="flex flex-col gap-1 md:gap-3">
              <label className="font-poppins text-white text-base md:text-lg lg:text-xl font-medium">
                Phone Number
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                className="bg-[#151A1F] font-poppins border-[#4E4E4E] text-white rounded-2xl w-full px-4 py-2 border focus:outline-none "
                required
              />
            </div>

            <button
              type="submit"
              className="font-Title text-base lg:text-lg xl:text-xl bg-custom-gradient rounded-[45px] px-7 py-4 text-white self-center hover:bg-gradient-to-r"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Modal;
