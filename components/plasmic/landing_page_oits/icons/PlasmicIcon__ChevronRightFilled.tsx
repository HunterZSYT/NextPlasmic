// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type ChevronRightFilledIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function ChevronRightFilledIcon(props: ChevronRightFilledIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 24 24"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={"M9.705 6l-1.41 1.41 4.58 4.59-4.58 4.59L9.705 18l6-6-6-6z"}
        fill={"currentColor"}
        fillOpacity={".56"}
      ></path>
    </svg>
  );
}

export default ChevronRightFilledIcon;
/* prettier-ignore-end */
