import type { Meta, StoryObj } from "@storybook/react";
import { FloatingMenu } from "./components/FloatingMenu";
import { FloatingMenuTrigger } from "./components/FloatingMenuTrigger";
import { FloatingMenuContent } from "./components/FloatingMenuContent";
import { FloatingMenuHeading } from "./components/FloatingMenuHeading";
import { FloatingMenuDescription } from "./components/FloatingMenuDescription";
import { FloatingMenuClose } from "./components/FloatingMenuClose";

const meta: Meta<typeof FloatingMenu> = {
  title: "Floating Menu",
  component: FloatingMenu,
  tags: ["autodocs"],
  args: {
    initialOpen: false,
    placement: "bottom",
    modal: false,
  },
} satisfies Meta<typeof FloatingMenu>;

export default meta;
type Story = StoryObj<typeof meta>;

const MenuTemplate = (args: any) => (
  <FloatingMenu {...args}>
    <FloatingMenuTrigger>
      <button className="bg-slate-800 p-2 text-white">Open Menu</button>
    </FloatingMenuTrigger>
    <FloatingMenuContent className="relative bg-white rounded-lg pt-2 flex flex-col gap-2 border-2 border-slate-800">
      <FloatingMenuHeading className="text-xl text-center font-bold">
        Menu Title
      </FloatingMenuHeading>
      <FloatingMenuDescription className="px-2">
        This is a description of the menu.
      </FloatingMenuDescription>
      <ul>
        <li className="hover:bg-slate-800 hover:text-white px-2 cursor-pointer">
          Menu Item 1
        </li>
        <li className="hover:bg-slate-800 hover:text-white px-2 cursor-pointer">
          Menu Item 2
        </li>
        <li className="hover:bg-slate-800 hover:text-white px-2 cursor-pointer">
          Menu Item 3
        </li>
      </ul>
      <FloatingMenuClose className="absolute top-1 right-1 rounded-full w-7 h-7 border-2">
        X
      </FloatingMenuClose>
    </FloatingMenuContent>
  </FloatingMenu>
);

export const Default: Story = {
  render: MenuTemplate,
};

export const TopPlacement: Story = {
  args: {
    placement: "top",
  },
  render: MenuTemplate,
};

export const RightPlacement: Story = {
  args: {
    placement: "right",
  },
  render: MenuTemplate,
};
