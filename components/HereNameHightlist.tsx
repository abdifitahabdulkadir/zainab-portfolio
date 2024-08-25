"use client";
import { motion } from "framer-motion";
import SocailMedia from "./SocailMedia";
import DowloadCV from "./ui/DowloadCV";
import { HeroHighlight, Highlight } from "./ui/HeroTextHighlight";

export function HeroNameHightLight() {
  return (
    <HeroHighlight>
      <motion.h1
        initial={{
          opacity: 0,
          y: 20,
        }}
        animate={{
          opacity: 1,
          y: [20, -5, 0],
        }}
        transition={{
          duration: 0.5,
          ease: [0.4, 0.0, 0.2, 1],
        }}
        className="flex flex-col gap-y-2 w-full lg:mx-auto md:w-[30rem] items-center  text-left justify-center pt-2 pb-4 "
      >
        <p className="text-[1rem] font-[400] text-whtie">Hey</p>

        <div className="relative bg-clip-text text-transparent bg-no-repeat bg-gradient-to-r from-purple-500 via-violet-500 to-pink-500 py-4">
          <h1 className="text-4xl font-bold">I&rsquo;m Zainab Ahmed</h1>
        </div>

        <Highlight className="text-black opacity-80 dark:text-white">
          <p className="font-medium text-[1rem]">
            Environmental Science
            <span className="text-tertiary">Specialist</span>
          </p>
        </Highlight>

        <p className="text-center">
          A dedicated graduate in Environmental Science with a passion for
          sustainability and ecological preservation. Eager to apply my
          knowledge and skills to real-world challenges and contribute to
          advancing environmental solutions and conservation efforts.
        </p>
        <div className="flex flex-col gap-y-5  lg:flex-row py-6 items-center justify-center gap-x-7">
          <DowloadCV />
          <SocailMedia />
        </div>
      </motion.h1>
    </HeroHighlight>
  );
}
