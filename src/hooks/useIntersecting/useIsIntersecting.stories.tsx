import { Meta, Story } from '@storybook/react';
import React from 'react';
import useIsIntersecting, { Options } from './useIsIntersecting';

export default {
  title: 'hooks/useIsIntersecting',
} as Meta;

const Template: Story<Options> = (args) => {
  const { isIntersecting, onTargetChange } = useIsIntersecting(args);

  return (
    <>
      <div style={{ position: 'fixed', top: 0 }}>
        isIntersecting: {String(isIntersecting)}
      </div>
      <div style={{ height: '150vh', background: 'gray' }}></div>
      <div ref={onTargetChange}>check</div>
      <div style={{ height: '150vh', background: 'gray' }}></div>
    </>
  );
};

export const Basic = Template.bind({});
Basic.args = {};

export const Once = Template.bind({});
Once.args = { once: true };
