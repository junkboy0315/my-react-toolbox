import { Meta, Story } from '@storybook/react';
import React from 'react';
import ContentsPlaceholder, { Props } from './ContentsPlaceholder';

export default {
  title: 'Components/ContentsPlaceholder',
  component: ContentsPlaceholder,
} as Meta;

const Template: Story<Props> = (args) => <ContentsPlaceholder {...args} />;

export const Basic = Template.bind({});
Basic.args = { delayMs: 0 };
