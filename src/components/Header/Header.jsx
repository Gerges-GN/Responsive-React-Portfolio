import React, { useEffect, useRef } from "react";
import { TbSend, TbMenu2 } from "react-icons/tb";
import "./Header.css";

function Header() {
  const menuRef = useRef(null)
  useEffect(() => {
    const handleScroll = () => {
      const element = document.querySelector("#header");
      if (window.scrollY > 0) {
        element.classList.add("sticky");
      } else {
        element.classList.remove("sticky");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleClick = (e) => {
    e.preventDefault();

    const targetAttr = e.target.getAttribute("href");
    const location = document.querySelector(targetAttr).offsetTop;

    window.scrollTo({
      top: location - 80,
      left: 0,
      behavior: "smooth",
    });
  };
  useEffect(() => {
    const allLinks = document.querySelectorAll("a");

    allLinks.forEach((link) => {
      link.addEventListener("click", handleClick);
    });
    return () => {
      link.removeEventListener("click", handleClick);
    };
  }, []);


  const toggleMenu = () =>{
    menuRef.current.classList.toggle("show-menu")
  }

  return (
    <header id="header" className="w-full flex items-center bg-white z-[100]">
      <div className="container">
        <div className="flex items-center justify-between">
          {/* Logo Start */}
          <div className="flex items-center justify-center gap-3">
            <span
              className="flex items-center justify-center w-10 h-10 rounded-full
            bg-primaryColor text-white text-[18px] font-[500]"
            >
              G
            </span>
            <div className="leading-[20px]">
              <h2 className="text-xl text-smallTextColor font-[700]">Gerges</h2>
              <p className="text-[16px] text-smallTextColor font-[500]">
                Personal
              </p>
            </div>
          </div>
          {/* Logo End */}

          {/* Menu Start */}
          <div ref={menuRef} onClick={toggleMenu} className="menu">
            <ul className="flex items-center justify-center gap-10">
              <li>
                <a
                  className="text-smallTextColor font-[600] hover:text-primaryColor duration-200"
                  href="#about"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  className="text-smallTextColor font-[600] hover:text-primaryColor duration-200"
                  href="#service"
                >
                  Service
                </a>
              </li>
              <li>
                <a
                  className="text-smallTextColor font-[600] hover:text-primaryColor duration-200"
                  href="#portfolio"
                >
                  Portfolio
                </a>
              </li>
              <li>
                <a
                  className="text-smallTextColor font-[600] hover:text-primaryColor duration-300"
                  href="#contact"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
          {/* Menu End */}

          {/* Menu Right Start */}
          <div className="flex items-center gap-4">
            <a
              href="#contact"
              className="flex items-center gap-2 text-smallTextColor font-[600] border border-solid
                      border-smallTextColor py-2 px-2 rounded-lg max-h-[40px] w-28 hover:bg-smallTextColor
            hover:text-white hover:font-medium duration-300 ease-in"
            >
              <TbSend className="text-xl" /> Let's Talk
            </a>

            <span onClick={toggleMenu} className="md:hidden text-[40px] text-smallTextColor">
              <TbMenu2 />
            </span>
          </div>
          {/* Menu Right End */}
        </div>
      </div>
    </header>
  );
}

export default Header;
