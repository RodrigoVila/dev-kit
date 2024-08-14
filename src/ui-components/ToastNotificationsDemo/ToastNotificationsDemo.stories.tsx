import type { Meta, StoryObj } from "@storybook/react";
import { ToastContainer } from "react-toastify";
import { ToastNotificationsDemo } from "./ToastNotificationsDemo";

const meta = {
  title: "Toast Notifications",
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
