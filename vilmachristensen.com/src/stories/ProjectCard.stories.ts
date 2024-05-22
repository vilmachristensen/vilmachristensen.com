import type { Meta, StoryObj } from '@storybook/react';
import ProjectCard from '../components/ProjectCard'

const meta: Meta<typeof ProjectCard> = {
  component: ProjectCard,
};

export default meta;
type Story = StoryObj<typeof ProjectCard>;

export const Text: Story = {
  args: {
    gradientColor1: '#22244E',
    gradientColor2: '#E351A8', 
    name: "hej",
  },
};