import { FaFacebookF, FaLinkedinIn, FaPhoneAlt } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { IoMail } from "react-icons/io5";
import { MdLocationPin } from "react-icons/md";
import { Link } from "react-scroll";
import Logo from "../../assets/logo.png";
import Copywright from "./Copywright";

const Footer = () => {
  return (
    <div className=" mt-12 bg-gray-200">
      <div className="container mx-auto py-[100px]">
        <div className="lg:flex">
          <div className="w-full lg:w-2/4 py-3">
            <div className="py-6">
              <Link spy={true} smooth={true} to="Home">
                <img src={Logo} alt="" className="cursor-pointer" />
              </Link>
              <div>
                <p className="pl-6 text-wrap text-xl mt-4 font-pops w-[350px] lg:w-[700px] uppercase font-bold">
                  Passionate, creative & team player
                </p>
              </div>
              <div className="flex gap-5 pl-6 py-5">
                <div className="w-[50px] h-[50px] transition-all duration-300 rounded-full flex justify-center items-center bg-gray-400 cursor-pointer hover:bg-blue-500 hover:text-white">
                  <a href="https://www.facebook.com/xeeshan.peripatetic/">
                    <FaFacebookF className="text-2xl" />
                  </a>
                </div>
                <div className="w-[50px] h-[50px] transition-all duration-300 rounded-full flex justify-center items-center bg-gray-400 cursor-pointer hover:bg-black hover:text-white">
                  <a href="https://twitter.com/XeeshanAhsan">
                    <FaXTwitter className="text-2xl" />
                  </a>
                </div>
                <div className="w-[50px] h-[50px] transition-all duration-300 rounded-full flex justify-center items-center bg-gray-400 cursor-pointer hover:bg-[#136BC5] hover:text-white">
                  <a href="https://www.linkedin.com/in/nazmul-ahsan-14a953133/">
                    <FaLinkedinIn className="text-2xl" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-1/4 py-8 pl-4 lg:pl-0">
            <h6 className="text-2xl font-pops font-medium">Links</h6>
            <ul className="py-4 mt-3 font-robo">
              <li className="text-2xl text-gray-500 transition-all duration-300 cursor-pointer pb-3 hover:text-gray-600 hover:pl-2">
                <Link spy={true} smooth={true} to="Home">
                  Home
                </Link>
              </li>
              <li className="text-2xl text-gray-500 transition-all duration-300 cursor-pointer pb-3 hover:text-gray-600 hover:pl-2">
                <Link spy={true} smooth={true} to="About">
                  About
                </Link>
              </li>
              <li className="text-2xl text-gray-500 transition-all duration-300 cursor-pointer pb-3 hover:text-gray-600 hover:pl-2">
                <Link spy={true} smooth={true} to="Skills">
                  Skills
                </Link>
              </li>
              <li className="text-2xl text-gray-500 transition-all duration-300 cursor-pointer pb-3 hover:text-gray-600 hover:pl-2">
                <Link spy={true} smooth={true} to="Portfolio">
                  Portfolio
                </Link>
              </li>
              <li className="text-2xl text-gray-500 transition-all duration-300 cursor-pointer pb-3 hover:text-gray-600 hover:pl-2">
                <Link spy={true} smooth={true} to="Contact">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div className="w-full lg:w-1/4 py-8 pl-4 lg:pl-0">
            <h6 className="text-2xl font-pops font-medium pl-1">Address</h6>
            <div className="flex gap-3 justify-start items-center mt-5 text-gray-500">
              <div>
                <MdLocationPin className="text-2xl" />
              </div>
              <div>
                <p className="text-2xl">Chattogram, Bangladesh</p>
              </div>
            </div>
            <div className="flex gap-3 justify-start items-center mt-5 text-gray-500">
              <div>
                <FaPhoneAlt className="text-2xl" />
              </div>
              <div>
                <p className="text-2xl">+8801775-647344</p>
              </div>
            </div>
            <div className="flex gap-3 justify-start items-center mt-5 text-gray-500">
              <div>
                <IoMail className="text-2xl" />
              </div>
              <div>
                <p className="text-xl lg:text-2xl">
                  nazmulahsanxeeshan@gmail.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Copywright />
    </div>
  );
};

export default Footer;
