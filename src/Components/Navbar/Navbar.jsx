import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
import { FiMenu } from "react-icons/fi";
import { RxCross1 } from "react-icons/rx";
import { Link } from "react-scroll";
import Logo from "../../assets/logo.png";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const [isTopOfPage, setIsTopOfPage] = useState(true);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) setIsTopOfPage(true);
      if (window.scrollY !== 0) setIsTopOfPage(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  const handleClick = () => {
    setClick(!click);
  };

  const content = (
    <>
      <div className="lg:hidden  block absolute z-50 top-[90px] w-full left-0 right-0 bg-white } ">
        <ul className="text-center text-base font-medium p-8 font-pops transition-all duration-500 ease-in">
          <Link spy={true} smooth={true} to="Home">
            <li className="my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded hover:text-white">
              Home
            </li>
          </Link>
          <Link spy={true} smooth={true} to="About">
            <li className="my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded hover:text-white">
              About
            </li>
          </Link>
          <Link spy={true} smooth={true} to="Skills">
            <li className="my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded hover:text-white">
              Skills
            </li>
          </Link>
          <Link spy={true} smooth={true} to="Portfolio">
            <li className="my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded hover:text-white">
              Portfolio
            </li>
          </Link>
          <Link spy={true} smooth={true} to="Contact">
            <li className="mt-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded hover:text-white">
              Contact Me
            </li>
          </Link>
        </ul>
      </div>
    </>
  );

  return (
    <nav className={isTopOfPage ? "nav-active" : "nav-scroll"}>
      <div className="h-9vh md:container mx-auto flex justify-between z-50 lg:py-3 py-2">
        <div className="flex items-center flex-1">
          <span className="text-3xl font-bold">
            <a href="#">
              <img src={Logo} alt="Logo" className="h-[70px] lg:h-full" />
            </a>
          </span>
        </div>
        <div className=" lg:flex lg:flex-1 justify-end items-center font-normal hidden">
          <div className="flex-10">
            <ul className="flex gap-10 mr-16 text-2xl font-semibold font-pops items-center">
              <Link spy={true} smooth={true} to="Home">
                <li className="relative cursor-pointer py-[6px] before:content-[''] before:absolute before:bottom-0 before:left-0 before:h-[3px] before:w-full before:bg-slate-900 before:transition-transform before:ease-in before:duration-500 before:scale-x-0 before:origin-right  hover:before:scale-x-100 hover:before:origin-left">
                  Home
                </li>
              </Link>
              <Link spy={true} smooth={true} to="About">
                <li className="relative cursor-pointer py-[6px] before:content-[''] before:absolute before:bottom-0 before:left-0 before:h-[3px] before:w-full before:bg-slate-900 before:transition-transform before:ease-in before:duration-500 before:scale-x-0 before:origin-right  hover:before:scale-x-100 hover:before:origin-left">
                  About
                </li>
              </Link>
              <Link spy={true} smooth={true} to="Skills">
                <li className="relative cursor-pointer py-[6px] before:content-[''] before:absolute before:bottom-0 before:left-0 before:h-[3px] before:w-full before:bg-slate-900 before:transition-transform before:ease-in before:duration-500 before:scale-x-0 before:origin-right  hover:before:scale-x-100 hover:before:origin-left">
                  Skills
                </li>
              </Link>
              <Link spy={true} smooth={true} to="Portfolio">
                <li className="relative cursor-pointer py-[6px] before:content-[''] before:absolute before:bottom-0 before:left-0 before:h-[3px] before:w-full before:bg-slate-900 before:transition-transform before:ease-in before:duration-500 before:scale-x-0 before:origin-right  hover:before:scale-x-100 hover:before:origin-left">
                  Portfolio
                </li>
              </Link>
              <Link spy={true} smooth={true} to="Contact">
                <li>
                  <button className="bg-slate-900 py-1 lg:py-3 md:px-2 lg:px-3 2xl:px-8 md:text-base 2xl:text-xl rounded-md text-white before:bg-white hover:text-slate-900 border-4 border-slate-900 hover:drop-shadow-2xl transition duration-300 ease-in relative z-[1] before:transition-all before:duration-700 before:absolute before:top-0 before:inset-x-1/2 before:bottom-0 before:opacity-0 before:content-[''] before:hover:inset-x-0 before:hover:opacity-100 before:hover:z-[-1]">
                    Get in Touch
                  </button>
                </li>
              </Link>
            </ul>
          </div>
        </div>
        <div>{click && content}</div>
        <button
          className="block lg:hidden mr-2 text-3xl "
          onClick={handleClick}
        >
          {click ? <RxCross1 /> : <FiMenu />}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
