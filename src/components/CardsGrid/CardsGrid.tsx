import type { PropsWithChildren } from "react";

type Props = {
  lesserCols?: boolean;
};

export default function CardsGrid({
  children,
  lesserCols = false,
}: PropsWithChildren<Props>) {
  return (
    <div
      className={`grid grid-cols-2 gap-x-4 gap-y-6 sm:grid-cols-4 sm:gap-y-8 ${
        lesserCols ? "lg:grid-cols-5 lg:gap-x-6" : "lg:grid-cols-6"
      }`}
    >
      {children}
    </div>
  );
}
