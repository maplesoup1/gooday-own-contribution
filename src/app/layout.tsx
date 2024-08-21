import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../styles/globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Gooday",
  description:
    "Increasing productivity for managing appintments between businesses and consumers",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} text-sm text-zinc-900 bg-[#fafafa] min-h-screen w-screen overflow-x-hidden !scroll-smooth`}
      >
        <div className="bg-[#FECB4D] absolute top-[10rem] -z-10 right-[-20rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem]"></div>
        <div className="bg-[#e3cca0] absolute top-[10rem] -z-10 left-[-20rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem]"></div>

        {children}
      </body>
    </html>
  );
}
