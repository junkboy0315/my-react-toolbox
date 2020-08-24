import { Meta, Story } from '@storybook/react';
import React from 'react';
import useAdBlockDetector, { Options } from './useAdBlockDetector';

export default {
  title: 'hooks/useAdBlockDetector',
} as Meta;

const Template: Story<Options> = (args) => {
  const { detected, check } = useAdBlockDetector(args);

  return (
    <>
      <div>adblocker detected: {String(detected)}</div>
      <button onClick={() => check()}>check</button>
    </>
  );
};

export const Basic = Template.bind({});
Basic.args = {};

export const Lazy = Template.bind({});
Lazy.args = { lazy: true };
