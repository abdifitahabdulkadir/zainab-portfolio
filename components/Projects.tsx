"use client";

import { personalProjects } from "@/lib";
import { ProjectNames } from "@/types/types";
import { useState } from "react";
import Button from "./Button";
import ProjectItem from "./ProjectItem";

export default function Projects() {
  const [currentProject, setCurrentProjet] = useState(ProjectNames.python);

  const selectPtyhon = () => setCurrentProjet(ProjectNames.python);
  const selectJavascript = () => setCurrentProjet(ProjectNames.javascript);
  const selectMachineLearning = () =>
    setCurrentProjet(ProjectNames.machinelearning);
  return (
    <section id="projects" className="px-5 pt-12 pb-10 w-full">
      <div className="flex flex-col gap-y-2 items-start justify-center">
        <h3>Projects</h3>
        <div className="bg-pinkColor rounded-[33px] relative h-[5px]  w-full ">
          <div className="bg-yellowColor rounded-[33px] absolute right-0 h-[5px] w-[80px] lg:w-[150px]"></div>
        </div>
      </div>
      <div className="flex flex-col gap-x-4  py-10">
        <div className="flex text-xs lg:text-base  gap-x-3  flex-row items-center justify-around ">
          <Button onClicHandler={selectPtyhon} text="Python" />
          <Button onClicHandler={selectJavascript} text="JavaScript" />
          <Button
            onClicHandler={selectMachineLearning}
            text="Machine Learning"
          />
        </div>
        <ProjectItem projects={personalProjects[currentProject]} />
      </div>
    </section>
  );
}
