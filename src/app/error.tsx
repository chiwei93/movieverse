"use client";

import Link from "next/link";

export default function ErrorPage() {
  return (
    <div className="min-h-[75vh]">
      <div className="fixed bottom-0 left-0 right-0 top-0 z-[100] bg-[#121012]/90">
        <div className="px-6 pt-20 sm:px-14 md:px-[4.5rem] md:pt-32 lg:px-28 xl:mx-auto xl:max-w-[80rem] xl:px-[8.5rem]">
          <div className="rounded bg-[#1B181B] p-8 lg:p-10">
            <div className="text-[1.56rem] font-semibold uppercase text-[#CFC9CF] sm:text-[2.44rem]">
              an error occurred
            </div>

            <div className="pt-4 text-[0.8rem] text-[#CFC9CF] sm:text-[1rem]">
              An error occurred while carrying out the operation. Click below to
              go back to the home page.
            </div>

            <div className="pt-6 sm:pt-10">
              <Link
                className="inline-block rounded border border-[#F50057] bg-[#F50057] px-4 py-2 text-center text-[0.8rem] text-white sm:text-[1rem]"
                href='/'
              >
                Back to home
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
