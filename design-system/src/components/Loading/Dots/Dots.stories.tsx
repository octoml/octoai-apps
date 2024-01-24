import type { Meta, StoryObj } from "@storybook/react";

import Dots from ".";

const meta: Meta<typeof Dots> = {
  title: "Components/Loading/Dots",
  component: Dots,
  decorators: [
    (Story) => (
      <div className="container">
        <Story />
      </div>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof Dots>;

export const Default: Story = {};
