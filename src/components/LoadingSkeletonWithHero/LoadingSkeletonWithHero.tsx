import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

import "react-loading-skeleton/dist/skeleton.css";

export default function LoadingSkeletonWithHero() {
  return (
    <SkeletonTheme baseColor="#1B181B" highlightColor="#252429">
      <div className="md:pt-8 lg:pt-12">
        <div className="md:grid md:grid-cols-8 md:gap-x-4 lg:grid-cols-12">
          <div className="relative aspect-[2/3] md:col-span-5 lg:col-span-7 lg:aspect-[2/2.8]">
            <Skeleton height="100%" />
          </div>

          <div className="md:col-span-3 lg:col-span-5">
            <div className="flex justify-end py-4 md:justify-start md:py-6 lg:pb-8 lg:pt-14 xl:pb-12">
              <div className="h-8 w-14 lg:h-10 lg:w-20">
                <Skeleton height="100%" />
              </div>
            </div>

            <div className="flex flex-col gap-y-2 lg:gap-y-4">
              {Array(2)
                .fill(0)
                .map((_, index) => (
                  <div className="h-8 lg:h-10" key={index}>
                    <Skeleton height="100%" />
                  </div>
                ))}
            </div>

            <div className="w-28 pb-4 pt-2 md:pb-10 lg:pb-12 lg:pt-4">
              <div className="h-4 md:h-6">
                <Skeleton height="100%" />
              </div>
            </div>

            <div className="flex flex-col gap-2 md:gap-3">
              {Array(5)
                .fill(0)
                .map((_, index) => (
                  <div className="h-6 md:h-8" key={index}>
                    <Skeleton height="100%" />
                  </div>
                ))}
            </div>

            <div className="pt-6 md:pt-10 lg:pt-12">
              <div className="h-10 w-32 md:h-12 md:w-40 lg:w-48">
                <Skeleton height="100%" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="pt-24">
        <div className="grid grid-cols-2 gap-x-4 gap-y-6 sm:grid-cols-4 sm:gap-y-8 lg:grid-cols-6">
          <div className="col-span-2 pb-8">
            <div className="h-8 w-60 lg:h-10">
              <Skeleton height="100%" />
            </div>

            <div className="pt-4">
              <div className="h-5">
                <Skeleton height="100%" />
              </div>
            </div>

            <div className="pt-6">
              <div className="h-5 w-32">
                <Skeleton height="100%" />
              </div>
            </div>
          </div>

          {Array(16)
            .fill(0)
            .map((_, index) => (
              <div key={index}>
                <div className="pb-2">
                  <div className="aspect-[2/3]">
                    <Skeleton height="100%" />
                  </div>
                </div>

                <div className="pb-2">
                  <div className="h-4">
                    <Skeleton height="100%" />
                  </div>
                </div>

                <div className="flex justify-between gap-x-2">
                  <div className="h-4 w-10">
                    <Skeleton height="100%" />
                  </div>

                  <div className="h-4 w-10">
                    <Skeleton height="100%" />
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </SkeletonTheme>
  );
}
