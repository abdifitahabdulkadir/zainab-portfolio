import {
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
} from "@tabler/icons-react";
import { BentoGrid, BentoGridItem } from "./ui/BentiGridEffect";

export function ShowBentoGrid() {
  return (
    <BentoGrid
      className="max-w-4xl relative z-50
     mx-auto md:auto-rows-[20rem]"
    >
      {items.map((item, i) => (
        <BentoGridItem
          thumb={item.thumb}
          key={i}
          title={item.title}
          description={item.des}
          header={<Skeleton />}
          className={item.className}
          icon={item.icon}
        />
      ))}
    </BentoGrid>
  );
}
const Skeleton = () => (
  <div
    className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl   dark:bg-dot-white/[0.2] bg-dot-black/[0.2] [mask-image:radial-gradient(ellipse_at_center,white,transparent)]  border border-red-300
  dark:border-white/[0.2]  expreinceEducatonGradientBg"
  ></div>
);
const items = [
  {
    title: "Communication",
    des: "I articulate thoughts and ideas effectively in both conversation and writing, ensuring clear expression at all times. Always available to communicate, I prioritize responsive messaging so that nothing gets lost in translation. I also listen actively, making sure to grasp the nuances of every discussion, fostering a deep understanding.",
    header: <Skeleton />,
    thumb: "/commucaton.svg",
    className: "md:col-span-2",
    icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Report Preparation",
    des: "I craft well-structured and detailed reports, ensuring clarity and precision in every document. Always attentive to deadlines, I prioritize timely delivery without compromising on quality. I also analyze data thoroughly, making sure to present insights accurately and comprehensively, fostering informed decision-making.",
    thumb: "/report.svg",
    header: <Skeleton />,
    className: "md:col-span-1",
    icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Project Management",
    des: "I lead projects with a clear focus on objectives, ensuring every task aligns with the overall strategy. Always organized and proactive, I prioritize timely execution while maintaining flexibility to adapt to changes. I also coordinate effectively with all team members, making sure every detail is managed and progress is consistently tracked.",
    thumb: "/management.svg",
    header: <Skeleton />,
    className: "md:col-span-1",
    icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Team work",
    des: "I collaborate effectively with others, ensuring that every voice is heard and valued. Always committed to shared goals, I prioritize open communication and mutual support within the team. I also adapt to different roles as needed, fostering a cohesive and productive work environment.",
    thumb: "/team.svg",
    header: <Skeleton />,
    className: "md:col-span-2",
    icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
  },
];
