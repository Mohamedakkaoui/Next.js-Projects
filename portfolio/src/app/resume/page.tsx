"use client";
import { title } from "process";
import {
  FaHtml5,
  FaCss3,
  FaNodeJs,
  FaFigma,
  FaReact,
  FaJs,
  FaPython,
  FaGithub,
  FaBootstrap,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiNextdotjs,
  SiTypescript,
  SiMongodb,
  SiExpress,
  SiRedux,
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import { FaGit } from "react-icons/fa6";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";
import SVg from "@/Public/badge.svg";
const about = {
  title: "About me",
  description: `Hey! I'm Mohamed Akkaoui, a passionate Full Stack Developer with a love for technology and continuous learning. For me, coding goes beyond just work—it's a source of joy and creativity. I’m always exploring new technologies and methodologies that push the boundaries of what’s possible. When I'm not coding, I enjoy reading and playing basketball, which keeps me balanced and energized with fresh ideas. I’m always eager to take on new challenges, learn new things, and contribute to exciting projects.`,
  info: [
    { fileName: "Name", fieldValue: "Mohamed akkaoui" },
    { fileName: "Phone", fieldValue: "(+212)631603723" },
    { fileName: "Experience", fieldValue: "1 Year" },
    { fileName: "Nationality", fieldValue: "Moroccan" },
    { fileName: "Email", fieldValue: "akkaouimohamed00@gmail.com" },
    { fileName: "Status", fieldValue: "Available" },
    { fileName: "Languages", fieldValue: "Arabic, French, English" },
  ],
};

const experience = {
  icon: "",
  title: "My experience",
  description:
    "I have hands-on experience in full-stack development, taking on real-world challenges and contributing to impactful projects. I enjoy working in dynamic environments and continuously pushing my skills to grow as a developer.",
  items: [
    {
      company: "2Peerfect",
      position: "Full Stack Developer",
      duration: "June 2024 - Present 2024",
    },
    {
      company: "ARK-X Talent Factory",
      position: "Mern Developer",
      duration: "January 2024 - June 2024",
    },
    {
      company: "Digisell",
      position: "Conseiller Commercial",
      duration: "June 2022 - January 2023",
    },
  ],
};

const education = {
  icon: "",
  title: "My education",
  description:
    "I have a solid foundation in full-stack development, with comprehensive training in both frontend and backend technologies. My Academic background has enhanced my problem-solving abilities, enabling me to tackle complex technical challenges and develop complete web solutions.",
  items: [
    {
      institution: "JobinTech",
      degree: "Mern Full Stack",
      duration: "January 24 - June 24",
    },
    {
      institution: "Alx",
      degree: "Software Enginering",
      duration: "June 23 - january 24",
    },
    {
      institution: "University Ibno Tofail",
      degree: "Chemistry-Physics License",
      duration: "2017 - 2022",
    },
    {
      institution: "American Language School Access",
      degree: "English Access Microscholarship",
      duration: "2016 - 2018",
    },
  ],
};

const skills = {
  title: "My skills",
  description:
    "I specialize in full-stack development, building scalable applications with modern technologies. I focus on creating efficient, user-friendly interfaces and backend systems while continuously learning and staying updated with industry trends ",
  skillList: [
    {
      title: "Frontend Technologies",
      SkillSet: [
        {
          icon: <FaReact />,
          name: "React.js",
        },
        {
          icon: <SiNextdotjs />,
          name: "Next.js",
        },
        {
          icon: <FaHtml5 />,
          name: "Html 5",
        },
        {
          icon: <FaCss3 />,
          name: "Css",
        },
        {
          icon: <FaBootstrap />,
          name: "BootStrap",
        },
        {
          icon: <SiTailwindcss />,
          name: "Tailwind.css",
        },
        {
          icon: <SiRedux />,
          name: "Redux",
        },
      ],
    },
    {
      title: "Backend Technologies",
      SkillSet: [
        {
          icon: <FaNodeJs />,
          name: "Node.js",
        },
        {
          icon: <SiExpress />,
          name: "Express.js",
        },
        {
          icon: <SiMongodb />,
          name: "MongoDB",
        },
      ],
    },
    {
      title: "Programming Languages",
      SkillSet: [
        {
          icon: <FaJs />,
          name: "Javascript",
        },
        {
          icon: <SiTypescript />,
          name: "Typescript",
        },
        {
          icon: <FaPython />,
          name: "Python",
        },
      ],
    },
    {
      title: "Tools/Version Control",
      SkillSet: [
        {
          icon: <FaGithub />,
          name: "Github",
        },
        {
          icon: <FaGit />,
          name: "Git",
        },
        {
          icon: <VscVscode />,
          name: "Vscode",
        },
        {
          icon: <FaFigma />,
          name: "Figma",
        },
      ],
    },
  ],
};

function Resume() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="experience"
          className="flex flex-col xl:flex-row gap-[60px]"
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About me</TabsTrigger>
          </TabsList>
          <div className="min-h-[70vh] w-full">
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{experience.title}</h3>
                <p className="mx-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {experience.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {experience.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                            {item.position}
                          </h3>
                          <div className="flex items-center gap-3">
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60">{item.company}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{education.title}</h3>
                <p className="mx-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {education.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {education.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                            {item.degree}
                          </h3>
                          <div className="flex items-center gap-3">
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60">{item.institution}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            <TabsContent value="skills" className="w-full h-full">
              <div className="flex flex-col gap-[30px]">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{skills.title}</h3>
                  <p className="mx-w-[600px] text-white/60 mx-auto xl:mx-0">
                    {skills.description}
                  </p>
                </div>
                <ul className="flex flex-col w-full  gap-4 xl:gap-[30px]">
                  {skills.skillList.map((skill, index) => {
                    return (
                      <li
                        key={index}
                        className="xl:text-left md:text-left text-center"
                      >
                        <h3 className="text-2xl font-bold mb-6">
                          {skill.title}
                        </h3>
                        <div className="flex flex-wrap gap-[30px] sm:gap-[15px] md:justify-start justify-center">
                          {skill.SkillSet.map((item, index) => {
                            return (
                              <TooltipProvider key={index} delayDuration={100}>
                                <Tooltip>
                                  <TooltipTrigger className="w-[150px] h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                                    <div className="text-6xl group-hover:text-accent transition-all duration-300">
                                      {item.icon}
                                    </div>
                                  </TooltipTrigger>
                                  <TooltipContent>
                                    <p className="capitalize">{item.name}</p>
                                  </TooltipContent>
                                </Tooltip>
                              </TooltipProvider>
                            );
                          })}
                        </div>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>
            <TabsContent
              value="about"
              className="w-full text-center xl:text-left"
            >
              <div className="flex flex-col gap-[30px]">
                <h3 className="text-4xl font-bold">{about.title}</h3>
                <p className="mx-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {about.description}
                </p>
                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[820px] mx-auto xl:mx-0">
                  {about.info.map((item, index) => {
                    return (
                      <li
                        key={index}
                        className="flex items-center justify-center xl:justify-start gap-4"
                      >
                        <span className="text-white/60">{item.fileName}</span>
                        <span className="text-xl">{item.fieldValue}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
}

export default Resume;
