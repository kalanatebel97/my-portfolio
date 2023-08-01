import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className=" w-full h-screen bg-gradient-to-b  from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            {" "}
            About
          </p>
        </div>
        <p className="text-xl mt-20">
          I am a passionate and driven software engineer with a strong interest
          in modern web application development. Over the course of my 3 years
          of industry experience, I have honed my skills and expertise in
          popular JavaScript frameworks such as React, Angular, and Express.js,
          as well as frontend technologies including HTML, CSS, and JavaScript.
          I thrive on solving complex problems and take pride in delivering
          robust and efficient solutions. My focus on web app development has
          allowed me to master the art of creating seamless user experiences,
          leveraging the full potential of the chosen frameworks to build
          feature-rich and dynamic applications. In addition to my frontend
          expertise, I have a solid understanding of backend development, with a
          particular affinity for working with databases. My knowledge extends
          to both MongoDB and MySQL, enabling me to design and implement
          well-structured data storage solutions to support scalable web
          applications.
        </p>
        <br></br>
        <p className="text-xl">
          In summary, I am a highly motivated and adaptable software engineer,
          with a proven track record of delivering high-quality web
          applications. My combination of technical expertise, problem-solving
          skills, and eagerness to learn makes me an invaluable asset to any
          team, and I am excited to continue contributing to the world of web
          app development.
        </p>
      </div>
    </div>
  );
};

export default About;
