import "./globals.css";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";

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
      </body>
    </html>
  );
}
