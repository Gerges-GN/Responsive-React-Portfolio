import React from "react";
import { useState, useEffect } from "react";
import data from "../assets/data/portfolioData";
import Modal from "./Modal";

function Portfolio() {
  const [nextItems, setNextItems] = useState(6);
  const [portfolios, setPortfolios] = useState(data);
  const [selectTab, setSelectTab] = useState("all");
  const [showModal, setShowModal] = useState(false);
  const [activeID, setActiveID] = useState(null);

  const Btn = ({ children, className, ...props }) => {
    return (
      <button
        className={`flex items-center text-smallTextColor font-semibold border border-solid
                        border-smallTextColor py-2 px-4 rounded-lg hover:bg-primaryColor
                        hover:text-white hover:font-medium duration-150 ease-in ${className}`}
        {...props}
      >
        {children}
      </button>
    );
  };

  function loadMoreHandler() {
    setNextItems((p) => p + 3);
  }

  function hideHandler() {
    setNextItems((p) => p - 3);
  }

  function showModalHandler(ID) {
    setShowModal(true);
    setActiveID(ID);
    console.log(ID);
  }

  useEffect(() => {
    selectTab === "all" && (setPortfolios(data), setNextItems(6));

    const web = data.filter((item) => item.category === "Web Design");
    selectTab === "web-design" &&
      (setPortfolios(web), setNextItems(web.length > 6 ? 6 : web.length));

    const ux = data.filter((item) => item.category === "Ux");
    selectTab === "ux" &&
      (setPortfolios(ux), setNextItems(ux.length > 6 ? 6 : ux.length));
  }, [selectTab]);

  return (
    <section id="portfolio">
      <div className="container">
        <div className="flex items-center justify-between flex-wrap">
          <div className="mb-7 sm:mb-0">
            <h3 className="text-headingColor text-3xl font-bold">
              My recent projects
            </h3>
          </div>

          <div className="flex flex-wrap gap-3">
            <Btn
              className={`${
                selectTab === "all" && " bg-primaryColor text-white font-medium"
              }`}
              onClick={() => setSelectTab("all")}
            >
              All
            </Btn>
            <Btn
              className={`${
                selectTab === "web-design" &&
                " bg-primaryColor text-white font-medium"
              }`}
              onClick={() => setSelectTab("web-design")}
            >
              Web Design
            </Btn>
            <Btn
              className={`${
                selectTab === "ux" && " bg-primaryColor text-white font-medium"
              }`}
              onClick={() => setSelectTab("ux")}
            >
              UI/UX Design
            </Btn>
          </div>
        </div>

        <div className="flex items-center flex-wrap gap-4 mt-12">
          {portfolios?.slice(0, nextItems)?.map((portfolio, i) => {
            const {
              id,
              imgUrl,
              title
            } = portfolio;
            return (
              <div
                key={i}
                id={id}
                className="group relative rounded-lg overflow-hidden z-[1] max-w-full sm:w-[48.5%] md:w-[31.8%] lg:w-[32.2%]"
                data-aos="fade-zoom-in"
                data-aos-duration="1000"
              >
                <figure>
                  <img className="" src={imgUrl} alt={title} />
                </figure>
                <div className="absolute opacity-0 group-hover:opacity-100 w-full h-full top-0 left-0 bg-primaryColor bg-opacity-40 z-[5] duration-150 ease-in">
                  <div className="w-full h-full flex items-center justify-center">
                    <button
                      className="text-white py-2 px-4 bg-headingColor hover:bg-smallTextColor rounded-lg duration-150 ease-in"
                      onClick={() => showModalHandler(id)}
                    >
                      See details
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="flex items-center justify-center gap-4 mt-7">
          {nextItems < portfolios.length && (
            <Btn onClick={loadMoreHandler}>See More</Btn>
          )}
          {nextItems > 6 && <Btn onClick={hideHandler}>Hide</Btn>}
        </div>
      </div>
      {showModal && <Modal activeID={activeID} setShowModal={setShowModal} />}
    </section>
  );
}

export default Portfolio;
