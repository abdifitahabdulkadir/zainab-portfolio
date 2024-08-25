"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { HeroNameHightLight } from "./HereNameHightlist";
import { HeroBackgroundWrapper } from "./HeroBackgroundWrapper";

export default function Hero() {
  const { scrollYProgress } = useScroll();
  const scaleTransfrom = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  return (
    <HeroBackgroundWrapper>
      <motion.div
        style={{
          scale: scaleTransfrom,
          transition: "all .2s",
        }}
        className="flex relative gap-y-6 z-50 flex-col max-w-4xl mx-auto items-center 
     justify-center "
      >
        <div className="max-w-5xl  w-[13rem] md:w-[17rem] md:h-[17rem]  h-[13rem] mb-10 lg:mb-5 gradientBgColor rounded-full p-5 projectItemDropShadow">
          <Image
            src="/planint.svg"
            width={100}
            height={100}
            priority
            alt="Hero image"
            className="w-full h-full rounded-full"
          />
        </div>
        <HeroNameHightLight />
      </motion.div>
    </HeroBackgroundWrapper>
  );
}
