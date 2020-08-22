// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Meta, Story } from '@storybook/react/types-6-0';
import React, { useState } from 'react';
import Fade, { Props as FadeProps } from './Fade';

const ToggleWrapper = (props: FadeProps) => {
  const [visible, setVisible] = useState(false);
  return (
    <>
      <button onClick={() => setVisible(!visible)}>toggle</button>
      <Fade {...props} visible={visible}>
        <div style={{ background: 'gray' }}>I'm Content</div>
      </Fade>
    </>
  );
};

export default {
  title: 'Components/Fade',
  component: ToggleWrapper,
} as Meta;

const Template: Story<FadeProps> = (args) => <ToggleWrapper {...args} />;

export const Basic = Template.bind({});
Basic.args = {};

export const LongDuration = Template.bind({});
LongDuration.args = { duration: 3000 };

export const Delay = Template.bind({});
Delay.args = { delay: 1000 };

export const FadeTypeUpward = Template.bind({});
FadeTypeUpward.args = { fadeType: 'upward', duration: 1000 };

export const FadeTypeBlur = Template.bind({});
FadeTypeBlur.args = { fadeType: 'blur', duration: 1000 };
