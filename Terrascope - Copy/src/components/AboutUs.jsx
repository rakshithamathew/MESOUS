import React from "react";
import aboutImage from "../assets/images/smallstones.svg"; // Replace with your image path
import aboutImage2 from "../assets/images/aboutImg.svg"; // Replace with your image path

const AboutUs = () => {
  return (
    <div>
      <div className="flex items-center justify-center p-16 bg-[#f9f4f2]">
        <div className="flex items-center max-w-[1100px]">
          <div className="mr-10">
            <img className="max-w-[300px] h-auto" src={aboutImage} alt="About Us" />
          </div>
          <div className="text-[#4c366b]">
            <h2 className="text-5xl font-bold">You've Spent a Lifetime</h2>
            <p className="text-3xl text-[#826d9e]">Building a Legacy</p>
          </div>
        </div>
      </div>

      <div className="flex justify-center items-center p-10 bg-[#f9f4f2]">
        <div className="flex items-center justify-center bg-white rounded-2xl shadow-lg p-6 max-w-[600px] w-full relative">
          <div className="flex items-center w-full">
            <div className="relative w-[65px] h-[120px] mr-5 flex items-center justify-center">
              <img className="absolute h-[26%] left-[-21%] top-0" src={aboutImage2} alt="Support icon" />
            </div>
            <div className="flex-1">
              <h3 className="text-xl mb-2 text-[#4B2C5E]">We're Here for You!</h3>
              <p className="text-base leading-6 text-[#4B2C5E] mb-2">Let's discuss your legal options. We'll support you every step of the way.</p>
              <div className="mt-4">
                <button className="bg-[#4B2C5E] text-[#F5E7DA] rounded-full px-8 py-3 text-lg font-semibold cursor-pointer transition-transform transform hover:bg-[#5d3874] hover:-translate-y-1 shadow-md">Reach Out Today</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
