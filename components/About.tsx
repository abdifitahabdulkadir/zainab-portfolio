"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function About() {
  return (
    <div
      id="about"
      className="flex w-full max-h-fit z-50 items-center mt-10 px-5 gap-x-10 mx-auto flex-col lg:flex-row justify-center  gap-y-10  max-w-[60rem]"
    >
      <motion.div
        initial={{
          translateX: "-10px",
          scale: 0.7,
        }}
        transition={{
          duration: 0.8,
        }}
        whileInView={{
          translateX: "10px",
          scale: 1,
        }}
        viewport={{
          once: true,
        }}
        className="gradientBgColor h-[20rem] overflow-hidden  imageDropShadow px-4 rounded-[29px] min-w-[12rem]  max-w-[30rem] "
      >
        <Image
          src="/gardenining.svg"
          alt="about image "
          height={100}
          width={100}
          className="w-full h-full object-fit relative -bottom-[1.1rem] "
        />
      </motion.div>
      <div className="w-fit h-full">
        <h2 className="font-medium lg:text-left text-[1.1rem] text-center">
          About me
        </h2>
        <motion.p
          initial={{
            opacity: 0.8,
          }}
          transition={{
            duration: 0.7,
          }}
          whileInView={{
            opacity: 1,
          }}
          viewport={{
            once: true,
          }}
          className="font-[100] lg:text-left lg:text-[1.4rem] leading-6 lg:leading-9
          text-[0.9rem] text-center"
        >
          I am actively seeking opportunities to apply my acquired skills and
          knowledge to real-world environmental projects. My educational
          background has provided me with a strong foundation in environmental
          science, including ecosystem analysis, conservation strategies, and
          sustainability practices. Additionally, I have gained practical
          experience through hands-on projects, both independently and in
          collaborative settings.
        </motion.p>
      </div>
    </div>
  );
}
