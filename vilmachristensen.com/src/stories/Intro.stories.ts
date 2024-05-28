import type { Meta, StoryObj } from '@storybook/react';
import Intro from '../components/Intro'

const meta: Meta<typeof Intro> = {
  component: Intro,
};

export default meta;
type Story = StoryObj<typeof Intro>;

export const Text: Story = {
  args: {
  },
};