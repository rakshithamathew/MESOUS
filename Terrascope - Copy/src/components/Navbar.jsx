import React from 'react';
import phoneVector1 from '../assets/phone-vector-1.svg';
import phoneVector2 from '../assets/phone-vector-2.svg';
import phoneVector3 from '../assets/phone-vector-3.svg';

const Navbar = () => {
  return (
    <div className="flex items-center justify-between px-6 py-3 bg-[#FAF3EC] w-full">
      <div className="flex items-center">
        <div className="bg-white px-5 py-2 mr-6">
          <h1 className="text-black font-normal text-xl">Logo</h1>
        </div>
        <div className="flex gap-10">
          <span className="text-[#4B2C5E] text-lg cursor-pointer">Home</span>
          <span className="text-[#4B2C5E] text-lg cursor-pointer">Mesothelioma</span>
          <span className="text-[#4B2C5E] text-lg cursor-pointer">About us</span>
        </div>
      </div>
      
      <div className="flex items-center">
        <div className="flex items-center gap-4">
          <div className="flex items-center justify-center w-12 h-12 rounded-full bg-[#4B2C5E] border-2 border-[#4B2C5E]">
            <div className="relative w-6 h-6">
              <img src={phoneVector1} alt="Phone Icon" className="absolute w-full h-full" />
              <img src={phoneVector2} alt="Phone Icon" className="absolute w-full h-full" />
              <img src={phoneVector3} alt="Phone Icon" className="absolute w-full h-full" />
            </div>
          </div>
          <div className="text-left">
            <p className="text-[#4B2C5E] text-sm mb-1">Call Us For Help</p>
            <p className="text-[#4B2C5E] text-lg font-bold">2625151485</p>
          </div>
        </div>
        <div className="ml-6 bg-[#4B2C5E] rounded-full px-5 py-2 cursor-pointer">
          <span className="text-[#F5E7DA] text-lg font-bold">Claim Form</span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;