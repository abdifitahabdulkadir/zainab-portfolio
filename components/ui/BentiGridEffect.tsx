import { cn } from "@/lib/utils";
import Image from "next/image";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid md:auto-rows-[18rem] grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto ",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  header,
  icon,
  thumb,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
  thumb: string;
}) => {
  return (
    <div
      className={cn(
        "row-span-1 rounded-xl group/bento hover:shadow-xl transition duration-200   p-4 expreinceEducatonGradientBg projectItemDropShadow dark:border-white/[0.2]  border border-transparent justify-between flex flex-col space-y-4",
        className
      )}
    >
      <div className="hidden md:block w-full relative h-[50%]">
        <div className="absolute inset-0 z-10">{header}</div>
        <div className="w-full h-full absolute inset-0 z-20">
          <Image
            height={100}
            width={100}
            src={thumb}
            alt={"header image"}
            className="w-full h-full"
          />
        </div>
      </div>

      <div className="group-hover/bento:translate-x-2 transition duration-200">
        {icon}
        <h1 className="font-bold text-neutral-200 mb-2 mt-2">{title}</h1>
        <p className="font-normal line-clamp-4 lg:line-clamp-none text-xs text-neutral-300">
          {description}
        </p>
      </div>
    </div>
  );
};
