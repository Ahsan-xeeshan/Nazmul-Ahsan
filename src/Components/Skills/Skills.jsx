import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import boostrap from "../../assets/SkillLogo/boostrap.png";
import css from "../../assets/SkillLogo/css.png";
import html from "../../assets/SkillLogo/html.png";
import jquery from "../../assets/SkillLogo/jquery.png";
import js from "../../assets/SkillLogo/js.png";
import reactIcon from "../../assets/SkillLogo/react.png";
import sass from "../../assets/SkillLogo/sass.png";
import tailwind from "../../assets/SkillLogo/tailwind.png";
const Skills = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <div id="Skills">
      <div className="container mx-auto">
        <div
          className="text-center py-4  transition-all lg:py-20"
          data-aos="fade-down"
        >
          <h3 className="text-2xl lg:text-5xl font-pops font-bold transition-all">
            Skills That Powered Me
          </h3>
        </div>
        <div
          className=" flex justify-between gap-8  items-center mt-8 flex-wrap "
          data-aos="fade-up"
        >
          <div className="text-center">
            <img src={html} alt="HTML" className="w-[80px] h-[90px]" />
            <p className="font-medium text-lg">HTML5</p>
          </div>
          <div className="text-center">
            <img src={css} alt="css" className="w-[80px] h-[90px]" />
            <p className="font-medium text-lg">CSS3</p>
          </div>
          <div className="text-center">
            <img src={js} alt="js" className="w-[80px] h-[90px]" />
            <p className="font-medium text-lg">JavaScript</p>
          </div>
          <div className="text-center">
            <img src={boostrap} alt="boostrap" className="w-[80px] h-[90px]" />
            <p className="font-medium text-lg">Boostrap</p>
          </div>
          <div className="text-center">
            <img src={jquery} alt="jquery" className="w-[80px] h-[90px]" />
            <p className="font-medium text-lg">Jquery</p>
          </div>
          <div className="text-center">
            <img src={sass} alt="React" className="w-[80px] h-[90px]" />
            <p className="font-medium text-lg">SASS</p>
          </div>
          <div className="text-center">
            <img src={tailwind} alt="tailwind" className="w-[80px] h-[90px]" />
            <p className="font-medium text-lg">Tailwind</p>
          </div>
          <div className="text-center">
            <img src={reactIcon} alt="React" className="w-[80px] h-[90px]" />
            <p className="font-medium text-lg">React</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
