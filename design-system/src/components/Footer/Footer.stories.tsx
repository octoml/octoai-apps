import type { Meta, StoryObj } from '@storybook/react';

import Footer from '.';

const meta: Meta<typeof Footer> = {
    title: 'Components/Footer',
    component: Footer,
    decorators: [
        (Story) => (
            <div className='absolute bottom-0 w-[calc(100%-2rem)]'>
                <Story />
            </div>
        )
    ]
};

export default meta;

type Story = StoryObj<typeof Footer>;

export const Default: Story = {};