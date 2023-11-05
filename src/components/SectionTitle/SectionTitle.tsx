import Link, { type LinkProps } from "next/link";

type Props = {
  title: string;
  description?: string;
  href: LinkProps["href"];
  shouldShowLink?: boolean;
};

export default function SectionTitle({
  title,
  description,
  href,
  shouldShowLink = true,
}: Props) {
  return (
    <div>
      <h2 className="text-[1.563rem] font-bold uppercase lg:text-[1.953rem] lg:leading-8">
        {title}
      </h2>

      {description && (
        <p className="pt-2 text-[0.8rem] text-[#9F939F]">{description}</p>
      )}

      {shouldShowLink && (
        <div className="pt-2 md:pt-6">
          <Link href={href} className="text-[0.8rem] text-[#F50057]">
            See more
          </Link>
        </div>
      )}
    </div>
  );
}
