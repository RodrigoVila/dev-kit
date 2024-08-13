import type { Meta, StoryObj } from "@storybook/react";
import { ToastContainer } from "react-toastify";
import { ToastNotificationsDemo } from "./ToastNotificationsDemo";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Toast Notifications Demo",
  component: ToastNotificationsDemo,
  decorators: [
    (Story) => (
      <>
        <ToastContainer />
        <Story />
      </>
    ),
  ],
  tags: ["autodocs"],
} satisfies Meta<typeof ToastNotificationsDemo>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
