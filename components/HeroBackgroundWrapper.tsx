import { BackgroundBeamsWithCollision } from "@/components/ui/HeroBeamBgEffect";

export function HeroBackgroundWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <BackgroundBeamsWithCollision>{children}</BackgroundBeamsWithCollision>
  );
}
