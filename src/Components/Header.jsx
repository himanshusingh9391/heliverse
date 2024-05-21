import React from "react";
import image1 from "/loggg.png";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <>
      <div className="fixed top-0 left-0 right-0 z-10 flex justify-between items-center md:text-lg bg-[#262626] h-[54px] mb-[1px] px-4 -ml-6 md:ml-0 lg:ml-0">
        <div className="flex items-center">
          <img src={image1} alt="image1" className="h-[50px] w-[60px] mb-2" />
          <div className="flex items-center">
            <label className="text-center font-bcd text-white font-bold mr-0.5">
              envato
            </label>
            <label className="text-center font-bcd text-green-500 font-medium">
              market
            </label>
          </div>
        </div>
        <Link to='https://codecanyon.net/checkout/102310499/create_account?_ga=2.95562267.606987108.1716014472-1102502956.1716014472'>
        <button className="text-center font-abc font-light rounded-sm bg-[#82B440] hover:bg-[#74a730] text-white p-1 cursor-pointer">
          Buy now
        </button>
        </Link>
        
      </div>
    </>
  );
}
