import { Meta, Story } from '@storybook/react';
import { css } from 'emotion';
import React from 'react';
import useIsSeen, { Options } from './useIsSeen';

export default {
  title: 'hooks/useIsSeen',
} as Meta;

const Template: Story<Options> = (args) => {
  const { isSeen, ref } = useIsSeen({ offsetY: args.offsetY });

  const styles = {
    preContent: css`
      background: gray;
      height: 150vh;
    `,
    target: css`
      background: lightgreen;
    `,
    postContent: css`
      background: gray;
      height: 150vh;
    `,
    stateIndicator: css`
      position: fixed;
      top: 50px;
      left: 50px;
      background: lightgreen;
      opacity: 0.7;
      border: 1px black solid;
      padding: 1rem;
    `,
  };

  return (
    <>
      <div className={styles.preContent}>Pre content</div>
      <div className={styles.target} ref={ref}>
        I'm target
      </div>
      <div className={styles.postContent}>Post Content</div>
      <div className={styles.stateIndicator}>isSeen: {String(isSeen)}</div>
    </>
  );
};

export const Basic = Template.bind({});
Basic.args = {};

export const Offset = Template.bind({});
Offset.args = { offsetY: 200 };
