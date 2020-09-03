// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Meta, Story } from '@storybook/react/types-6-0';
import React from 'react';
import EachImage, { Props } from './EachImage';

export default {
  title: 'Components/HeroSlick-EachImage',
  component: EachImage,
} as Meta;

const Template: Story<Props> = (props) => <EachImage {...props}></EachImage>;

export const Basic = Template.bind({});
Basic.args = { src: 'https://i.imgur.com/7g8xBWj.jpeg', active: true };
