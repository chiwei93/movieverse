"use client";

import * as DropdownMenu from "@radix-ui/react-dropdown-menu";

export default function SearchDropdown() {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger className="pb-1 lg:hidden" data-cy="searchIcon">
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
      </DropdownMenu.Trigger>

      <DropdownMenu.Portal>
        <DropdownMenu.Content align="end" className="mt-2">
          <div className="relative">
            <input
              type="text"
              className="max-w-60 rounded bg-[#292429] py-2 pl-4 pr-12 text-[0.8rem] text-[#CFC9CF]"
              placeholder="Search"
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
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
}
