import "./globals.css";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";

import Link from "next/link";

import Navbar from "@/components/Navbar/Navbar";

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Movieverse",
  description: "Find all the informations about the movie you love",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${poppins.className} px-6 sm:px-14 md:px-[4.5rem] lg:px-28 xl:mx-auto xl:max-w-[80rem] xl:px-[8.5rem]`}
      >
        <Navbar />

        <main>{children}</main>

        <footer className="py-16 sm:pt-20 lg:pt-24">
          <hr className="h-[1px] border-none bg-[#514851]" />

          <div className="flex flex-col items-center gap-y-2 pt-6 sm:flex-row sm:justify-between sm:gap-x-4 sm:gap-y-0 md:pt-8">
            <Link href="/" className="inline-block text-[1.25rem] font-bold">
              Movieverse
            </Link>

            <span className="flex items-center gap-x-1">
              <span className="inline-block text-[0.8rem]">&copy;</span>
              <span className="inline-block text-[0.512rem]">
                All rights reserved - Movieverse
              </span>
            </span>
          </div>
        </footer>
      </body>
    </html>
  );
}
