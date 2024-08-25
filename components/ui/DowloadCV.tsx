"use client";

import { downloadResume } from "@/lib/downloadcv";
import { useFormStatus } from "react-dom";
import { FaArrowDown } from "react-icons/fa";

export default function DowloadCV() {
  return (
    <form action={downloadResume}>
      <ButtonDownload />
    </form>
  );
}

function ButtonDownload() {
  const { pending } = useFormStatus();

  return (
    <button
      disabled={pending}
      className="relative inline-flex h-10 overflow-hidden rounded-sm p-[1px] focus:outline-none focus:ring-0  hover:scale-[1.1] transition-all duration-300"
    >
      <span className="absolute rounded-sm inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />

      <span className="inline-flex h-full w-[12rem] cursor-pointer items-center justify-center rounded-sm gradientBgColor px-3 text-sm font-medium text-white backdrop-blur-3xl">
        {!pending && (
          <FaArrowDown className="text-xl mr-5 hover:rotate-180 transition-all duration-1000" />
        )}
        {!pending ? "Resume on Hand" : "Downloading.."}
      </span>
    </button>
  );
}