import { Spinner } from "@/ui-components/Spinner";
import { ButtonHTMLAttributes, ReactNode } from "react";
import { twMerge } from "tailwind-merge";

type ButtonVariantType = "default" | "rounded" | "outline";

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariantType;
  isLoading?: boolean;
  icon?: ReactNode;
};

export const Button = ({
  className,
  children,
  variant = "default",
  isLoading,
  icon,
  ...rest
}: ButtonProps) => {
  const variantStyles = {
    rounded: "rounded-lg",
    outline:
      "border-[1px] border-slate-900 bg-transparent text-slate-900  hover:bg-slate-900 hover:text-white",
    transparent: "focus:shadow-outline appearance-none rounded border",
    default: "",
  };

  const selectedVariantStyles = variantStyles[variant];

  return (
    <button
      className={twMerge(
        "px-4 py-2 min-w-20 gap-3 transition duration-300 ease-in-out bg-slate-900 border-[1px] border-slate-800 text-white hover:bg-white hover:text-black disabled:pointer-events-none disabled:bg-slate-400 disabled:text-slate-300 disabled:border-transparent",
        selectedVariantStyles,
        className
      )}
      disabled={isLoading || rest.disabled}
      {...rest}
    >
      {!isLoading && (<span className="mr-1">{icon}</span> ?? <></>)}
      {isLoading ? <Spinner /> : children}
    </button>
  );
};
