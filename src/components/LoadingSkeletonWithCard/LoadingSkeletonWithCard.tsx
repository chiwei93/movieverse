import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

export default function LoadingSkeletonWithCard() {
  return (
    <SkeletonTheme baseColor="#1B181B" highlightColor="#252429">
      <div className="md:pt-8">
        <div className="flex flex-col gap-y-6">
          <div className="h-8 w-full sm:w-60 md:w-80">
            <Skeleton height="100%" />
          </div>

          <div className="hidden h-4 w-40 sm:block">
            <Skeleton height="100%" />
          </div>
        </div>

        <div className="pt-6 md:pt-10">
          <div className="grid grid-cols-2 gap-x-4 gap-y-6 sm:grid-cols-4 sm:gap-y-8 lg:grid-cols-5 lg:gap-x-6">
            {Array(20)
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

        <div className="flex justify-end pt-20 lg:pt-32">
          <div className="h-10 w-40">
            <Skeleton height="100%" />
          </div>
        </div>
      </div>
    </SkeletonTheme>
  );
}
