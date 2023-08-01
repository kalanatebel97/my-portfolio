import React from "react";
import html from "../../assets/html.png";
import css from "../../assets/css.png";
import javascript from "../../assets/javascript.png";
import reactImage from "../../assets/react.png";
import github from "../../assets/github.png";
import tailwind from "../../assets/tailwind.png";
import angular from "../../assets/angular.png";
import redux from "../../assets/redux.png";
import mongodb from "../../assets/mongodb.png";
import mysql from "../../assets/mysql.png";
import expresJS from "../../assets/nodejs.png"
import netCore from "../../assets/core.png";

const TechStack = () => {
  const techs = [
    {
      id: 1,
      src: reactImage,
      title: "React",
      style: "shadow-blue-600",
    },
    {
      id: 2,
      src: angular,
      title: "Angular",
      style: "shadow-red-600",
    },
    {
      id: 3,
      src: expresJS,
      title: "Express JS",
      style: "shadow-green-400",
    },
    {
      id: 4,
      src: netCore,
      title: "ASP .NET Core",
      style: "shadow-blue-500",
    },
    {
      id: 5,
      src: mongodb,
      title: "MongoDB",
      style: "shadow-green-300",
    },
    {
      id: 6,
      src: mysql,
      title: "MySQL",
      style: "shadow-yellow-500",
    },
    {
      id: 7,
      src: javascript,
      title: "JavaScript",
      style: "shadow-yellow-500",
    },

    {
      id: 9,
      src: html,
      title: "HTML",
      style: "shadow-orange-500",
    },
    {
      id: 10,
      src: css,
      title: "CSS",
      style: "shadow-blue-500",
    },
    {
      id: 11,
      src: tailwind,
      title: "Tailwind",
      style: "shadow-sky-400",
    },

    {
      id: 12,
      src: redux,
      title: "Redux",
      style: "shadow-pink-400",
    },
    {
      id: 13,
      src: github,
      title: "GitHub",
      style: "shadow-gray-400",
    },
  ];

  return (
    <div
      name="techStack"
      className="bg-gradient-to-b  from-gray-800 to-black w-full h-screen"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <div>
          <p className="text-4xl font-bold inline justify-center border-b-4 border-gray-500">
            Tech Stack
          </p>
          <p className="py-6">These are the technologies I've worked with</p>
        </div>
        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
          {techs.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg  ${style}`}
            >
              <img className="w-20 mx-auto" src={src} alt=""></img>
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TechStack;
