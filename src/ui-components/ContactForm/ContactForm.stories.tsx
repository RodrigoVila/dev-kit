import type { Meta, StoryObj } from "@storybook/react";
import { ContactForm } from "./ContactForm";
import { ToastContainer } from "react-toastify";

const meta = {
  title: "Contact Form",
  component: ContactForm,
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <>
        <ToastContainer />
        <Story />
      </>
    ),
  ],
} satisfies Meta<typeof ContactForm>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
