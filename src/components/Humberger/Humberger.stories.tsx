// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Meta, Story } from '@storybook/react/types-6-0';
import React from 'react';
import Humberger, { Props } from './Humberger';

export default {
  title: 'Components/Humberger',
  component: Humberger,
} as Meta;

const Template: Story<Props> = (args) => <Humberger {...args} />;

export const Basic = Template.bind({});
Basic.args = { motionType: 'squeeze' };
