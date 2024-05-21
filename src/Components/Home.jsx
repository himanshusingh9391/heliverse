import React,{useEffect} from "react";
import Header from "./Header";
import image1 from "/MotionArtEffect-logo.png";
import image2 from "/motionarteffect-img2.png";
import star from "/motionarteffect-img4.png";
import red2 from "/motionarteffect-img1.png";
import volswag from "/motionarteffect-img3.png";
import { FaArrowRightLong } from "react-icons/fa6";
import image3 from "/motionarteffect-img5.png";
import image4 from "/motionarteffect-img11.png";
import image5 from "/motionarteffect-img10.png";
import image6 from "/motionarteffect-img8.png";
import image7 from "/motionarteffect-img9.png";
import image8 from "/motionarteffect-img6.png";
import image9 from "/motionarteffect-img7.png";
import { Link } from "react-router-dom";


function Home() {

  return (
    <>
      <div className="bg-[#000] min-h-screen m-0 mt-12 pt-4">
        <Header className="m-0 p-0" />
        <div className="flex flex-col items-start lg:flex-row justify-between mx-8 mt-6 p-2 ">
          <img src={image1} alt="img1" className="mb-6 lg:mr-6 lg:mb-0" />
          <Link to='https://codecanyon.net/item/motion-art-for-elementor-wordpress-plugin/48826891'> 
          <div className="hidden lg:inline-block">
            <button  
            // onClick={handlePurchaseNow} 
            className="bg-gray-200 rounded-md p-2 text-xl  text-black font-bcd cursor-pointer border border-gray-200 hover:bg-transparent hover:border hover:border-gray-200 hover:text-white ml-6">
              Purchase Now
            </button>
          </div>
          </Link>
        </div>
        <div className="relative lg:flex md:flex w-full mt-6">
          {/* <div className="text-white flex-none"> */}
          <div className="flex flex-wrap justify-center md:justify-start mt-6">
            <p className="text-center md:p-2 md:text-left md:text-xl font-abc font-medium bg-gradient-to-r from-orange-500 to-purple-500 text-transparent bg-clip-text md:ml-10">
              <span className="block ">Transform Your</span>
              <span className="block md:mt-1">Website</span>
              <span className="text-white md:mt-1">With Motion Art</span>
              <span className="block text-white md:mt-1">Effect</span>
            </p>
          </div>
          {/* </div> */}
          <div className="text-white lg:w-2/3 ml-2 flex justify-center">
            <div className="text-center md:text-start lg:grid lg:justify-center mt-6 p-4 md:ml-4">
              <div className="font-semibold text-white font-abc ">
                <span className="block text-2xl md:text-3xl lg:text-5xl">
                  Attract Your
                </span>
                <span className="block text-2xl md:text-3xl md:mt-2 lg:text-5xl">
                  Visitors Attention
                </span>
                <span className="block text-2xl md:text-3xl md:mt-2 lg:text-5xl">
                  With Colorful
                </span>
              </div>
              <div className="mt-4 md:mt-2">
                <span className="block bg-gradient-to-r from-orange-500 to-purple-500 text-transparent bg-clip-text font-abc text-3xl md:text-4xl lg:text-6xl">
                  Motion Art Effect
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="relative text-center mt-6 md:mt-4 lg:-ml-12 md:ml-14">
          <div className="relative inline-block text-left md:text-md max-w-md text-gray-400 font-bcd lg:w-[40vw]">
            <span className="block pl-0 lg:text-2xl lg:w-[40vw] lg:-ml-10">
              Unleash the power of creativity with Motion Art for
            </span>
            <span className="block pl-3 md:pl-0 lg:text-2xl lg:w-[40vw] lg:-ml-10">
              Elementor - your ultimate solution for seamlessly
            </span>
            <span className="block pl-6 md:pl-0 lg:text-2xl lg:w-[40vw] lg:-ml-10">
              integrating captivating animations into your
              <span className="hidden lg:inline lg:ml-1">website.</span>
            </span>
          </div>
          <span className="mt-1 md:hidden mx-auto text-gray-400 font-bcd">
            website.
          </span>
        </div>
        <div className="flex justify-center text-center font-bcd text-white mt-8">
          <span className="text-xl block lg:w-[50vw] lg:text-2xl">
            Trusted by thousands of users around
            <span className="hidden lg:inline ">the World</span>
            <span className="text-xl lg:hidden ml-1">the world</span>
          </span>
        </div>
        <div className="md:grid md:grid-cols-2 lg:flex lg:justify-between lg:mt-4 p-4 lg:mx-8">
          <div className="flex items-center justify-center mt-8 ">
            <img src={image2} alt="img2" className="mr-4" />
            <div className="grid grid-cols-1 gap-1">
              <img src={star} alt="star" className="justify-self-start" />
              <label className="justify-self-start text-white font-bcd">
                4.5 Score, 9 Reviews
              </label>
            </div>
          </div>
          <div className="flex items-center justify-center mt-8">
            <img src={red2} alt="img2" className="mr-4" />
            <div className="grid grid-cols-1 gap-1">
              <img src={star} alt="star" className="justify-self-start" />
              <label className="justify-self-start text-white font-bcd">
                4.5 Score, 9 Reviews
              </label>
            </div>
          </div>
          <div className="flex items-center justify-center md:justify-center mt-8 ">
            <img src={volswag} alt="img2" className="mr-4" />
            <div className="grid grid-cols-1 gap-1">
              <img src={star} alt="star" className="justify-self-start" />
              <label className="justify-self-start text-white font-bcd">
                4.5 Score, 9 Reviews
              </label>
            </div>
          </div>
        </div>
        
        <div className="md:flex md:justify-around lg:flex lg:justify-between lg:mx-8">
          <div className="relative ">
            <div className="text-2xl text-center grid justify-center text-white font-abc mt-8 font-bold p-8 lg:grid lg:justify-start lg:text-start md:grid md:justify-start md:text-start">
              <span className="block">
                Turn Your Cursor Into A
                <span className="hidden lg:inline lg:ml-1">Colorful</span>
              </span>
              <span className="block">
                <span className="lg:hidden">Colorful </span>Magic Wand &
                <span className="hidden lg:inline">Charm your Visitors</span>
              </span>
              <span className="block lg:hidden mt-2">Charm Your Visitors</span>
            </div>
            <div className="relative text-center lg:text-start lg:ml-7 lg:-mt-6 md:text-start md:ml-7 md:-mt-6">
              <div className="relative inline-block text-left text-gray-400 font-bcd p-1 lg:block lg:text-sm md:block md:text-sm">
                <span className="block pl-0">
                  Motion Art for Elementor is a groundbreaking plugin
                </span>
                <span className="block pl-0 mt-2">
                  that empowers you to effortlessly infuse your
                  <span className="inline md:hidden">website</span>
                </span>
                <span className="block pl-3 lg:pl-0 mt-2 md:pl-0">
                  <span className="hidden md:inline-block">website</span> with
                  visually stunning motion art elements
                </span>
              </div>
            </div>
            <div className="flex justify-center mt-8 lg:justify-start lg:ml-7 md:justify-start md:ml-4">
              <button className="text-white bg-gradient-to-r from-purple-500 to-orange-500 rounded-2xl p-4 text-xl font-bold font-bcd cursor-pointer border ml-6 lg:ml-0 md:ml-6">
                Purchase From Envato
                <FaArrowRightLong className="inline ml-2" />
              </button>
            </div>
          </div>
          <div className="grid justify-center mt-6 p-2 ">
            <img src={image3} alt="image3" className="md:mt-10 md:p-2" />
          </div>
        </div>

        <div className="relative text-2xl text-center grid justify-center text-white font-abc mt-8 font-bold p-8 lg:text-3xl">
          <span className="block pl-0">
            Apply On Any Section Or
            <span className="hidden lg:inline-block">Enable</span>
          </span>
          <span className="block pl-2 mt-2">
            <span className="inline lg:hidden">Enable</span>For Whole Page
          </span>
        </div>
        {/* <div className="lg:flex"> */}
        {/* <div> */}
        <div className="lg:flex lg:flex-row-1 lg:justify-center md:flex md:flex-row-1 md:justify-center">
          <div className="bg-[#161525] p-8 mx-4 rounded-2xl max-w-md text-center">
            <h2 className="text-white text-2xl font-bold mb-4">
              Apply On Section
            </h2>
            <p className="text-white mb-6">
              Apply on section is a game-changer, offering an unparalleled way
              to manage applications directly from your website.
            </p>
            <div className="bg-[#161525] p-4 rounded-lg">
              <img src={image4} alt="image4" className="rounded-lg" />
            </div>
          </div>
          <div className="bg-[#161525] p-8 mt-6 mx-4 rounded-2xl max-w-md text-center lg:w-1/2 md:w-1/2">
            <h2 className="text-white text-2xl font-bold mb-4">
              Apply On Page
            </h2>
            <p className="text-white mb-6">
              Apply on section is a game-changer, offering an unparalleled way
              to manage applications directly from your website.
            </p>
            <div className="bg-[#1A1A1A] p-4 rounded-lg">
              <img src={image5} alt="image5" className="rounded-lg" />
            </div>
          </div>
        </div>
        <div className="lg:flex lg:justify-center">
          <div className="bg-[#161525] p-8 mt-6 mx-4 rounded-2xl lg:w-[60%] text-center lg:p-4">
            <h2 className="text-white text-2xl font-bold mb-2">
              Supported by All Popular
            </h2>
            <h2 className="text-white text-2xl font-bold mb-4">Browsers</h2>
            <p className="text-white mb-4">
              Rest assured, Motion Arts is designed to be compatible with all
              major web browsers.
            </p>
            <div className="bg-[#1A1A1A] p-4 rounded-lg lg:flex lg:justify-center md:justify-center md:flex">
              <img src={image6} alt="image6" className="rounded-lg" />
            </div>
          </div>
        </div>

        {/* </div> */}
        {/* </div> */}
        <div className="lg:grid lg:justify-center lg:mt-6 lg:p-4 md:grid md:justify-center">
          <div className="mt-6 mx-4 rounded-2xl max-w-md text-center ">
            <h2 className="text-white text-2xl font-bold mb-2">
              An All-Round Plugin With Poweful Features
            </h2>
            <p className="text-gray-400 mb-4">
              Whether you're a seasoned web designer or just starting out,
              Motion Art for Elementor seamlessly intergrates with the Elementor
              platform,providing you with a seamledd and intuitive experience.
            </p>
          </div>
        </div>
        <div className="lg:flex lg:justify-center lg:mb-4  md:grid md:grid-cols-2 ">
          <div className="bg-[#161525] p-8 mt-6 mx-4 rounded-2xl max-w-md text-center">
            <div className="grid justify-start mb-2">
              <img src={image7} alt="image7" className="" />
            </div>
            <h2 className="text-white text-2xl font-bold mb-2 text-start">
              Light Weight
            </h2>
            <p className="text-gray-500 mb-4 text-start">
              Motion Art for Elementor is designed to be lightweight.
            </p>
          </div>
          <div className="bg-[#161525] p-8 mt-6 mx-4 rounded-2xl max-w-md text-center">
            <div className="grid justify-start mb-2">
              <img src={image8} alt="image8" className="" />
            </div>
            <h2 className="text-white text-2xl font-bold mb-2 text-start">
              100% Responsive
            </h2>
            <p className="text-gray-500 mb-4 text-start">
              Create a consistent visual experience across all devices.
            </p>
          </div>
          <div className="bg-[#161525] p-8 mt-6 mx-4 rounded-2xl max-w-md text-center md:justify-center">
            <div className="grid justify-start mb-2 ">
              <img src={image9} alt="image9" className="" />
            </div>
            <h2 className="text-white text-2xl font-bold mb-2 text-start">
              User Friendly Interface
            </h2>
            <p className="text-gray-500 mb-4 text-start">
              Ensure a smooth experience for both applicants and administrators.
            </p>
          </div>
        </div>
        <div className="bg-gradient-to-r from-orange-500 to-purple-500 p-4 text-center lg:flex lg:justify-around">
          <div className="flex justify-center space-x-8 text-white mb-2 lg:order-2">
            <a href="/documentation" className="hover:underline">
              Documentation
            </a>
            <a href="/support" className="hover:underline">
              Support
            </a>
          </div>
          <div className="lg:text-left text-white text-sm mb-2 lg:mb-0 lg:order-1">
            © 2023 Copywrite. All rights reserved by QodeMatrix
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
