// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Meta, Story } from '@storybook/react/types-6-0';
import React, { useState } from 'react';
import OnMountFade, { Props } from './OnMountFade';

const Component = (props: any) => {
  const [mount, setMount] = useState(true);

  return (
    <>
      <button onClick={() => setMount(!mount)}>toggle mount</button>
      {mount && <OnMountFade {...props}>I'm target</OnMountFade>}
    </>
  );
};

export default {
  title: 'Components/OnMountFade',
  component: Component,
} as Meta;

const Template: Story<Props> = (args) => <Component {...args} />;

export const Basic = Template.bind({});
Basic.args = {};

export const Delay = Template.bind({});
Delay.args = { delay: 1000 };

export const Duration = Template.bind({});
Duration.args = { duration: 1000 };
