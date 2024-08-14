import type { Meta, StoryObj } from "@storybook/react";
import { Dropdown } from "@/ui-components/Dropdown";

const meta: Meta<typeof Dropdown> = {
  title: "Dropdown",
  component: Dropdown,
  tags: ["autodocs"],
} satisfies Meta<typeof Dropdown>;

export default meta;
type Story = StoryObj<typeof meta>;

const options = [
  { label: "Option 1", value: "option1" },
  { label: "Option 2", value: "option2" },
  { label: "Option 3", value: "option3" },
];

const handleChange = (option: any) => {
  console.log("Selected option:", option);
};

export const Default: Story = {
  render: () => (
    <div className="w-64">
      <Dropdown options={options} onChange={handleChange} />
    </div>
  ),
};

export const WithCustomClassNames: Story = {
  render: () => (
    <div className="w-64">
      <Dropdown
        options={options}
        onChange={handleChange}
        className="border-blue-500 bg-gray-100 text-blue-700"
      />
    </div>
  ),
};

export const WithPreselectedOption: Story = {
  render: () => (
    <div className="w-64">
      <Dropdown
        options={options}
        onChange={handleChange}
        defaultValue={JSON.stringify(options[1])} // Preselect "Option 2"
      />
    </div>
  ),
};
