import type { Meta, StoryObj } from "@storybook/react";
import { Input } from "@/ui-components/Input";

const meta: Meta<typeof Input> = {
  title: "Input",
  component: Input,
  tags: ["autodocs"],
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <div className="w-64">
      <Input label="Default Input" placeholder="Enter text" />
    </div>
  ),
};

export const WithCustomClassNames: Story = {
  render: () => (
    <div className="w-64">
      <Input
        label="Custom Input"
        placeholder="Enter text"
        className="border-blue-500 bg-gray-100 text-blue-700"
      />
    </div>
  ),
};

export const Disabled: Story = {
  render: () => (
    <div className="w-64">
      <Input label="Disabled Input" placeholder="Can't type here" disabled />
    </div>
  ),
};

export const WithoutLabel: Story = {
  render: () => (
    <div className="w-64">
      <Input placeholder="No label here" />
    </div>
  ),
};
