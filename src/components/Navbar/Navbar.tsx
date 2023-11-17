import type { PropsWithChildren } from "react";
import Link, { type LinkProps } from "next/link";

import NavigationDropdown from "@/components/NavigationDropdown/NavigationDropdown";
import SearchDropdown from "@/components/SearchDropdown/SearchDropdown";
import SearchInput from "../SearchInput/SearchInput";

const navbarLinks = [
  { href: "/movies", name: "movies" },
  { href: "/tv-shows", name: "TV series" },
];

function NavbarLink({
  href,
  children,
}: PropsWithChildren<{
  href: LinkProps["href"];
}>) {
  return (
    <Link href={href} className="capitalize transition hover:text-[#CFC9CF]">
      {children}
    </Link>
  );
}

export default function Navbar() {
  return (
    <nav className="flex items-end justify-between gap-x-2 py-8">
      <div>
        <Link
          href="/"
          className="inline-block text-[1.25rem] font-bold"
          data-cy="navbarLogo"
        >
          Movieverse
        </Link>
      </div>

      <div className="flex items-center gap-x-8">
        <ul
          className="hidden text-[0.8rem] text-[#9F939F] sm:flex sm:items-end sm:gap-x-8"
          data-cy="navbarLinks"
        >
          {navbarLinks.map((link) => {
            return (
              <li key={`${link.name}`}>
                <NavbarLink href={link.href}>{link.name}</NavbarLink>
              </li>
            );
          })}
        </ul>

        <div className="flex items-end gap-x-4 text-[#CFC9CF]">
          <div className="flex lg:hidden">
            <SearchDropdown />
          </div>

          <div className="flex sm:hidden">
            <NavigationDropdown navigationLinks={navbarLinks} />
          </div>

          <div className="hidden lg:block">
            <SearchInput />
          </div>
        </div>
      </div>
    </nav>
  );
}
