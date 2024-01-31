/* eslint-disable react/no-unescaped-entities */
import MovingText from "react-moving-text";
import { Link } from "react-scroll";
import resume from "../../assets/FrontEndResume.pdf";
import SecondBanner from "../../assets/bannerBg.jpg";

const SecondContent = () => {
  return (
    <div>
      <div className="w-full h-[350px] lg:h-[1000px]">
        <div className="relative">
          <img
            src={SecondBanner}
            alt=""
            className="w-full h-[350px] lg:h-[1000px]"
          />
          <div className="absolute transition-all top-[50%]  left-[50%] text-center translate-x-[-50%] translate-y-[-50%]">
            <MovingText
              type="flipFromBottom"
              duration="2000ms"
              delay="0s"
              direction="normal"
              timing="linear"
              iteration="1"
              fillMode="none"
            >
              <h4 className="text-gray-900 font-pops font-semibold text-sm lg:text-[34px]  pb-1 lg:pb-6">
                Hello,
              </h4>
            </MovingText>
            <MovingText
              type="flipFromBottom"
              duration="2000ms"
              delay="0s"
              direction="normal"
              timing="linear"
              iteration="1"
              fillMode="1"
            >
              <h1 className="text-gray-900 font-pops  text-xl lg:text-[64px] pt-3 pb-0 lg:pb-4">
                I'm <span className="font-robs font-medium ">Nazmul Ahsan</span>
              </h1>
            </MovingText>

            <MovingText
              type="flipFromBottom"
              duration="2000ms"
              delay="0s"
              direction="normal"
              timing="linear"
              iteration="1"
              fillMode="1"
            >
              <h3 className="font-bold uppercase font-robo text-3xl lg:text-[90px] py-2 lg:py-16">
                Frontend developer
              </h3>
            </MovingText>

            <MovingText
              type="flipFromBottom"
              duration="2000ms"
              delay="0s"
              direction="normal"
              timing="linear"
              iteration="1"
              fillMode="none"
            >
              <div className="flex gap-8 items-center text-center justify-center mt-16">
                <button className="font-pops w-[200px] lg:w-[350px] uppercase text-base lg:text-2xl px-5 lg:px-16 py-2 lg:py-4 bg-gray-900 text-white rounded-full transition hover:drop-shadow-2xl">
                  <a href={resume} download="Resume">
                    Download CV
                  </a>
                </button>
                <button className="font-pops uppercase text-base lg:text-2xl px-8 lg:px-16  py-2 lg:py-4 bg-white text-gray-900 rounded-full transition hover:drop-shadow-2xl">
                  <Link spy={true} smooth={true} to="Portfolio">
                    My Works
                  </Link>
                </button>
              </div>
            </MovingText>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecondContent;
