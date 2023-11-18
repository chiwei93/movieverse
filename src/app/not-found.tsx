import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-[75vh]">
      <div className="pt-12">
        <div className="rounded bg-[#1B181B] p-8 lg:p-10">
          <div className="text-[1.56rem] font-semibold uppercase text-[#CFC9CF] sm:text-[2.44rem]">
            Page not found
          </div>

          <div className="pt-4 text-[0.8rem] text-[#CFC9CF] sm:text-[1rem]">
            The page you&apos;re finding does not exist. Click below to go back
            to the home page.
          </div>

          <div className="pt-6 sm:pt-10">
            <Link
              href="/"
              className="inline-block rounded border border-[#F50057] bg-[#F50057] px-4 py-2 text-center text-[0.8rem] text-white sm:text-[1rem]"
            >
              Back to home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
