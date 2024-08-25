"use client";

import { educations, experiences } from "@/lib";
import { useState } from "react";
import Button from "./Button";
import { ExpreinceEducationItem } from "./ui/ExpreinceEducationItem";

export default function Experience() {
  const [toggle, setToggle] = useState<Boolean>(true);
  const showExpreince = () => setToggle(true);
  const showEducation = () => setToggle(false);

  return (
    <section
      id="expreince | education"
      className="py-10 z-50 relative px-1 md:px-3 lg:px-5 gap-y-[10rem] w-full h-full mt-10"
    >
      <div className="flex flex-col gap-y-2 items-start justify-center">
        <h3>{toggle ? "Experience" : "Education"}</h3>
        <div className="bg-pinkColor rounded-[33px] relative h-[5px]  w-full ">
          <div className="bg-yellowColor rounded-[33px] absolute right-0 h-[5px] w-[80px] lg:w-[150px]"></div>
        </div>
      </div>

      <div className="flex items-center pt-5  gap-x-2 justify-around min-w-fit max-w-full">
        <Button
          text="Experience"
          onClicHandler={showExpreince}
          className={` hover:bg-none hover:bg-pinkColor/60 ${
            toggle && " bg-none bg-pinkColor"
          }`}
        />
        <Button
          text="Education"
          onClicHandler={showEducation}
          className={` hover:bg-none hover:bg-pinkColor/60 ${
            !toggle && " bg-none bg-pinkColor"
          }`}
        />
      </div>

      <div className="flex flex-col mt-10 h-full  items-center justify-center  max-w-6xl">
        {toggle ? (
          <ExpreinceEducationItem items={experiences} />
        ) : (
          <ExpreinceEducationItem items={educations} />
        )}
      </div>
    </section>
  );
}
