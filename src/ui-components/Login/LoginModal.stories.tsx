import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";

import { Button } from "@/ui-components/Button";
import { LoginModal } from "./LoginModal";

const meta: Meta<typeof LoginModal> = {
  title: "Login Modal",
  component: LoginModal,
  tags: ["autodocs"],
} satisfies Meta<typeof LoginModal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
      <div>
        <Button variant="outline" onClick={() => setIsOpen(true)}>
          Open Login Modal
        </Button>
        <LoginModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
      </div>
    );
  },
};
