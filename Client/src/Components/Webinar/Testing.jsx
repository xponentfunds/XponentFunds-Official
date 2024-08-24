import React from "react";

const items = [ { id: 1, name: "Fundamentals of Stock Trading" },
    { id: 2, name: "Fundamentals of Stock Trading" },
    { id: 3, name: "Fundamentals of Stock Trading" },
    { id: 3, name: "Fundamentals of Stock Trading" },
    { id: 3, name: "Fundamentals of Stock Trading" },];

const MyComponent = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-10 py-10 md:py-16 border-b-[1px] border-b-[#6B6B6B]">
  {items.map((data, idx) => {
    // Standard items
    if (idx < items.length - 2) {
      return (
        <div key={idx} className="flex items-center justify-center bg-slate-600">
          <h3 className="font-poppins font-medium text-xl md:text-2xl lg:text-[30px] lg:leading-[40px] text-center text-white">
            {data.name}
          </h3>
        </div>
      );
    } else {
      // For the last two items
      return (
        <div
          key={idx}
          className={`flex items-center justify-center bg-slate-900 ${
            idx === items.length - 2 ? "col-span-3 md:col-span-1 md:mx-auto" : ""
          } ${
            idx === items.length - 1 ? "col-span-3 md:col-span-1 md:mx-auto" : ""
          }`}
        >
          <h3 className="font-poppins font-medium text-xl md:text-2xl lg:text-[30px] lg:leading-[40px] text-center text-white">
            {data.name}
          </h3>
        </div>
      );
    }
  })}
</div>
  );
};

export default MyComponent;
