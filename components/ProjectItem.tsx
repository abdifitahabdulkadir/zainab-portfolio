import { ProjectInformationType } from "@/types/types";
import Image from "next/image";
import { useState } from "react";
import { FaGithub } from "react-icons/fa";

export default function ProjectItem({
  projects,
}: {
  projects: ProjectInformationType[];
}) {
  const [activeProjectIndex, setActiveProjectIndex] = useState<number>(0);
  return (
    <div
      className="flex justify-evenly  px-5
     flex-col lg:flex-row gap-x-10   gap-y-3 mt-10  max-w-7xl"
    >
      <div className="flex   flex-row justify-around lg:flex-col order-2 lg:order-1 gap-y-3">
        {projects.map(({ icon, id }, index) => {
          const isEven: Boolean = index % 2 === 0;
          return (
            <MakeImageCircle
              isEven={isEven}
              handeOnclick={() => setActiveProjectIndex(index)}
              image={icon}
              key={id}
            />
          );
        })}
      </div>
      <ActiveProjectInformation projectItem={projects[activeProjectIndex]} />
    </div>
  );
}

function MakeImageCircle({
  image,
  isEven,
  handeOnclick,
}: {
  image: string;
  isEven: Boolean;
  handeOnclick: VoidFunction;
}) {
  return (
    <div className="w-[80px] h-[80px] projectItemDropShadow px-2 py-2 flex items-center justify-center rounded-full">
      <Image
        width={100}
        height={100}
        priority
        onClick={handeOnclick}
        src={image}
        alt="project image"
        className={`rounded-full  ${
          isEven ? " hover:rotate-90 " : " hover:-rotate-90 "
        } transition-all duration-200 cursor-pointer w-full h-full `}
      />
    </div>
  );
}

function ActiveProjectInformation({
  projectItem,
}: {
  projectItem: ProjectInformationType;
}) {
  return (
    <div className="bg-secondary projectItemDropShadow order-1 lg:order-2 self-center flex flex-col   projectItemShadow px-3 pb-5  items-center py-2  w-full max-w-[30rem] h-fit">
      <Image
        width={100}
        height={100}
        priority
        src={projectItem.image}
        alt={projectItem.title}
        className="w-[98%] max-w-full overflow-hidden my-3  rounded-[16px]"
      />
      <h4 className="font-semibold text-[2rem] ">{projectItem.title}</h4>
      <p className="text-center font-[100] text-[1.1rem]">{projectItem.des}</p>
      <FaGithub className="mt-5  text-3xl text-white/90 cursor-pointer hover:text-pinkColor transition-all duration-500" />
    </div>
  );
}
