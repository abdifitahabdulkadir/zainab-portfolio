"use client";
import { BackgroundBeams } from "./ui/BeamBackground";

export function AppBackground({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="w-full py-5 px-3  lg:px-6 z-40
       h-full rounded-[24px]  expreinceEducatonGradientBg  appInnerShadow relative antialiased"
    >
      {children}
      <BackgroundBeams />
    </div>
  );
}
