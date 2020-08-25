// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Meta, Story } from '@storybook/react/types-6-0';
import React, { useState } from 'react';
import Riser, { Props as FadeProps } from './Riser';

export default {
  title: 'Components/Riser',
  component: Riser,
} as Meta;

const Template: Story<FadeProps> = (args) => {
  const [visible, setVisible] = useState(true);
  return (
    <>
      <button onClick={() => setVisible(!visible)}>toggle</button>
      <Riser {...args} visible={visible}>
        i am content
      </Riser>
    </>
  );
};

export const Basic = Template.bind({});
Basic.args = {};

export const Delay = Template.bind({});
Delay.args = { delayMs: 500 };

export const Duration = Template.bind({});
Duration.args = { durationMs: 1000 };
