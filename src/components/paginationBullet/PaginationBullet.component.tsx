import { NextPage } from "next";
import React from "react";
import clsx from "clsx";
import { BulletTypes } from "./PaginationBullet.types";

interface IProps {
  content: string | number | JSX.Element;
  onClick?: () => void;
  className?: string;
  type?: BulletTypes;
  disabled?: boolean;
}

const PaginationBullet: NextPage<IProps> = ({
  content,
  onClick,
  className,
  type = "secondary",
  disabled,
}) => {
  return (
    <button
      className={clsx(
        "p-2 w-10 h-10 flex justify-center items-center rounded-full font-bold",
        type === "primary" && "bg-primary text-customBlack",
        type === "secondary" && "bg-transparent border border-primary text-primary",
        disabled && "opacity-50 cursor-default",
        className,
      )}
      onClick={() => onClick && onClick()}
      disabled={disabled}
    >
      {content}
    </button>
  );
};

export default PaginationBullet;
