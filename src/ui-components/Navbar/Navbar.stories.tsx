import type { Meta, StoryObj } from "@storybook/react";
import { Navbar } from "@/ui-components/Navbar";

const meta: Meta<typeof Navbar> = {
  title: "Navbar",
  component: Navbar,
  tags: ["autodocs"],
} satisfies Meta<typeof Navbar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
