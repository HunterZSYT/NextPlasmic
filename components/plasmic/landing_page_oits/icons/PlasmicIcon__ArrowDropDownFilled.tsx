// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type ArrowDropDownFilledIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function ArrowDropDownFilledIcon(props: ArrowDropDownFilledIconProps) {
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
        d={"M7 9.5l5 5 5-5H7z"}
        fill={"currentColor"}
        fillOpacity={".56"}
      ></path>
    </svg>
  );
}

export default ArrowDropDownFilledIcon;
/* prettier-ignore-end */
