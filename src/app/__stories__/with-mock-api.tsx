import { type Decorator } from '@storybook/react';
require('../__mocks__');
export const withApiMock: Decorator = (StoryFn) => {
  return <StoryFn />;
};
 