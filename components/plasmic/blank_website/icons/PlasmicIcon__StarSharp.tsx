// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type StarSharpIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function StarSharpIcon(props: StarSharpIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 16 16"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M8 11.847l4.12 2.486-1.093-4.686 3.64-3.154-4.794-.406L8 1.667l-1.873 4.42-4.794.406 3.64 3.154-1.093 4.686L8 11.847z"
        }
        fill={"currentColor"}
        fillOpacity={".56"}
      ></path>
    </svg>
  );
}

export default StarSharpIcon;
/* prettier-ignore-end */
