// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Meta, Story } from '@storybook/react/types-6-0';
import React, { useState } from 'react';
import Humberger, { Props } from './Humberger';

export default {
  title: 'Components/Humberger',
  component: Humberger,
} as Meta;

const Template: Story<Props> = (args) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <>
      <div>
        <button onClick={() => setIsActive(!isActive)}>toggle</button>
      </div>
      <div>
        <Humberger {...args} isActive={isActive} motionType="squeeze" />
      </div>
    </>
  );
};

export const Basic = Template.bind({});
Basic.args = {};
