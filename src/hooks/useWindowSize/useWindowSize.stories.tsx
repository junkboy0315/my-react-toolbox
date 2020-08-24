import { Meta, Story } from '@storybook/react';
import React from 'react';
import useWindowSize from './useWindowSize';

export default {
  title: 'hooks/useWindowSize',
} as Meta;

const Template: Story = () => {
  const { width, height } = useWindowSize();
  return (
    <>
      <div>width: {width}</div>
      <div>height: {height}</div>
    </>
  );
};

export const Basic = Template.bind({});
Basic.args = {};
