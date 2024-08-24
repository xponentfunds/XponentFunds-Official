import React from "react";

function Courses() {
  const dummyData = [
    {
      heading: "Phase 1",
      date: "1 Month",
      rows: [
        {
          title: "Basics of Stock Market",
          description: "Description of Row 1",
        },
        {
          title: "Types of Advanced Candlesticks",
          description: "Description of Row 2",
        },
        {
          title: "Support and Resistance",
          description: "Description of Row 3",
        },
        {
          title: "Buyer and Seller Domination",
          description: "Description of Row 4",
        },
        {
          title: "Advanced Sentiment Analysis",
          description: "Description of Row 5",
        },
        {
          title: "Advanced ICD Method for Entry & Exit",
          description: "Description of Row 6",
        },
        {
          title: "Advanced 2GR method for Entry",
          description: "Description of Row 7",
        },
        { title: "Doubt session", description: "Description of Row 8" },
      ],
    },
    {
      heading: "Phase 2",
      date: "1 Month",
      rows: [
        { title: "Swing Trading", description: "Description of Row 1" },
        {
          title: "Advanced price behaviour pattern",
          description: "Description of Row 2",
        },
        { title: "Practical classes", description: "Description of Row 3" },
        { title: "Live market testing", description: "Description of Row 4" },
        {
          title: "Advanced Swing Trading",
          description: "Description of Row 5",
        },
        {
          title: "Advanced volume reading & Stock Selection method",
          description: "Description of Row 6",
        },
        { title: "Doubt session", description: "Description of Row 7" },
      ],
    },
    {
      heading: "Phase 3",
      date: "1 Month",
      rows: [
        { title: "Basics of options", description: "Description of Row 1" },
        {
          title: "Intraday, BANKNIFTY, NIFTY Strategies",
          description: "Description of Row 2",
        },
        {
          title: "Event based advanced strategy",
          description: "Description of Row 3",
        },
        { title: "Option chain analysis", description: "Description of Row 4" },
        { title: "Live market analysis", description: "Description of Row 5" },
        {
          title: "Stoploss hunting strategy",
          description: "Description of Row 6",
        },
        { title: "Doubt session", description: "Description of Row 7" },
        { title: "Box method strategy", description: "Description of Row 8" },
      ],
    },
  ];

  return (
    <section className="bg-[#201E1E] relative overflow-hidden ">
      <main className="mx-auto container  px-4 md:px-0 py-8 md:py-12 lg:py-20">
        <div className="flex flex-col items-center justify-center">
          <h2
            className="font-Title text-2xl md:text-3xl lg:text-4xl xl:text-[45px] text-white mb-7"
            data-aos="fade-down"
            data-aos-duration="1500"
          >
            <span className="custom-text">Course</span> Outline
          </h2>

          <svg
            width="1440"
            height="5"
            viewBox="0 0 1440 5"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="1440" height="5" fill="url(#paint0_diamond_28_3)" />
            <defs>
              <radialGradient
                id="paint0_diamond_28_3"
                cx="0"
                cy="0"
                r="1"
                gradientUnits="userSpaceOnUse"
                gradientTransform="translate(720 2.5) scale(720 2.5)"
              >
                <stop stop-color="white" />
                <stop offset="1" stop-opacity="0" />
              </radialGradient>
            </defs>
          </svg>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 mt-16">
          {dummyData.map((column, colIndex) => (
            <div
              key={colIndex}
              className="bg-white bg-opacity-10  px-5 py-6 rounded-2xl flex-col flex gap-6"
            >
              <div className="justify-between flex">
                <h2 className="font-poppins text-xl md:text-2xl xl:text-3xl text-white font-semibold">
                  {column.heading}
                </h2>
                <p className="font-poppins text-lg text-white">{column.date}</p>
              </div>
              <div className="flex flex-col gap-5">
                {column.rows.map((item, index) => (
                  <div
                    key={index}
                    className=" px-5 py-4  rounded-lg bg-white bg-opacity-10 group hover:bg-white"
                    data-aos="fade-up"
                    data-duration="1000"
                  >
                    <h3 className="font-poppins text-white text-sm md:text-base lg:text-lg font-semibold group-hover:text-black">
                      {item.title}
                    </h3>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </main>
    </section>
  );
}

export default Courses;
