import { Meta, Story } from '@storybook/react';
import React from 'react';
import useWindowSize from './useWindowSize';

const Component = (props: any) => {
  const { width, height } = useWindowSize();
  return (
    <>
      <div>width: {width}</div>
      <div>height: {height}</div>
    </>
  );
};

export default {
  title: 'hooks/useWindowSize',
  component: Component,
} as Meta;

const Template: Story = (args) => <Component {...args} />;

export const Basic = Template.bind({});
Basic.args = {};
