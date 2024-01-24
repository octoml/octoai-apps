import type { Meta, StoryObj } from '@storybook/react';

import ErrorBanner from '.';

const meta: Meta<typeof ErrorBanner> = {
    title: 'Components/Error Banner',
    component: ErrorBanner,
    decorators: [
        (Story) => (
            <div className='interactive'>
                <Story />
            </div>
        )
    ]
};

export default meta;

type Story = StoryObj<typeof ErrorBanner>;

export const Default: Story = {
    args: {
        bannerText: "Banner text"
    }
};