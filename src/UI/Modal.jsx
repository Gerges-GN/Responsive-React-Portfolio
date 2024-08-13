import React from "react";
import portfolios from "../assets/data/portfolioData";
import { IoIosCloseCircle } from "react-icons/io";

function Modal({ activeID, setShowModal }) {
  const portfolio = portfolios.find((item) => item.id === activeID);

  return (
    <div className="w-full h-full fixed top-0 left-0 z-[900] bg-headingColor bg-opacity-40">
      <div
        className="w-[85%] md:max-w-[500px] max-h-[95%] overflow-y-auto absolute md:w-full top-1/2 md:top-1/2 left-1/2 z-20 bg-white rounded-lg 
                  transform -translate-x-1/2 -translate-y-1/2 p-5"
      >
        <figure>
          <img
            className="rounded-lg mb-9"
            src={portfolio.imgUrl}
            alt={portfolio.title}
          />
        </figure>
        <h2 className="text-2xl text-headingColor font-bold my-2">
          {portfolio.title}
        </h2>
        <p className="leading-7 text-smallTextColor">{portfolio.description}</p>
        <div className="flex items-center gap-3 flex-wrap mt-5">
          <h4 className="text-headingColor text-lg font-bold">Technologies:</h4>
          {portfolio.technologies.map((item, i) => {
            return (
              <span
                key={i}
                className="bg-gray-200 hover:bg-gray-100 py-1 px-2 rounded text-sm leading-0 cursor-default duration-150 ease-in"
              >
                {item}
              </span>
            );
          })}
        </div>

        <a
          onClick={() => (setShowModal = setShowModal(false))}
          href={portfolio.siteUrl}
          className="flex items-center gap-2 bg-primaryColor w-fit py-2 px-4 mt-5
                          rounded-lg text-white font-medium hover:bg-smallTextColor duration-150 ease-in"
        >
          Live Preview
        </a>
        <button
          onClick={() => (setShowModal = setShowModal(false))}
          className="absolute top-2 right-2 text-2xl text-red-500 cursor-pointer"
        >
          <IoIosCloseCircle />
        </button>
      </div>
    </div>
  );
}

export default Modal;
