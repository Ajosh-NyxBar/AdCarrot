import React, { useEffect, useState } from "react";
import logo from "../assets/logo.png";
import { FaBars, FaTimes } from "react-icons/fa";
import { LINKS } from "../constants";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isOpen]);

  useEffect(() => {
    const handScroll = (e) => {
      if (isOpen) {
        e.preventDefault();
      }
    };
    window.addEventListener("scroll", handScroll);
    return () => window.removeEventListener("scroll", handScroll);
  }, [isOpen]);

  const handleClick = (e) => {
    e.preventDefault();
    setIsOpen(!isOpen);
    const offset = -70;
    const element = document.getElementById(id);
    const elementPosition =
      element.getBoundingClientRect().top + window.scrollY;
    const offsetPosition = elementPosition + offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
  };

  return (
    <>
      <nav className="fixed z-10 w-full border-b border-orange-50/10 bg-emerald-950">
        <div className="container mx-auto">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center">
              <a href="/">
                <img src={logo} alt="logo" width={120} height={20} />
              </a>
            </div>
            <div>
              <button onClick={() => setIsOpen(!isOpen)} type="button" className="inline-flex items-center 
              justify-center bg-emerald-950 p-2 text-orange-50">
                {" "}
                <FaBars className="h-6 w-6" />
              </button>
            </div>
          </div>
        </div>
      </nav>
      {isOpen && (
        <div className="fixed inset-0 z-20 flex flex-col space-y-3  justify-center bg-emerald-950 px-20
       text-5xl font-bold uppercase text-emerald-100 lg:text-6xl">
            <button onClick={() => setIsOpen(!isOpen)} type="button" className="absolute top-4 right-4 p-2 text-orange-50 rounded-full bg-emerald-900 lg:right-20">
                <FaTimes className="h-8 w-8" />
            </button>
            {
                LINKS.map((link, index) => {
                    return (
                        <a href={`#${link.id}`} key={index} onClick={() => handleLinkClick(e, link.id)} 
                        className="transition-colors duration-500 hover:text-orange-500 ">
                            {link.name}
                        </a>
                        
                    )
                })
            }
        </div>
      )}
    </>
  );
};


export default Navbar;
