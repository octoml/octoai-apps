import type { Meta, StoryObj } from "@storybook/react";

import Prompt from ".";

const meta: Meta<typeof Prompt> = {
  title: "Components/Prompt",
  component: Prompt,
  decorators: [
    (Story) => (
      <main className="container">
        <div className="interactive">
          <Story />
        </div>
      </main>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof Prompt>;

export const Default: Story = {
  args: {
    formLabel: "Enter prompt",
    btnText: "Generate",
    initialPrompt: "llama flakes, real tokens inside",
    inputValue: "",
    setInputValue: undefined,
    handleSubmit: (e) => e.preventDefault(),
  },
};
