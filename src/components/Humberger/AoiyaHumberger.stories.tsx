// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Meta, Story } from '@storybook/react/types-6-0';
import React, { useState } from 'react';
import AoiyaHumberger, { Props } from './AoiyaHumberger';

export default {
  title: 'Components/AoiyaHumberger',
  component: AoiyaHumberger,
} as Meta;

const Template: Story<Props> = (args) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div style={{ border: '50px solid gray', display: 'inline-block' }}>
      <AoiyaHumberger
        {...args}
        isActive={isActive}
        onClick={() => setIsActive(!isActive)}
      />
    </div>
  );
};

export const Basic = Template.bind({});
Basic.args = {};

export const Color = Template.bind({});
Color.args = { borderColor: 'red' };

export const Duration = Template.bind({});
Duration.args = { durationMs: 200 };
