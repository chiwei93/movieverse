"use client";

import type { FormEvent } from "react";

import { useRouter } from "next/navigation";
import { useState } from "react";

type SearchInputProps = {
  fullWidth?: boolean;
};

export default function SearchInput({ fullWidth = false }: SearchInputProps) {
  const [query, setQuery] = useState("");
  const router = useRouter();

  const onFormSubmit = (e: FormEvent) => {
    e.preventDefault();
    router.push(`/search?q=${query}&page=1`);
    setQuery("");
  };

  return (
    <form className="relative" onSubmit={onFormSubmit}>
      <input
        type="text"
        className={`${
          fullWidth ? "w-full" : "w-60"
        } rounded bg-[#292429] py-2 pl-4 pr-12 text-[0.8rem] text-[#CFC9CF]`}
        data-cy="searchInput"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search movies and tv shows"
      />

      <button
        className="absolute right-4 top-1/2 h-5 w-5 -translate-y-1/2"
        type="submit"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
          />
        </svg>
      </button>
    </form>
  );
}
