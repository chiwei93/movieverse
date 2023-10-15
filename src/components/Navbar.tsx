"use client";

import Link, { type LinkProps } from "next/link";
import { useAtom } from "jotai";

import { sidebarAtom } from "@/atoms/sidebarAtom";

const navbarLinks = [
  { href: "/movies", name: "movies" },
  { href: "/series", name: "series" },
  { href: "/animations", name: "animations" },
];

function NavbarLink({
  href,
  children,
}: {
  href: LinkProps["href"];
  children: React.ReactNode;
}) {
  return (
    <Link href={href} className="capitalize transition hover:text-[#CFC9CF]">
      {children}
    </Link>
  );
}

export default function Navbar() {
  const [isSidebarOpen, setIsSidebarOpen] = useAtom(sidebarAtom);

  return (
    <nav className="flex items-end justify-between gap-x-2 py-8">
      <div>
        <Link href="/" className="inline-block text-[1.25rem] font-bold">
          Movieverse
        </Link>
      </div>

      <div className="flex items-center gap-x-8">
        <ul className="hidden text-[0.8rem] text-[#9F939F] sm:flex sm:items-end sm:gap-x-8">
          {navbarLinks.map((link) => {
            return (
              <li key={`${link.name}`}>
                <NavbarLink href={link.href}>{link.name}</NavbarLink>
              </li>
            );
          })}
        </ul>

        <div className="flex items-end gap-x-4 text-[#CFC9CF]">
          <button className="pb-1 lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="h-5 w-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
              />
            </svg>
          </button>

          <button
            className="pb-0.5 sm:hidden"
            onClick={() => setIsSidebarOpen(true)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </button>

          <div className="relative hidden text-[0.8rem] text-[#CFC9CF] lg:block">
            <input
              type="text"
              className="w-60 rounded bg-[#292429] py-2 pl-4 pr-12"
            />

            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="absolute right-4 top-1/2 h-5 w-5 -translate-y-1/2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
              />
            </svg>
          </div>
        </div>
      </div>
    </nav>
  );
}
