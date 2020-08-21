// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Meta, Story } from '@storybook/react/types-6-0';
import React, { useState } from 'react';
import Fade, { IProps } from './Fade';

const ToggleWrapper = (props: IProps) => {
  const [visible, setVisible] = useState(false);
  return (
    <>
      <button onClick={() => setVisible(!visible)}>toggle</button>
      <Fade {...props} in={visible}>
        <div style={{ background: 'gray' }}>I'm Content</div>
      </Fade>
    </>
  );
};

export default {
  title: 'Components/Fade',
  component: ToggleWrapper,
} as Meta;

const Template: Story<IProps> = (args) => <ToggleWrapper {...args} />;

export const Basic = Template.bind({});
Basic.args = {};

export const LongDuration = Template.bind({});
LongDuration.args = { duration: 3000 };
