import type { PropsWithChildren } from "react";

type Props = {};

export default function CardsGrid({ children }: PropsWithChildren<Props>) {
  return (
    <div className="grid grid-cols-2 gap-x-4 gap-y-6 sm:grid-cols-4 sm:gap-y-8 lg:grid-cols-6">
      {children}
    </div>
  );
}
