"use client";
import { ExperienceEducationType } from "@/types/types";
import Timeline from "@mui/lab/Timeline";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";

export function ExpreinceEducationItem({
  items,
}: {
  items: ExperienceEducationType[];
}) {
  return (
    <Timeline
      position="alternate"
      className="w-full overflow-x-auto  pb-6 lg:w-[80%]"
    >
      <TimelineItem></TimelineItem>
      {items.map((exp, index) => {
        const isEven: Boolean = index % 2 === 0;
        return (
          <TimelineItem key={exp.id} className="w-full  h-full ">
            <TimelineSeparator>
              <TimelineDot className="bg-primary w-[4.6rem] h-[4.6rem] rounded-full projectItemDropShadow px-2 py-3  hidden md:flex md:items-center md:justify-center gap-y-1 md:flex-col ">
                {exp.date.split(" ").map((value) => {
                  return (
                    <span
                      key={value}
                      className="text-xs text-center italic   text-pinkColor"
                    >
                      {value}
                    </span>
                  );
                })}
              </TimelineDot>
              <TimelineConnector className="bg-white/20 rounded-md hidden md:block" />
            </TimelineSeparator>
            <TimelineContent className="w-full h-full">
              <div className="min-w-[16rem] max-w-[100%] h-full rounded-[24px] expreinceEducatonGradientBg projectItemDropShadow flex-col px-5 pb-8 flex py-5 items-center   justify-center">
                <h4 className="font-bold text-white lg:text-xl self-start text-center text-base  line-clamp-2  ">
                  {exp.title}
                </h4>
                <hr
                  className={`text-white/30 opacity-30 w-[60%] mt-2 mb-3 rounded-sm ${
                    isEven ? "self-start" : "self-end"
                  }`}
                />

                <p
                  className="text-white/60 mt-4 overflow-clip
                lg:line-clamp-none text-xs lg:text-base text-left"
                >
                  {exp.des}
                </p>
              </div>
            </TimelineContent>
          </TimelineItem>
        );
      })}
    </Timeline>
  );
}
