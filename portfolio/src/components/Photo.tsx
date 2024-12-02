"use client";
import {  motion } from "framer-motion";
import Selfie from "@/Public/image00001-min.png";
import Image from "next/image";
function Photo() {
  return (
    <div className="w-full h-full relative">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 1, duration: 0.4, ease: "easeIn" },
        }}
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 1.7, duration: 0.4, ease: "easeInOut" },
          }}
          className="w-[298px] h-[298px] xl:w-[498px] xl:h-[498px] mix-blend-lighten"
        >
          <Image
            src={Selfie}
            priority
            quality={100}
            fill
            alt=""
            className="object-contain rounded-t-full "
          ></Image>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default Photo;
