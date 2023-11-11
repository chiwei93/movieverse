import type { PropsWithChildren } from "react";

type Grids = {
  small?: {
    cols?: number;
    xGap?: number;
    yGap?: number;
  };
  medium?: {
    cols?: number;
    xGap?: number;
    yGap?: number;
  };
  large?: {
    cols?: number;
    xGap?: number;
    yGap?: number;
  };
};

type Props = {
  responsive?: Grids;
};

const defaultSmallCols = 2;
const defaultSmallXGap = 4;
const defaultSmallYGap = 6;
const defaultMediumCols = 4;
const defaultMediumXGap = 4;
const defaultMediumYGap = 8;
const defaultLargeCols = 6;
const defaultLargeXGap = 4;
const defaultLargeYGap = 8;

const getResponsiveTailwindClass = (grids: Grids | undefined) => {
  const classNames = ["grid"];
  classNames.push(`grid-cols-${grids?.small?.cols ?? defaultSmallCols}`);
  classNames.push(`gap-x-${grids?.small?.xGap ?? defaultSmallXGap}`);
  classNames.push(`gap-y-${grids?.small?.yGap ?? defaultSmallYGap}`);
  classNames.push(`sm:grid-cols-${grids?.medium?.cols ?? defaultMediumCols}`);
  classNames.push(`sm:gap-x-${grids?.medium?.xGap ?? defaultMediumXGap}`);
  classNames.push(`sm:gap-y-${grids?.medium?.yGap ?? defaultMediumYGap}`);
  classNames.push(`lg:grid-cols-${grids?.large?.cols ?? defaultLargeCols}`);
  classNames.push(`lg:gap-x-${grids?.large?.xGap ?? defaultLargeXGap}`);
  classNames.push(`lg:gap-y-${grids?.large?.yGap ?? defaultLargeYGap}`);

  return classNames.join(" ");
};

export default function CardsGrid({
  children,
  responsive,
}: PropsWithChildren<Props>) {
  const responsiveClassName = getResponsiveTailwindClass(responsive);
  return <div className={responsiveClassName}>{children}</div>;
}
