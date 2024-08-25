"use client";
import { BackgroundGradient } from "./ui/GradientBg";

export default function GradientBackground({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <BackgroundGradient className="rounded-[22px] h-full z-30 w-full p-4  bg-secondary">
        {children}
      </BackgroundGradient>
    </div>
  );
}
