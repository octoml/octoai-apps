import type { Meta, StoryObj } from "@storybook/react";

import Spinner from ".";

const meta: Meta<typeof Spinner> = {
  title: "Components/Loading/Spinner",
  component: Spinner,
  decorators: [
    (Story) => (
      <div className="interactive">
        <div className="result  w-96 h-96">
          <Story />
        </div>
      </div>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof Spinner>;

export const Default: Story = {};
