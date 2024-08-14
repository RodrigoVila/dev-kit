import type { Meta, StoryObj } from "@storybook/react";
import { AnimatedBorderBottom } from "@/ui-components/AnimatedBorderBottom";

const meta: Meta<typeof AnimatedBorderBottom> = {
  title: "Animated Border Bottom",
  component: AnimatedBorderBottom,
  tags: ["autodocs"],
  args: {
    children: "Hover me",
  },
} satisfies Meta<typeof AnimatedBorderBottom>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => (
    <div className="relative w-max flex gap-3">
      <AnimatedBorderBottom {...args}>{args.children}</AnimatedBorderBottom>
    </div>
  ),
};

export const WithCustomClassNames: Story = {
  args: {
    className: "!border-b-red-500",
  },
  render: (args) => (
    <div className="relative w-max flex gap-3">
      <AnimatedBorderBottom {...args}>{args.children}</AnimatedBorderBottom>
    </div>
  ),
};
