import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { FaGithub } from "react-icons/fa";
import { GoLinkExternal } from "react-icons/go";

const projects = [
  {
    title: "emprise",
    description: "Simply Responsive Web Design With HTML, CSS & Bootstrap.",
    image: "emprise-boostrap.jpg",
    demo: "https://emprise.vercel.app/",
    github: "https://github.com/Ahsan-xeeshan/Emprise",
  },
  {
    title: "qwery",
    description:
      "A single responsive landpage that design with HTML, CSS & SASS.S ",
    image: "query_sass.jpg",
    demo: "https://qwery-sass-responsive.vercel.app/",
    github: "https://github.com/Ahsan-xeeshan/Qwery-sass-responsive",
  },
  {
    title: "finsweet",
    description:
      "It is a multipage website that design with HTML, CSS & Bootstap.",
    image: "finsweet.jpg",
    demo: "http://finsweet-design.vercel.app",
    github: "https://github.com/Ahsan-xeeshan/finsweet",
  },
  {
    title: "produstry",
    description:
      "A PSD to HTML project that develop with HTML, CSS, Bootstap & Jquery. ",
    image: "produstry.jpg",
    demo: "https://produstry.vercel.app/",
    github: "https://github.com/Ahsan-xeeshan/Produstry-Draft",
  },
  {
    title: "gossip worlds",
    description:
      "It is social media profile page that develop with react, redux & firebase, design with tailwind CSS where user can registration, login, upload profile image, cover image, post his thoughts & images.",
    image: "gossip.jpg",
    demo: "https://gossip-world.vercel.app/",
    github: "https://github.com/Ahsan-xeeshan/whistle-profile",
  },
  {
    title: "whistle chat",
    description:
      "It is chatting application which develop with react, redux, firebase and design with tailwind CSS.  In this application users can registration , login, send friend request, block other users, create group, chat with friends.",
    image: "whistle-chat.jpg",
    demo: "https://whistle-chat.vercel.app/",
    github: "https://github.com/Ahsan-xeeshan/whistle-chat",
  },

  // Add more projects as needed
];

const Portfolio = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <div
      className="container mx-auto mt-[70px] lg:mt-[150px]  bg-white py-4 lg:py-16"
      id="Portfolio"
    >
      <div className="text-center mb-9" data-aos="fade-down">
        <h3 className="text-2xl lg:text-5xl font-pops font-bold transition-all mb-5 capitalize">
          Latest projects that I worked
        </h3>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mx-auto mt-10 lg:mt-[150px]">
        {projects.map((project, index) => (
          <div
            data-aos="fade-up"
            key={index}
            className="mx-4 my-2 bg-gray-100 p-4 rounded-md shadow-md transition-all duration-300 hover:scale-105"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-[400px] lg:w-[600px] rounded-md mb-4 h-auto mx-auto"
            />
            <div className="pl-5">
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-600 w-[300px] lg:w-[580px]">
                {project.description}
              </p>
            </div>
            <div className="flex justify-end font-semibold text-[20px] text-slate-800">
              <a
                className="mr-3 flex items-center justify-between gap-1 hover:underline transition-all duration-300 cursor-pointer"
                onClick={() => window.open(project.github, "_blank")}
              >
                GitHub <FaGithub />
              </a>
              <a
                className="flex items-center justify-between gap-1 hover:underline transition-all duration-300 cursor-pointer"
                onClick={() => window.open(project.demo, "_blank")}
              >
                Demo <GoLinkExternal />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
