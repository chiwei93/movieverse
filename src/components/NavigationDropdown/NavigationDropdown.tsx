"use client";

import Link, { type LinkProps } from "next/link";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { motion } from "framer-motion";

type Props = {
  navigationLinks: { href: LinkProps["href"]; name: string }[];
};

export default function NavigationDropdown({ navigationLinks }: Props) {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger
        className="pb-0.5 text-[#CFC9CF]"
        data-cy="hamburgerMenu"
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
      </DropdownMenu.Trigger>

      <DropdownMenu.Portal>
        <DropdownMenu.Content
          className="mt-2 rounded bg-[#292429] text-[0.8rem] sm:hidden"
          align="end"
          data-cy="nav-links-dropdown"
          asChild
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            {navigationLinks.map((link) => (
              <DropdownMenu.Item className="px-8 py-4" key={link.name}>
                <Link href={link.href} className="capitalize">
                  {link.name}
                </Link>
              </DropdownMenu.Item>
            ))}
          </motion.div>
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
}
