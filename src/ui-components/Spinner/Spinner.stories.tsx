import type { Meta, StoryObj } from "@storybook/react";
import { Spinner } from "@/ui-components/Spinner";

const meta: Meta<typeof Spinner> = {
  title: "Spinner",
  component: Spinner,
  tags: ["autodocs"],
} satisfies Meta<typeof Spinner>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => <Spinner />,
};

export const WithLabel: Story = {
  render: () => <Spinner>Loading...</Spinner>,
};

export const CustomSize: Story = {
  render: () => <Spinner svgClassName="h-12 w-12">Loading...</Spinner>,
};

export const CustomColors: Story = {
  render: () => (
    <Spinner
      svgClassName="h-8 w-8 animate-spin fill-blue-500 text-blue-300"
      labelClasName="text-blue-500"
    >
      Processing...
    </Spinner>
  ),
};
