"use client";

export default function ErrorPage({ reset }: { reset: () => void }) {
  return (
    <div className="min-h-[75vh]">
      <div className="pt-12">
        <div className="rounded bg-[#1B181B] p-8 lg:p-10">
          <div className="text-[1.56rem] font-semibold uppercase text-[#CFC9CF] sm:text-[2.44rem]">
            an error occurred
          </div>

          <div className="pt-4 text-[0.8rem] text-[#CFC9CF] sm:text-[1rem]">
            An error occurred while carrying out the operation. Click below to try again.
          </div>

          <div className="pt-6 sm:pt-10">
            <button
              className="inline-block rounded border border-[#F50057] bg-[#F50057] px-4 py-2 text-center text-[0.8rem] text-white sm:text-[1rem]"
              onClick={() => {
                reset();
              }}
            >
              Try again
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
