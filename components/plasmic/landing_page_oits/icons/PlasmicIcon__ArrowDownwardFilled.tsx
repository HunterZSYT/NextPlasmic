// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type ArrowDownwardFilledIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function ArrowDownwardFilledIcon(props: ArrowDownwardFilledIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 18 18"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M15 9l-1.057-1.058-4.193 4.185V3h-1.5v9.127L4.065 7.935 3 9l6 6 6-6z"
        }
        fill={"currentColor"}
        fillOpacity={".56"}
      ></path>
    </svg>
  );
}

export default ArrowDownwardFilledIcon;
/* prettier-ignore-end */
