import Providers from "@/components/Providers";
import type { Metadata } from "next";
import { Josefin_Sans } from "next/font/google";
import "./globals.css";

const inter = Josefin_Sans({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Zainab",
  description:
    "Passionate about protecting our planet, I am an advocate for sustainable living and environmental conservation. Through my work, I aim to inspire others to appreciate and protect the natural world. My journey is dedicated to promoting eco-friendly practices, raising awareness about environmental issues, and driving impactful change. Join me in making a difference, one step at a time.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
