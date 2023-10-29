import Image from "next/image";
import Link from "next/link";

export default function SummaryPage() {
  return (
    <div className="min-h-[80vh]">
      <div className="pt-12">
        <div className="rounded bg-[#1B181B] p-4 md:p-8 lg:p-10">
          <div className="grid grid-cols-3 gap-x-3 sm:gap-x-4 lg:grid-cols-7 lg:gap-x-8 xl:grid-cols-9">
            <div className="relative aspect-[2/3] lg:col-span-2">
              <Image src="/starwars.jpeg" alt="movie poster" fill />
            </div>

            <div className="col-span-2 lg:col-span-4 xl:col-span-6">
              <div className="pt-4 text-[1.25rem] font-bold uppercase leading-6 sm:pt-0 sm:leading-none lg:pt-6 lg:text-[1.563rem] xl:pt-5">
                star wars: the last jedi
              </div>

              <div className="flex items-center gap-x-2 pt-1 sm:gap-x-3">
                <span className="flex items-center gap-x-1 text-[#F50057]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="h-3 w-3 sm:h-4 sm:w-4"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                      clipRule="evenodd"
                    />
                  </svg>

                  <span className="pt-0.5 text-[0.64rem] sm:text-[0.8rem]">
                    7.0
                  </span>
                </span>

                <span className="block h-1 w-1 rounded-full bg-[#9F939F]"></span>

                <span className="block pt-0.5 text-[0.64rem] text-[#9F939F] sm:text-[0.8rem]">
                  2020
                </span>
              </div>

              <div className="flex flex-wrap items-center gap-x-2 pt-1 sm:gap-x-3">
                <span className="block text-[0.64rem] capitalize text-[#9F939F] sm:text-[0.8rem]">
                  Action
                </span>

                <span className="block h-1 w-1 rounded-full bg-[#9F939F]"></span>

                <span className="block text-[0.64rem] capitalize text-[#9F939F] sm:text-[0.8rem]">
                  adventure
                </span>

                <span className="block h-1 w-1 rounded-full bg-[#9F939F]"></span>

                <span className="block text-[0.64rem] capitalize text-[#9F939F] sm:text-[0.8rem]">
                  sci-fi
                </span>
              </div>

              <div className="hidden pt-4 text-[#CFC9CF] sm:block">
                Rey seeks to learn the ways of the Jedi under Luke Skywalker,
                its remaining member, to reinvigorate the Resistance&apos;s war
                against the First Order.
              </div>

              <div className="hidden sm:grid sm:grid-cols-2 sm:gap-x-4 sm:pt-6 xl:grid-cols-3">
                <button className="rounded border border-[#F50057] bg-[#F50057] px-4 py-2 text-center text-[0.8rem] text-white">
                  Watch trailer
                </button>

                <Link
                  href="/movies/1"
                  className="block rounded border border-[#CFC9CF] px-4 py-2 text-center text-[0.8rem] text-[#CFC9CF]"
                >
                  See details
                </Link>
              </div>
            </div>
          </div>

          <div className="pt-4 text-[0.8rem] text-[#CFC9CF] sm:hidden">
            Rey seeks to learn the ways of the Jedi under Luke Skywalker, its
            remaining member, to reinvigorate the Resistance&apos;s war against
            the First Order.
          </div>

          <div className="grid grid-cols-2 gap-x-4 pt-4 sm:hidden">
            <button className="rounded border border-[#F50057] bg-[#F50057] px-4 py-2 text-center text-[0.8rem] text-white">
              Watch trailer
            </button>

            <Link
              href="/movies/1"
              className="block rounded border border-[#CFC9CF] px-4 py-2 text-center text-[0.8rem] text-[#CFC9CF]"
            >
              See details
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
