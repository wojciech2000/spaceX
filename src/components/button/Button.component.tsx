import clsx from "clsx";
import React from "react";

interface IProps {
  children: string;
  className?: string;
  onClick?: () => void;
}

const Button: React.FC<IProps> = ({ children, className, onClick }) => {
  return (
    <button
      onClick={() => onClick && onClick()}
      className={clsx(
        "border border-primary px-4 block mt-4 text-xl py-2 rounded-full text-primary mx-auto transition-all hover:bg-primary hover:text-black",
        className,
      )}
    >
      {children}
    </button>
  );
};

export default Button;
