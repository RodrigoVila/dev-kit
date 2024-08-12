import { twMerge } from "tailwind-merge";
import { PropsWithChildren } from "react";
import { Button, ButtonProps } from ".";

type OutlineButtonProps = PropsWithChildren & ButtonProps;

export const OutlineButton = ({
  className,
  children,
  ...rest
}: OutlineButtonProps) => {
  return (
    <Button
      variant="outline"
      className={twMerge("rounded-full min-w-48", className)}
      {...rest}
    >
      {children}
    </Button>
  );
};
