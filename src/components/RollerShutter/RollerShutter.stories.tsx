// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Meta, Story } from '@storybook/react/types-6-0';
import React from 'react';
import RollerShutter, { Props } from './RollerShutter';

export default {
  title: 'Components/RollerShutter',
  component: RollerShutter,
} as Meta;

const Template: Story<Props> = (args) => (
  <RollerShutter {...args}>
    <div style={{ color: 'white', paddingTop: '5rem' }}>i am content</div>
  </RollerShutter>
);

export const Basic = Template.bind({});
Basic.args = {};

export const Delay = Template.bind({});
Delay.args = { delayMs: 500 };

export const Duration = Template.bind({});
Duration.args = { durationMs: 1000 };
