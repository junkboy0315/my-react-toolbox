// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Meta, Story } from '@storybook/react/types-6-0';
import React, { useState } from 'react';
import EachImage, { Props as FadeProps } from './EachImage';

export default {
  title: 'Components/HeroSlick-EachImage',
  component: EachImage,
} as Meta;

const Template: Story<FadeProps> = (props: FadeProps) => {
  const [visible, setVisible] = useState(false);
  return (
    <>
      <button
        onClick={() => setVisible(!visible)}
        style={{ marginBottom: '5rem' }}
      >
        toggle
      </button>
      <EachImage {...props} in={visible}></EachImage>
    </>
  );
};

export const Basic = Template.bind({});
Basic.args = { src: 'https://i.imgur.com/7g8xBWj.jpeg' };
