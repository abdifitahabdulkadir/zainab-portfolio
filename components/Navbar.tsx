import { FloatingDock } from "@/components/ui/FloatingDock";
import { IconHome } from "@tabler/icons-react";
import { BsInfoCircleFill } from "react-icons/bs";
import { FaLightbulb } from "react-icons/fa";
import { FaMessage } from "react-icons/fa6";
import { SiEducative, SiHyperskill } from "react-icons/si";

export function NavBar() {
  const links = [
    {
      title: "Home",
      icon: (
        <IconHome className="w-full h-full  text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },

    {
      title: "About",
      icon: (
        <BsInfoCircleFill className="w-full h-full  text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#about",
    },
    {
      title: "Skills",
      icon: (
        <SiHyperskill className="w-full h-full   text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#skills",
    },
    {
      title: "Education",
      icon: (
        <SiEducative className="w-full h-full  text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#expreince | education",
    },
    {
      title: "Experience",
      icon: (
        <FaLightbulb className="w-full h-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#expreince | education",
    },

    {
      title: "Contact",
      icon: (
        <FaMessage className="w-full h-full  text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#contact",
    },
  ];
  return (
    <div className="flex items-center justify-center z-[1000] sticky top-2  h-[5rem]   w-full">
      <FloatingDock items={links} desktopClassName="w-fit " />
    </div>
  );
}
