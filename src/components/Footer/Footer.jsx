import React from "react";
import { LuMail } from "react-icons/lu";
import { BsYoutube, BsGithub, BsFacebook, BsInstagram } from "react-icons/bs";

function Footer() {
  return (
    <footer className="bg-primaryColor pt-12">
      {/* top footer */}
      <div className="container">
        <div className="sm:flex items-center justify-between md:gap-8">
          <div className="w-full sm:w-1/2">
            <h2 className="text-2xl md:text-3xl text-white font-semibold mb-5">
              Do you want to make beautiful products?
            </h2>
            <a
              href="#contact"
              className="flex items-center gap-2 bg-secondaryColor hover:bg-opacity-70 
              py-2 px-4 w-fit rounded-lg text-white font-medium duration-200 ease-in"
            >
              <LuMail className="text-xl" />
              Hire Me
            </a>
          </div>

          <div className="w-full pt-9 sm:pt-0 sm:w-1/2 text-gray-200">
            <p className=" mt-4 sm:mt-0">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
              repellat eveniet iusto ipsum incidunt pariatur quis, sapiente
              possimus atque voluptatem!
            </p>
            <div className="flex items-center flex-wrap gap-4 md:gap-8 mt-10">
              <span className="font-medium">Follow Me:</span>
              <span>
                <a href="#" className="text-xl">
                  <BsGithub />
                </a>
              </span>
              <span>
                <a href="#" className="text-xl">
                  <BsFacebook />
                </a>
              </span>
              <span>
                <a href="#" className="text-xl">
                  <BsYoutube />
                </a>
              </span>
              <span>
                <a href="#" className="text-xl">
                  <BsInstagram />
                </a>
              </span>
            </div>
          </div>
        </div>
        {/* footer menu */}
        <div className="mt-9 flex justify-center">
          <ul className="flex flex-wrap md:flex-nowrap items-center text-center  text-gray-200 font-semibold">
            <li className="w-1/2 px-5 py-2">
              <a className="hover:text-gray-300 duration-200" href="#about">
                About
              </a>
            </li>
            <li className="w-1/2 px-5 py-2">
              <a className="hover:text-gray-300 duration-200" href="#service">
                Service
              </a>
            </li>
            <li className="w-1/2 px-5 py-2">
              <a className="hover:text-gray-300 duration-200" href="#portfolio">
                Portfolio
              </a>
            </li>
            <li className="w-1/2 px-5 py-2">
              <a className="hover:text-gray-300 duration-200" href="#contact">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
      {/* bottom footer */}
      <div className="bg-secondaryColor mt-5">
        <div className="container flex flex-col sm:flex-row items-center justify-between">
          <div className="flex items-center gap-3">
            {/* <img src="vite.svg" alt="" /> */}
            <span
              className="flex items-center justify-center w-10 h-10 rounded-full
            bg-transparent border-2 border-primaryColor text-white text-lg font-medium"
            >
              G
            </span>
            <div className="leading-[20px] text-gray-200">
              <h2 className="text-x font-bold">Gerges</h2>
              <p className="font-medium">Personal</p>
            </div>
          </div>

          <div>
            <p className="text-gray-400 p-0 mt-5 sm:mt-0 text-center">
              Copyright 2024&copy; Developed py Gerges Naguib.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
