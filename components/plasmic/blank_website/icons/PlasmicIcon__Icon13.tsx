// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon13IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon13Icon(props: Icon13IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 61 61"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M30.5 10.167c11.209 0 20.333 9.124 20.333 20.333 0 11.209-9.124 20.333-20.333 20.333-11.209 0-20.333-9.124-20.333-20.333 0-11.209 9.124-20.333 20.333-20.333zm0-5.084C16.47 5.083 5.083 16.47 5.083 30.5c0 14.03 11.387 25.417 25.417 25.417 14.03 0 25.417-11.387 25.417-25.417 0-14.03-11.387-25.417-25.417-25.417zM33.042 30.5V20.333h-5.084V30.5h-7.625L30.5 40.667 40.667 30.5h-7.625z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Icon13Icon;
/* prettier-ignore-end */
