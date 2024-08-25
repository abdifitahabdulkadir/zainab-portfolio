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
        className="flex  min-h-[30rem] max-h-full  relative z-50 flex-col max-w-4xl mx-auto items-center py-10
     justify-center"
      >
        <div className="max-w-5xl  w-[17rem] h-[17rem] mb-10 gradientBgColor rounded-full p-10 projectItemDropShadow">
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
