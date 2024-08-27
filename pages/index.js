import React from "react";

const Desktop = () => {
  return (
    <div className="w-full h-screen flex ">
      {/* Left side with background image */}
      <div className="w-1/2 h-[150%] relative object-cover ">
        <img
          className="absolute top-0 left-0 w-full h-full"
          loading="lazy"
          alt="Left Side Background"
          src="/leftside11.png"
        />
      </div>

      {/* Right side with background image and Apply Now button */}
      <div
        className="w-1/2 h-[150%] relative bg-cover bg-no-repeat flex flex-col items-center justify-center"
        style={{
          backgroundImage: 'url("/rightside.png")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        {/* Apply Now Button */}
        <button
          onClick={() => console.log("Apply Now button clicked")}
          className="rounded-41xl bg-black border-orangered border-[2px] border-solid box-border flex items-center justify-center z-10 px-12 py-6 text-lg sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold text-white transition-all duration-300 ease-in-out transform hover:scale-105 focus:outline-none"
        >
          APPLY NOW
        </button>
      </div>
    </div>
  );
};

export default Desktop;
