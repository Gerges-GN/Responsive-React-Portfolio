import React from "react";
import heroImg from "../assets/images/hero.svg";
import CountUp from "react-countup";
import { LuMail } from "react-icons/lu";
import { RiAppsLine } from "react-icons/ri";
import { BsYoutube, BsGithub, BsFacebook, BsInstagram } from "react-icons/bs";

function Hero() {
  return (
    <section className="pt-0" id="about">
      <div className="container !pt-14">
        <div className="flex flex-col md:flex-row items-center">
          <div className="w-full md:basis-1/2">
            <h5
              className="text-headingColor text-base font-semibold"
              data-aos="fade-right"
              data-aos-duration="1200"
            >
              Hello, Welcome
            </h5>

            <h1
              className="mt-5 text-headingColor text-3xl md:text-4xl font-extrabold"
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              I'm <span className="text-primaryColor">Gerges Naguib </span>
              <br />
              Front-End Developer
            </h1>

            <div
              className="flex items-center gap-6 mt-7"
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              <a
                href="#contact"
                className="flex items-center gap-2 bg-primaryColor py-2 px-4
                          rounded-lg text-white font-medium hover:bg-smallTextColor duration-300 ease-in"
              >
                <LuMail className="text-xl" />
                Hire Me
              </a>

              <a
                href="#portfolio"
                className="text-smallTextColor font-semibold border-b-2 border-smallTextColor py-2"
              >
                See My Portfolio
              </a>
            </div>

            <p
              className="flex gap-2 text-headingColor font-medium sm:pl-14 pr-10 mt-10 leading-7"
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              <span className="py-[5px] text-xl">
                <RiAppsLine />
              </span>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic
              accusamus voluptate quaerat omnis tempore maxime debitis odio quis
              suscipit minus?
            </p>

            <div className="flex items-center gap-9 mt-14 text-smallTextColor font-semibold">
              <span>Follow Me:</span>
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

          <div className="basis-1/3 mt-10 md:mt-0">
            <figure className="flex items-center justify-center">
              <img src={heroImg} alt="Hero-img" />
            </figure>
          </div>

          <div className="md:basis-1/5 flex md:flex-col flex-wrap justify-between md:justify-end gap-3 text-center md:text-end mt-10 md:mt-0 ">
            <div className="mb-10">
              <h2 className="text-headingColor text-3xl font-bold ">
                <CountUp start={0} end={3} duration={2} suffix="+" />
              </h2>
              <h4 className="text-headingColor font-semibold">
                Years of Experience
              </h4>
            </div>
            <div className="mb-10">
              <h2 className="text-headingColor text-3xl font-bold ">
                <CountUp start={0} end={100} duration={2} suffix="%" />
              </h2>
              <h4 className="text-headingColor font-semibold">Success Rate</h4>
            </div>
            <div className="mb-10">
              <h2 className="text-headingColor text-3xl font-bold ">
                <CountUp start={0} end={192} duration={2} suffix="+" />
              </h2>
              <h4 className="text-headingColor font-semibold">
                Projects Completed
              </h4>
            </div>
            <div className="mb-10">
              <h2 className="text-headingColor text-3xl font-bold ">
                <CountUp start={0} end={132} duration={2} suffix="+" />
              </h2>
              <h4 className="text-headingColor font-semibold">Happy Clients</h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
