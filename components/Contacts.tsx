"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import ContactForm from "./ContactForm";

export default function Contacts() {
  return (
    <motion.section
      initial={{
        scale: 0.8,
      }}
      transition={{
        duration: 0.6,
      }}
      whileInView={{
        scale: 1,
      }}
      id="contact"
      className=" py-10 px-6  w-full relative z-[300]"
    >
      <div className="flex flex-col  gap-y-2 items-start justify-center">
        <h3 className="self-end">Contact</h3>
        <div className="bg-pinkColor rounded-[33px] relative h-[5px]  w-full ">
          <div className="bg-yellowColor rounded-[33px] absolute right-0 h-[5px] w-[80px] lg:w-[150px]"></div>
        </div>
      </div>

      {/* contacts ifnormation */}
      <div className="flex flex-col  justify-center items-center lg:flex-row gap-x-10 gap-y-6 mt-10 w-full">
        <div className="contactImageGradientBg  h-[20rem] overflow-hidden  imageDropShadow px-4 rounded-[29px] min-w-fit  max-w-full">
          <Image
            src="/person-image.svg"
            alt="about image "
            width={100}
            height={100}
            className="w-full h-full object-fit relative -bottom-[1.1rem] "
          />
        </div>
        <div className="w-fit h-full ">
          <ContactForm />
        </div>
      </div>
    </motion.section>
  );
}
