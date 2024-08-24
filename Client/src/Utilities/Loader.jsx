import React from "react";

function Loader() {
  return (
    <section className="bg-black min-h-screen flex justify-center items-center">
      <div className="flex  gap-2 container mx-auto justify-center">
        <div className="w-4 h-4 rounded-full bg-violet-500 animate-bounce"></div>
        <div className="w-4 h-4 rounded-full bg-violet-600 animate-bounce [animation-delay:-.3s]"></div>
        <div className="w-4 h-4 rounded-full bg-violet-700 animate-bounce [animation-delay:-.5s]"></div>
      </div>
    </section>
  );
}

export default Loader;
