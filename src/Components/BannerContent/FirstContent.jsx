/* eslint-disable react/no-unescaped-entities */
import MovingText from "react-moving-text";
import BannerMain from "../../assets/BannerMain.png";
import resume from "../../assets/FrontEndResume.pdf";
const FirstContent = () => {
  return (
    <div className=" h-[350px] lg:h-[1000px] w-full bg-gray-100">
      <div className="container relative mx-auto flex">
        <div className="lg:w-1/2  pl-3 w-2/5">
          <div className="absolute transition-all top-[50%] translate-y-[-50%] ">
            <MovingText
              type="flipFromBottom"
              duration="2000ms"
              delay="0s"
              direction="normal"
              timing="linear"
              iteration="1"
              fillMode="none"
            >
              <h4 className="text-gray-900 font-pops font-semibold text-sm lg:text-[34px] lg:pb-6">
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
              fillMode="none"
            >
              <h1 className="text-gray-900 font-pops font-semibold text-xl lg:text-[64px] py-3 lg:mt-10">
                I'm{" "}
                <span className="font-robs font-medium text-xl lg:text-[52px]">
                  Nazmul Ahsan
                </span>
              </h1>
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
              <h3 className="font-bold uppercase font-robo text-3xl lg:text-7xl mb-4 lg:mb-16 w-[200px] lg:w-[1000px] lg:mt-6">
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
              <button className="font-pops uppercase text-base lg:text-2xl px-8 lg:px-16 py-2 lg:py-4 bg-gray-900 text-white rounded-full transition hover:drop-shadow-2xl">
                <a href={resume} download="Resume">
                  Download CV
                </a>
              </button>
            </MovingText>
          </div>
        </div>
        <div className="lg:w-1/2 w-3/5 flex items-end justify-end md:justify-center md:items-center lg:py-16">
          <div className="flex items-end text-end justify-end md:justify-center px-2 lg:px-0 py-10">
            <img
              src={BannerMain}
              alt=""
              className="w-[400px] lg:w-[800px] h-[300px] lg:h-[650px] lg:mt-10"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FirstContent;
