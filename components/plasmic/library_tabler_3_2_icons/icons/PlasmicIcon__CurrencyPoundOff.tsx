// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type CurrencyPoundOffIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function CurrencyPoundOffIcon(props: CurrencyPoundOffIconProps) {
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
          "M17 18.5a6 6 0 01-5 0 5.998 5.998 0 00-5 .5 3 3 0 002-2.5V9m1.192-2.825A4 4 0 0116.45 7M13 13H7M3 3l18 18"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default CurrencyPoundOffIcon;
/* prettier-ignore-end */
