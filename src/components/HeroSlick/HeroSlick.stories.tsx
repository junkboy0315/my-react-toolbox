// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Meta, Story } from '@storybook/react/types-6-0';
import React from 'react';
import HeroSlick, { Props } from './HeroSlick';

export default {
  title: 'Components/HeroSlick',
  component: HeroSlick,
} as Meta;

const Template: Story<Props> = (props) => <HeroSlick {...props} />;

export const Basic = Template.bind({});
Basic.args = {
  srcs: [
    'https://hikimiaoiya.com/wp/wp-content/themes/aoiya/assets/images/main/mv_01.jpg',
    'https://hikimiaoiya.com/wp/wp-content/themes/aoiya/assets/images/main/mv_02.jpg',
    'https://i.imgur.com/KhruwqA.jpeg',
  ],
};
