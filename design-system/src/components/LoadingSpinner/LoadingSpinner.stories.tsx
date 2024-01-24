import type { Meta, StoryObj } from '@storybook/react';

import LoadingSpinner from '.';

const meta: Meta<typeof LoadingSpinner> = {
    title: 'Components/Loading Spinner',
    component: LoadingSpinner,
    decorators: [
        (Story) => (
            <div className="interactive">
                <div className='result  w-96 h-96'>
                    <Story />
                </div>
            </div>

        )
    ]
};

export default meta;

type Story = StoryObj<typeof LoadingSpinner>;

export const Default: Story = {};