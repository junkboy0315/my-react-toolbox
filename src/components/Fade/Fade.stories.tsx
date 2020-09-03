// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Meta, Story } from '@storybook/react/types-6-0';
import React from 'react';
import Fade, { Props as FadeProps } from './Fade';

export default {
  title: 'Components/Fade',
  component: Fade,
} as Meta;

const Template: Story<FadeProps> = (args) => (
  <Fade {...args}>
    <div style={{ background: 'gray' }}>I'm Content</div>
  </Fade>
);

const commonArgs = { visible: true };

export const Basic = Template.bind({});
Basic.args = { ...commonArgs };

export const LongDuration = Template.bind({});
LongDuration.args = { ...commonArgs, duration: 3000 };

export const Delay = Template.bind({});
Delay.args = { ...commonArgs, delay: 1000 };

export const FadeTypeUpward = Template.bind({});
FadeTypeUpward.args = { ...commonArgs, fadeType: 'upward', duration: 1000 };

export const FadeTypeBlur = Template.bind({});
FadeTypeBlur.args = { ...commonArgs, fadeType: 'blur', duration: 1000 };
