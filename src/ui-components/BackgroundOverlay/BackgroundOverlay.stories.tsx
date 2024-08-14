import type { Meta, StoryObj } from "@storybook/react";
import {
  BackgroundOverlay,
  BackgroundOverlayProps,
} from "@/ui-components/BackgroundOverlay";

const meta: Meta<typeof BackgroundOverlay> = {
  title: "Background Overlay",
  component: BackgroundOverlay,
  tags: ["autodocs"],
} satisfies Meta<typeof BackgroundOverlay>;

export default meta;
type Story = StoryObj<typeof meta>;

const CustomStory = (props: BackgroundOverlayProps): JSX.Element => (
  <div className="relative bg-[url(/fantasy.webp)] bg-center h-screen w-full flex flex-col items-center justify-center gap-3 text-white">
    <BackgroundOverlay {...props} />
    <h1 className="text-4xl z-[1]">Title</h1>
    <p className="text-lg z-[1]">
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga,
      voluptatum?
    </p>
  </div>
);

export const Default: Story = {
  render: () => <CustomStory />,
};

export const Lighter: Story = {
  render: () => <CustomStory lighter />,
};

export const Darker: Story = {
  render: () => <CustomStory darker />,
};
