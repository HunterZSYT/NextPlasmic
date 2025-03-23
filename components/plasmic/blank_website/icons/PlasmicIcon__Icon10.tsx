// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon10IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon10Icon(props: Icon10IconProps) {
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
          "M18.769 21.977l-3.704-3.66.043-.044a25.549 25.549 0 005.41-9.523h4.274V5.833H14.583V2.917h-2.916v2.916H1.458v2.902h16.29a22.915 22.915 0 01-4.623 7.817 22.817 22.817 0 01-3.369-4.885H6.84a25.613 25.613 0 004.345 6.65l-7.423 7.32 2.071 2.071 7.292-7.291 4.535 4.535 1.109-2.975zm8.21-7.394h-2.916l-6.563 17.5h2.917l1.633-4.375h6.927l1.648 4.375h2.917l-6.563-17.5zm-3.82 10.209l2.362-6.315 2.362 6.315h-4.725z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Icon10Icon;
/* prettier-ignore-end */
