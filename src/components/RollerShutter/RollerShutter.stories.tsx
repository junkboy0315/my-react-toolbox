// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Meta, Story } from '@storybook/react/types-6-0';
import React, { useState } from 'react';
import RollerShutter, { Props } from './RollerShutter';

export default {
  title: 'Components/RollerShutter',
  component: RollerShutter,
} as Meta;

const Template: Story<Props> = (args) => {
  const [visible, setVisible] = useState(false);
  return (
    <div style={{ height: '200vh' }}>
      <button onClick={() => setVisible(true)}>open</button>
      <RollerShutter {...args} visible={visible}>
        <>
          <div style={{ color: 'white' }}>i am content</div>
          <button onClick={() => setVisible(false)}>close</button>
        </>
      </RollerShutter>
    </div>
  );
};

export const Basic = Template.bind({});
Basic.args = {};

export const Delay = Template.bind({});
Delay.args = { delayMs: 500 };

export const Duration = Template.bind({});
Duration.args = { durationMs: 1000 };
