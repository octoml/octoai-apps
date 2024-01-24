import type { Meta, StoryObj } from '@storybook/react';

import GeneratedImage from '.';

const meta: Meta<typeof GeneratedImage> = {
    title: 'Components/Generated Image',
    component: GeneratedImage,
    decorators: [
        (Story) => (
            <main className='container'>
                <Story />
            </main>
        )
    ]
};

export default meta;

type Story = StoryObj<typeof GeneratedImage>;

export const Default: Story = {};