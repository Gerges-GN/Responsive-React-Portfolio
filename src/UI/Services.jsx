import React from "react";
import frontendImg from "../assets/images/front-end.png";
import backendImg from "../assets/images/backend.png";
import uiImg from "../assets/images/design.png";
import appsImg from "../assets/images/apps.png";

function Services() {
  const Card = (props) => {
    const { isLeft, title, text, img } = props;
    return (
      <div className="mt-16 sm:mt-0 sm:mb-12">
        <div className="flex flex-col items-center sm:flex-row">
          <div
            className={`${
              isLeft ? "justify-start " : "justify-end "
            }flex w-full mx-auto items-center`}
          >
            <div
              className={`${isLeft ? "sm:pr-8 " : "sm:pl-8 "}w-full sm:w-1/2`}
              data-aos={isLeft ? "fade-left" : "fade-right"}
              data-aos-duration="1000"
            >
              <div className="bg-white hover:bg-primaryColor p-4 rounded shadow-md group cursor-pointer duration-150 ease-in ">
                <h3 className="text-primaryColor group-hover:text-white font-bold group-hover:font-semibold text-xl">
                  {title}
                </h3>
                <p className="text-smallTextColor group-hover:text-white text-base group-hover:font-medium mt-3">
                  {text}
                </p>
              </div>
            </div>
          </div>

          <div
            className="bg-primaryColor border-white border-4 rounded-full p-2
                                  absolute left-1/2 transform -translate-x-1/2 -translate-y-8 sm:-translate-y-0
                                  flex items-center justify-center"
          >
            <figure>
              <img src={img} alt={title} />
            </figure>
          </div>
        </div>
      </div>
    );
  };
  return (
    <section id="service">
      <div className="container ">
        <div className="text-center">
          <h2 className="text-headingColor font-extrabold text-4xl mb-5">
            What do I help
          </h2>
          <p className="text-headingColor font-medium lg:max-w-[600px] lg:mx-auto">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur a
            molestias enim. Officiis eaque excepturi reiciendis labore quasi
            eveniet totam, necessitatibus eius magni repellat fuga! Repellat
            cupiditate iusto quasi earum!
          </p>
        </div>

        <div className="flex flex-col justify-center sm:py-12">
          <div className="w-full py-3 px-2 sm:px-0 sm:max-w-xl sm:mx-auto">
            <div className="text-gray-700 relative antialiased text-sm font-semibold">
              <div className="hidden sm:block absolute bg-indigo-300 h-full w-1 left-1/2 transform -translate-x-1/2"></div>
              <Card
                isLeft={true}
                title="Front-End Development"
                text="Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit. Eos, quos"
                img={frontendImg}
              />
              <Card
                isLeft={false}
                title="Back-End Development"
                text="Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Facilis, eligendi. Explicabo, voluptas"
                img={backendImg}
              />
              <Card
                isLeft={true}
                title="UI/UX Design"
                text="Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit. Eos, quos"
                img={uiImg}
              />
              <Card
                isLeft={false}
                title="Apps Development"
                text="Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Facilis, eligendi. Explicabo,"
                img={appsImg}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
