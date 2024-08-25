import { TbCopyrightFilled } from "react-icons/tb";
import CopyEmail from "./CopyEmail";
export default function Footer() {
  return (
    <section className="w-full z-50 relative px-5 h-fit mt-10 py-10 flex items-center justify-center">
      <div className="flex flex-col gap-y-4 items-center justify-center">
        <CopyEmail />
        <p className="tex-xs lg:text-base mg:text-sm text-white/80 italic">
          V1.0.0
        </p>
        <p className="flex gap-x-2 items-center justify-center text-xs text-white/40">
          <TbCopyrightFilled />
          <span>|</span> <span>Zainab Ahemd | 2024</span>
        </p>
      </div>
    </section>
  );
}
