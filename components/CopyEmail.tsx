"use client";
import { useState } from "react";
import toast from "react-hot-toast";
import { IoIosCopy } from "react-icons/io";
import { MdDone } from "react-icons/md";
import { setTimeout } from "timers";

export default function CopyEmail() {
  const [copied, setIsCopied] = useState(false);

  async function copyEmailHand() {
    setIsCopied(true);
    await navigator.clipboard.writeText("zaynabaxmed815@gmail.com");
    toast.success("Copied Email successfully");

    return setTimeout(() => {
      setIsCopied(false);
    }, 3000);
  }

  return (
    <button
      onClick={copyEmailHand}
      className="relative  inline-flex h-10  transition-all duration-300 hover:scale-[1.1] overflow-hidden rounded-sm p-[1px] focus:outline-none focus:ring-0"
    >
      <span className="absolute rounded-sm inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
      <span className="flex h-full w-[12rem] cursor-pointer items-center justify-between rounded-sm gradientBgColor  text-sm font-medium text-white backdrop-blur-3xl px-10">
        {copied ? <MdDone /> : <IoIosCopy className="text-xl" />}
        <span className="italic text-balance">
          {copied ? "Copied" : "Get My Email"}
        </span>
      </span>
    </button>
  );
}
