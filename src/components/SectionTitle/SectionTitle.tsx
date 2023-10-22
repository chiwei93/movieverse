import Link from "next/link";

type Props = {};

export default function SectionTitle({}: Props) {
  return (
    <div>
      <h2 className="text-[1.563rem] font-bold uppercase lg:text-[1.953rem]">
        now showing
      </h2>

      <p className="pt-2 text-[0.8rem] text-[#9F939F]">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem porro
        iure deserunt ipsam.
      </p>

      <div className="pt-2 md:pt-6">
        <Link href="/now-showing" className="text-[0.8rem] text-[#F50057]">
          See more
        </Link>
      </div>
    </div>
  );
}
