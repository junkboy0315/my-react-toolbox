// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Meta, Story } from '@storybook/react/types-6-0';
import { css } from 'emotion';
import React from 'react';
import SeenFade, { Props } from './SeenFade';

export default {
  title: 'Components/SeenFade',
  component: SeenFade,
} as Meta;

const Template: Story<Props> = (props) => {
  const styles = {
    preContent: css`
      background: gray;
      height: 150vh;
    `,
    seenFadeContainer: css`
      background: lightpink;
    `,
    target: css`
      background: lightgreen;
    `,
    postContent: css`
      background: gray;
      height: 150vh;
    `,
  };

  return (
    <>
      <div className={styles.preContent}>Pre content</div>
      <SeenFade
        {...props}
        className={styles.seenFadeContainer}
        fadeType="upward"
      >
        <div className={styles.target}>I'm target</div>
      </SeenFade>
      <div className={styles.postContent}>Post Content</div>
    </>
  );
};

export const Basic = Template.bind({});
Basic.args = {};

export const LongDuration = Template.bind({});
LongDuration.args = { duration: 3000 };
