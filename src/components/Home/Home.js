import React from "react";
import HeroImage from "../../assets/kalana.png";
import { MdKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-4xl sm:text-7xl font-bold text-white">
            I'm a Full Stack Developer
          </h2>
          <p className="text-gray-500 py-4 max-w-md">
          A passionate software engineer having almost 3 years of experience specializing in
            web app development. I excel in popular JavaScript frameworks & I
            deliver efficient and seamless user experiences. A problem solver
            and quick learner, I thrive in collaborative environments, always
            seeking innovative solutions to create cutting-edge web
            applications. Let's create something amazing together! 
          </p>

          <div>
            <Link to="portfolio" smooth duration={500} className=" group cursor-pointer text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500">
              Portfolio{" "}
              <span className="group-hover:rotate-90 duration-300">
                {" "}
                <MdKeyboardArrowRight className="ml-1" size={25} />
              </span>
            </Link>
          </div>
        </div>

        <div>
          <img
            src={HeroImage}
            alt="my profile"
            className="rounded-2xl mx-auto w-2/3 md:w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
