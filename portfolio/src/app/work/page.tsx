"use client";
import { motion } from "framer-motion";
import React, { useState } from "react";
import { Swiper as SwiperType, SwiperSlide } from "swiper/react";
import "swiper/css";
import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Link from "next/link";
import Image from "next/image";
import Image1 from "@/Public/Screenshot 2024-09-29 164620.png";
import Image2 from "@/Public/Screen Shot 2024-06-26 at 15.10.25.png";
import Image3 from "@/Public/Screenshot 2024-11-23 224248.png";
import WorkSliderBtns from "@/components/WorkSliderBtns";
const projects = [
  {
    num: "01",
    category: "Full-Stack",
    title: "RYMZ",
    description:
      "A modern real estate platform built with a focus on user experience, offering advanced property search features, Mapbox integration, and comprehensive user and admin dashboards for seamless property management.",
    stack: [
      {
        name: "Javascript",
      },
      {
        name: "Node.js",
      },
      {
        name: "Express",
      },
      {
        name: "MongoDB",
      },
      {
        name: "React",
      },
      {
        name: "Bootstrap",
      },
    ],
    image: Image2,
    live: "Soon",
    github:
      "https://github.com/Mohamedakkaoui/Real-Estate-Website/tree/betaVersion2",
  },
  {
    num: "02",
    category: "frontend",
    title: "Portfolio",
    description:
      "A sleek personal portfolio built with Next.js, TypeScript, and Framer Motion, showcasing my web development projects with smooth animations and a responsive, modern design",
    stack: [
      {
        name: "Next.js",
      },
      {
        name: "TailwindCSS",
      },
      {
        name: "Typescript",
      },
      {
        name: "Framer Motion",
      },
    ],
    image: Image1,
    live: "Soon",
    github:
      "https://github.com/Mohamedakkaoui/Next.js-Projects/tree/master/portfolio",
  },
  {
    num: "03",
    category: "FullStack",
    title: "E-learning.AI",
    description:
      "A comprehensive E-learning platform featuring AI-driven tools, allowing users to customize avatars, create dynamic content, and engage with advanced video editing features for an immersive learning experience",
    stack: [
      {
        name: "Javascript",
      },
      {
        name: "Node.js",
      },
      {
        name: "Express",
      },
      {
        name: "MongoDB",
      },
      {
        name: "React",
      },
      {
        name: "TailwindCSS",
      },
    ],
    image: Image3,
    live: "Soon",
    github: "https://github.com/Mohamedakkaoui/E-learning.AI",
  },
];
function Work() {
  const [project, setProject] = useState(projects[0]);

  const handleSlideChange = (swiper) => {
    const currentIndex = swiper.activeIndex;
    setProject(projects[currentIndex]);
  };
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex flex-col justify-center py-12  xl:px-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[35px]">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[30px] h-[50%]">
              <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                {project.num}
              </div>
              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
                {project.category} project
              </h2>
              <p className="text-white/80">{project.description}</p>
              <ul className="flex gap-4">
                {project.stack.map((item, index) => {
                  return (
                    <li key={index} className="text-lg text-accent">
                      {item.name}
                      {index !== project.stack.length - 1 && ","}
                    </li>
                  );
                })}
              </ul>
              <div className="border border-white/20"></div>
              <div className="flex items-center gap-4">
                <Link href={project.live}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsArrowUpRight className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>live project</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
                <Link href={project.github}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsGithub className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Github repositery</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full xl:w-[50%]">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="xl:h-[520px] mb-12"
              onSlideChange={handleSlideChange}
            >
              {projects.map((project, index) => {
                return (
                  <SwiperSlide key={index} className="w-full">
                    <div className="h-[460px] trelative gropup flex  justify-center items-center bg-pink-50/20">
                      <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>
                      <div className="relative w-full h-full">
                        <Image
                          src={project.image}
                          fill
                          className="object-cover"
                          alt=""
                        ></Image>
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
              <WorkSliderBtns
                btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all"
                containerStyles="flex gap-2 absolute right-0 bottom-[calc(50% - 22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
              />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  );
}

export default Work;
