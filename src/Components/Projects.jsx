import React from "react";
import codetutor from "../assets/codetutor.png";
import estate from "../assets/estate.png";
import landing from "../assets/landing.png";
import realestate from "../assets/realestate.png";
import tasktracker from "../assets/tasktracker.png";
import weather from "../assets/weather.png";
import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";
import versal from "../assets/versal.png";
import neardoc from "../assets/neardoc.png";

const projectsData = [
  {
    Id: 1,
    Title: "Task Tracker",
    text: "A Task Tracker that empowers users to efficiently manage their to-do lists helping individuals stay organized and productive in their daily lives.",
    link: "https://timi-task-tracker.netlify.app/",
    image: tasktracker,
  },
  {
    Id: 2,
    Title: "Real estate ",
    text: "A simple real estate web app that displays houses and apartments for sale",
    link: "https://timi-real-estate.netlify.app/",
    image: estate,
  },
  {
    Id: 3,
    Title: "Coding tutor",
    text: "Built a demo coding tutor web page using react, tailwind-css .",
    link: "https://timi-code-tutor.netlify.app/",
    image: codetutor,
  },
  {
    Id: 4,
    Title: "",
    text: "Built a simple landing page for a  company using react , tailwind-css , framer",
    link: "https://versaldigitalsolutions.com/",
    image: versal,
  },
  {
    Id: 5,
    Title: "Near Doc",
    text: "A full-stack healthcare appointment platform that connects patients, doctors, and administrators. Users can browse doctors, create accounts, book and pay for appointments, or cancel when needed. Doctors can approve and complete appointments while tracking their payments, and admins can manage appointments, users, and platform payments.",
    link: "https://docapp-frontend-a39c.onrender.com/",
    image: neardoc,
  },
  {
    Id: 6,
    Title: "Real esate ",
    text: "A Real Estate web application that caters to buyers in different countries, each with distinct price ranges.Built with React.js and Vanilla CSS.",
    link: "https://timi-real-estate-demo.netlify.app/",
    image: realestate,
  },
];

const Projects = () => {
  return (
    <section id="projects" className="my-16 space-y-4">
      {/* header section */}
      <div className="max-w-lg mx-auto space-y-2">
        <h1 className="font-display md:text-6xl font-bold text-4xl pt-12 text-center">
          My Projects
        </h1>
      </div>
      {/* cards */}
      <motion.div
        variants={fadeIn("left", 0.6)}
        initial="hidden"
        whileInView="show"
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 py-4 md:py-12 mx-auto "
      >
        {projectsData.map((project) => (
          <div
            key={project.Id}
            className="text-center  hover:shadow-2xl p-4 space-y-6"
          >
            <img
              src={project.image}
              className="w-1/2 flex items-center justify-center  mx-auto"
              alt=""
            />
            <div>
              <h2 className="font-display text-2xl text-black">
                {project.Title}
              </h2>
              <p className="font-display">{project.text}</p>
            </div>
            <buttton
              className=" border-2 border-blue-800 md:text-2xl  py-3 px-4 mb-4  mt-2 md:py-2 md:p-4
         hover:text-white hover:bg-blue-800 transition-all font-display rounded-full"
            >
              <a className="text-[12px]" href={project.link}>
                View Live
              </a>
            </buttton>
          </div>
        ))}
      </motion.div>
    </section>
  );
};

export default Projects;
