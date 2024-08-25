import { FaFacebook } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { RiTwitterXLine } from "react-icons/ri";

export default function SocailMedia() {
  return (
    <button className="relative inline-flex h-10  transition-all duration-300 hover:scale-[1.1] overflow-hidden rounded-sm p-[1px] focus:outline-none focus:ring-0">
      <span className="absolute rounded-sm inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
      <span className="flex h-full w-[12rem] cursor-pointer items-center justify-between rounded-sm gradientBgColor  text-sm font-medium text-white backdrop-blur-3xl px-10">
        <a href="mailto:zaynabaxmed815@gmail.com" target="_blank">
          <IoIosMail className="text-xl w-6 h-6 hover:text-pinkColor  transition-all duration-300 hover:scale-[1.1]" />{" "}
        </a>
        <a href="https://x.com/zainabahmed121?s=21" target="_blank">
          <RiTwitterXLine className="text-xl w-5 h-5 hover:text-pinkColor transition-all duration-300 hover:scale-[1.1] " />
        </a>
        <a href="https://www.facebook.com/zaynab.ahmed.1238" target="_blank">
          <FaFacebook className="text-xl w-5 h-5 hover:text-pinkColor  transition-all duration-300 hover:scale-[1.1]" />
        </a>
      </span>
    </button>
  );
}
