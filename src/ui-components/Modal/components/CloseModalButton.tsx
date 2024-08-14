import { IoMdClose } from "react-icons/io";
import { twMerge } from "tailwind-merge";

type CloseModalButtonProps = {
  size?: number;
  onClose: () => void;
  className?: string;
};

export const CloseModalButton = ({
  size = 25,
  onClose,
  className,
}: CloseModalButtonProps) => {
  return (
    <button
      onClick={onClose}
      className={twMerge("top-0 cursor-pointer text-black", className)}
    >
      <IoMdClose size={size} />
    </button>
  );
};
