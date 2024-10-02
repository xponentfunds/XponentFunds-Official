import React from "react";
// import whastapp from "../assets/Svg/whatsapp.svg";
import whatsapp from "../assets/Images/WhatsApp_icon.png";

function Whatsapp() {
  return (
    <a
      href="https://wa.me/918900177062?text=Hey%2C%20I%20have%20a%20query"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-4 right-4 md:right-6 lg:bottom-6 lg:right-10 hover:scale-105 transition-all duration-300"
    >
      <img src={whatsapp} className="size-12 md:size-14 lg:size-20" alt="" />
    </a>
  );
}

export default Whatsapp;
