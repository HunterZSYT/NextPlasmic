// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type IconLeft2IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function IconLeft2Icon(props: IconLeft2IconProps) {
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
        d={"M15.705 7.41L14.295 6l-6 6 6 6 1.41-1.41-4.58-4.59 4.58-4.59z"}
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default IconLeft2Icon;
/* prettier-ignore-end */
