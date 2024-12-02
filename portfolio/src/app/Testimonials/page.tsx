"use client";
import { BsArrowDownRight } from "react-icons/bs";
import Link from "next/link";
import { motion } from "framer-motion";

const services = [
  {
    num: "Mohamed Ouadou",
    title: "Full-stack Developer",
    description:
      "Mohamed wasn't just focused on solving problems but challenging himself to find the best solutions possible. His curiosity, innate, was rivalled only by his speed at which he learns new things. And one thing always shone through: a natural people person. Any group project, Mohamed would always come forward and make sure the collaboration flowed really smoothly, bringing into light the strengths of all those around him.",
    href: "",
  },
  {
    num: "Hiba Ibrahimi",
    title: "Full stack Engineer",
    description:
      "I highly recommend my colleague, who works with me as a full-stack developer at 2Peerfect Company. He demonstrates great ambition in finding solutions to every problem he encounters .... Even in tough situations, he manages to come up with a solution in the end. Additionally, his expertise as a front-end developer is excellent, along with strong back-end skills.",
    href: "",
  },
  {
    num: "Zineb Laabdi",
    title: "Full Stack developer",
    description: "One of his most outstanding qualities is his exceptional problem-solving ability. Whether tackling complex coding challenges or managing time-sensitive project requirements, he consistently delivers efficient and innovative solutions.In addition to his technical expertise .... It was truly a privilege to work alongside such a talented and reliable developer. I am confident he will be a tremendous asset to any organization he joins, and I look forward to witnessing his continued success.",
    href: "",
  },
];


function Services() {
  return (
    <>
      <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
              transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
            }}
            className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
          >
            {services.map((service, index) => {
              return (
                <div
                  key={index}
                  className="flex-1 flex flex-col justify-center gap-6 group"
                >
                  <div className="w-full flex justify-between items-center">
                    <div className="text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500">
                      {service.num}
                    </div>
                    <Link
                      href={service.href}
                      className="w-[70px] h-[70px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:-rotate-45"
                    >
                      <BsArrowDownRight className="text-primary text-3xl " />
                    </Link>
                  </div>
                  <h2 className="text-[42px] font-bold leading-none text-white  group-hover:text-accent transition-all duration-500">
                    {service.title}
                  </h2>
                  <p className="text-white/60">{service.description}</p>
                  <div className="border-b border-white/20 w-full"></div>
                </div>
              );
            })}
          </motion.div>
        </div>
      </section>
    </>
  );
}

export default Services;
