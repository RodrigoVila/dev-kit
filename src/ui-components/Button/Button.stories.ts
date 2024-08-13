import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { Button } from "./Button";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Button",
  component: Button,
  tags: ["autodocs"],
  args: { children: "Button", onClick: fn() },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Rounded: Story = {
  args: {
    variant: "rounded",
  },
};

export const Outline: Story = {
  args: {
    variant: "outline",
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
};

export const WithLoadingState: Story = {
  args: {
    isLoading: true,
  },
};

export const WithCustomClassNames: Story = {
  args: {
    className:
      "px-16 bg-green-500 border-2 border-green-600 text-lg font-bold hover:text-green-500",
  },
};
