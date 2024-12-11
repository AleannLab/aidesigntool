import React from "react";
import cn from "classnames";

export const Button = ({
  variant = "default",
  size = "md",
  children,
  icon,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "filled" | "outline" | "default" | "ghost";
  size?: "sm" | "md" | "lg";
  icon?: React.ReactNode;
}) => {
  return (
    <button
      {...props}
      className={cn(
        {
          "bg-[#000000] text-white": variant === "default",
          "border-none bg-[#DB27771A] text-[#000000]": variant === "outline",
          "bg-[#E6E6E6] text-[#000000]": variant === "ghost",
          "text-[14px] font-medium": size === "sm",
          "text-[16px] font-semibold": size === "md",
          "bg-[#DB2777] text-white !font-medium": variant === "filled",
          "flex flex-col gap-[8px]": !!icon,
        },
        props.className,
        "flex justify-center items-center p-[8px] rounded-[10px]",
      )}
    >
      {icon}
      {children}
    </button>
  );
};
