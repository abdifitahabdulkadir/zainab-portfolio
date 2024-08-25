import { ShowBentoGrid } from "./BentoGrid";

export default function Skills() {
  return (
    <section id="skills" className="py-10 z-50 px-5 mx-auto w-full ">
      <div className="flex flex-col gap-y-2 items-end justify-center">
        <h3>Skills</h3>
        <div className="bg-pinkColor rounded-[33px] relative h-[5px]  w-full ">
          <div className="bg-yellowColor rounded-[33px] absolute right-0 h-[5px] w-[80px] lg:w-[150px]"></div>
        </div>
      </div>
      <div className="mt-10 mb-5">
        <ShowBentoGrid />
      </div>
      {/* <div className="grid grid-cols-1 gap-x-[3rem] gap-y-[5rem] h-fit pb-10 lg:grid-cols-2 l w-full py-10 px-5 ">
        {personalSkills.map((skill, index) => {
          return <SkillItem key={skill.id} skillItem={skill} />;
        })}
      </div> */}
    </section>
  );
}
