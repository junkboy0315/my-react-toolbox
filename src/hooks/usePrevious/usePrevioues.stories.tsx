import { Meta, Story } from '@storybook/react';
import React, { useState } from 'react';
import usePrevious from './usePrevious';

export default {
  title: 'hooks/usePrevious',
} as Meta;

const Template: Story = (args) => {
  const [value, setValue] = useState(0);

  const prevValue = usePrevious(value);

  return (
    <>
      <div>previous value: {String(prevValue)}</div>
      <div>current value: {String(value)}</div>
      <button onClick={() => setValue((current) => current + 1)}>
        count up
      </button>
    </>
  );
};

export const Basic = Template.bind({});
Basic.args = {};

export const Offset = Template.bind({});
Offset.args = { offsetY: 200 };
