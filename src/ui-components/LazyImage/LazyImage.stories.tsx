import type { Meta, StoryObj } from "@storybook/react";
import { LazyImage, LazyImageProps } from "@/ui-components/LazyImage";

const meta: Meta<typeof LazyImage> = {
  title: "LazyImage",
  component: LazyImage,
  tags: ["autodocs"],
} satisfies Meta<typeof LazyImage>;

export default meta;
type Story = StoryObj<typeof meta>;

const baseImage: LazyImageProps = {
  alt: "Image 1",
  src: "https://placehold.co/600x400/orange/white",
  width: "300px",
  height: "200px",
};

const IMAGES = Array.from({ length: 10 }, (_, index) => ({
  ...baseImage,
  alt: `Image ${index + 1}`,
}));

const CustomStory = (overrides?: Partial<LazyImageProps>) => (
  <div className="space-y-2">
    {IMAGES.map((image, index) => (
      <LazyImage key={index} {...image} {...overrides} />
    ))}
  </div>
);

export const Default: Story = {
  render: () => CustomStory({ effect: "blur" }),
};
