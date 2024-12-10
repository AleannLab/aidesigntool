import React from "react";

export const Button = (props: React.ButtonHTMLAttributes<HTMLButtonElement> & {
    variant?: "outline" | "default"
                       }
) => {
    return <button {...props} />
}