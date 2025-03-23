// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type InputSearchIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function InputSearchIcon(props: InputSearchIconProps) {
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
        d={
          "M20 11V9a2 2 0 00-2-2H6a2 2 0 00-2 2v5a2 2 0 002 2h5m4 2a3 3 0 106 0 3 3 0 00-6 0zm5.2 2.2L22 22"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default InputSearchIcon;
/* prettier-ignore-end */
