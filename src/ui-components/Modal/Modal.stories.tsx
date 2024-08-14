import type { Meta, StoryObj } from "@storybook/react";
import { Modal } from "@/ui-components/Modal";
import { useState } from "react";

const meta: Meta<typeof Modal> = {
  title: "Modal",
  component: Modal,
  tags: ["autodocs"],
} satisfies Meta<typeof Modal>;

export default meta;
type Story = StoryObj<typeof meta>;

const CustomStory = ({
  isOpen = true,
  fullScreen = false,
  closeOnOverlayClick = false,
}: {
  isOpen: boolean;
  fullScreen?: boolean;
  closeOnOverlayClick?: boolean;
}) => {
  const [open, setOpen] = useState(isOpen);

  const toggleModal = () => {
    setOpen(!open);
  };

  return (
    <>
      <button
        onClick={toggleModal}
        className="mb-4 rounded bg-blue-500 px-4 py-2 text-white"
      >
        {open ? "Close Modal" : "Open Modal"}
      </button>

      <Modal
        isOpen={open}
        onClose={toggleModal}
        fullScreen={fullScreen}
        closeOnOverlayClick={closeOnOverlayClick}
      >
        <h2 className="text-xl font-bold">Modal Content</h2>
        <p>This is a simple modal content for demonstration.</p>
      </Modal>
    </>
  );
};

export const Default: Story = {
  render: () => CustomStory({ isOpen: true }),
};

export const FullScreen: Story = {
  render: () => CustomStory({ isOpen: true, fullScreen: true }),
};

export const CloseOnOverlayClick: Story = {
  render: () => CustomStory({ isOpen: true, closeOnOverlayClick: true }),
};

export const NotOpenByDefault: Story = {
  render: () => CustomStory({ isOpen: false }),
};
