// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon12IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon12Icon(props: Icon12IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 35 35"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M17.5 8.604a3.062 3.062 0 110 6.124 3.062 3.062 0 010-6.124zm0 13.125c4.331 0 8.896 2.13 8.896 3.063v1.604H8.604v-1.604c0-.934 4.565-3.063 8.896-3.063zm0-15.896a5.832 5.832 0 00-5.833 5.834A5.832 5.832 0 0017.5 17.5a5.832 5.832 0 005.833-5.833A5.832 5.832 0 0017.5 5.833zm0 13.125c-3.894 0-11.667 1.955-11.667 5.834v4.375h23.334v-4.375c0-3.88-7.773-5.834-11.667-5.834z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Icon12Icon;
/* prettier-ignore-end */
