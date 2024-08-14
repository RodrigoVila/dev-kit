import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { Button } from "./Button";

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

export const WithIcon: Story = {
  args: {
    icon: <>🤖</>,
  },
};

export const WithCustomClassNames: Story = {
  args: {
    className:
      "py-1 bg-blue-500 border-2 border-blue-600 text-md font-bold hover:text-blue-500 rounded-full",
  },
};
