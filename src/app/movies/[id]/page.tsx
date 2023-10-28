import Image from "next/image";
import Link from "next/link";

import CardsGrid from "@/components/CardsGrid/CardsGrid";
import Card from "@/components/Card/Card";
import RecommendationSection from "@/components/RecommendationSection/RecommendationSection";

function Review() {
  return (
    <div className="col-span-2 rounded bg-[#1B181B] p-4 sm:p-6">
      <div className="pb-1 text-[0.8rem] text-[#CFC9CF]">CinemaSerf</div>

      <div className="pb-4 text-[0.64rem] text-[#9F939F]">
        11.00pm, 20th Oct 2020
      </div>

      <p className="text-[#CFC9CF]">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque aperiam
        numquam commodi vel.
      </p>
    </div>
  );
}

export default function IndividualMovie() {
  return (
    <>
      <div className="md:pt-8 lg:pt-12">
        <div className="md:grid md:grid-cols-8 md:gap-x-4 lg:grid-cols-12">
          <div className="relative aspect-[2/3] object-cover md:col-span-5 lg:col-span-7 lg:aspect-[2/2.8]">
            <Image
              src="/starwars.jpeg"
              alt="Hero image for movie"
              fill
              priority
            />

            <div className="absolute left-0 right-0 top-0 h-[5rem] bg-gradient-to-b from-[#121012]"></div>
            <div className="absolute bottom-0 left-0 right-0 h-[5rem] bg-gradient-to-t from-[#121012]"></div>
            <div className="absolute bottom-0 left-0 top-0 w-[4rem] bg-gradient-to-r from-[#121012]"></div>
            <div className="absolute bottom-0 right-0 top-0 w-[4rem] bg-gradient-to-l from-[#121012] md:via-[#131113]"></div>
          </div>

          <div className="pt-8 md:col-span-3 lg:col-span-5 lg:pt-16 xl:pt-24">
            <div>
              <h1 className="text-[1.563rem] font-bold uppercase leading-7 text-[#F3F1F3] md:text-[1.953rem] md:leading-8 lg:text-[3.052rem] lg:leading-none">
                star wars: the last jedi
              </h1>

              <div className="flex items-center gap-x-4 py-2 text-[0.8rem] text-[#9F939F] md:py-3 xl:text-[1rem]">
                <span className="flex items-center gap-x-2 text-[#F50057]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="h-4 w-4"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                      clipRule="evenodd"
                    />
                  </svg>

                  <span>7.0</span>
                </span>

                <span className="block h-1 w-1 rounded-full bg-[#9F939F]"></span>

                <span className="block">2020</span>

                <span className="block h-1 w-1 rounded-full bg-[#9F939F]"></span>

                <span className="block">2h 30min</span>
              </div>

              <div className="flex flex-wrap items-center gap-2">
                <span className="block rounded bg-[#1B181B] px-6 py-2 text-[0.8rem] capitalize text-[#9F939F]">
                  action
                </span>

                <span className="block rounded bg-[#1B181B] px-6 py-2 text-[0.8rem] capitalize text-[#9F939F]">
                  adventure
                </span>

                <span className="block rounded bg-[#1B181B] px-6 py-2 text-[0.8rem] capitalize text-[#9F939F]">
                  sci-fi
                </span>
              </div>

              <div className="py-6 leading-7 text-[#CFC9CF] lg:py-10 lg:leading-relaxed xl:py-14 xl:text-[1.25rem]">
                Rey seeks to learn the ways of the Jedi under Luke Skywalker,
                its remaining member, to reinvigorate the Resistance&apos;s war
                against the First Order.
              </div>

              <div className="grid grid-cols-2 gap-x-4 text-[0.8rem] md:grid-cols-1 md:gap-x-0 md:gap-y-4 lg:flex lg:gap-x-4 lg:gap-y-0 xl:text-[1rem]">
                <button className="rounded border border-[#F50057] bg-[#F50057] px-4 py-2 text-white sm:px-8">
                  Watch trailer
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="pt-16 md:pt-24 lg:pt-28">
        <h2 className="pb-4 text-[1.25rem] font-medium text-[#877887] md:text-[1.563rem] lg:text-[1.953rem]">
          Production companies
        </h2>

        <div className="flex items-center gap-x-3">
          <span className="block font-semibold capitalize text-[#CFC9CF]">
            marvel films
          </span>

          <span className="block h-[0.375rem] w-[0.375rem] rounded-full bg-[#CFC9CF]"></span>

          <span className="block font-semibold capitalize text-[#CFC9CF]">
            disney
          </span>
        </div>
      </div>

      <div className="pt-16 md:pt-24 lg:pt-28">
        <CardsGrid>
          <div className="col-span-2 pt-4 sm:pt-6">
            <h2 className="text-[1.25rem] font-medium text-[#877887] md:text-[1.563rem] lg:text-[1.953rem]">
              Directors
            </h2>
          </div>

          <Card />
          <Card />
        </CardsGrid>
      </div>

      <div className="pt-16 md:pt-24 lg:pt-28">
        <CardsGrid>
          <div className="col-span-2 flex items-end justify-between gap-x-2 pt-4 sm:flex-col sm:items-start sm:justify-normal sm:gap-x-0 sm:gap-y-2 sm:pt-6 md:gap-y-6">
            <h2 className="text-[1.25rem] font-medium text-[#877887] md:text-[1.563rem] lg:text-[1.953rem]">
              Casts
            </h2>

            <div>
              <Link href="/" className="text-[0.8rem] text-[#F50057]">
                See more
              </Link>
            </div>
          </div>

          <Card />
          <Card />
          <Card />
          <Card />
        </CardsGrid>
      </div>

      <div className="pt-16 md:pt-24 lg:pt-28">
        <CardsGrid>
          <div className="col-span-2 flex items-end justify-between gap-x-2 pt-4 sm:flex-col sm:items-start sm:justify-normal sm:gap-x-0 sm:gap-y-2 sm:pt-6 md:gap-y-6">
            <h2 className="text-[1.25rem] font-medium text-[#877887] md:text-[1.563rem] lg:text-[1.953rem]">
              Posters
            </h2>

            <div>
              <Link href="/" className="text-[0.8rem] text-[#F50057]">
                See more
              </Link>
            </div>
          </div>

          <Card />
          <Card />
          <Card />
          <Card />
        </CardsGrid>
      </div>

      <div className="pt-16 md:pt-24 lg:pt-28">
        <CardsGrid>
          <div className="col-span-2 flex items-end justify-between gap-x-2 pt-4 sm:flex-col sm:items-start sm:justify-normal sm:gap-x-0 sm:gap-y-2 sm:pt-6 md:gap-y-6">
            <h2 className="text-[1.25rem] font-medium text-[#877887] md:text-[1.563rem] lg:text-[1.953rem]">
              Reviews
            </h2>

            <div>
              <Link href="/" className="text-[0.8rem] text-[#F50057]">
                See more
              </Link>
            </div>
          </div>

          <Review />
          <Review />
          <Review />
          <Review />
        </CardsGrid>
      </div>

      <div className="pt-16 md:pt-24 lg:pt-28">
        <RecommendationSection />
      </div>
    </>
  );
}
