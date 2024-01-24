import type { Meta, StoryObj } from "@storybook/react";

import ChatBubble from ".";

const meta: Meta<typeof ChatBubble> = {
  title: "Components/Chat Bubble",
  component: ChatBubble,
  decorators: [
    (Story) => (
      <main className="container">
        <Story />
      </main>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof ChatBubble>;

export const Default: Story = {
  args: {
    text: "What is OctoAI?",
    color: "primary",
  },
};
