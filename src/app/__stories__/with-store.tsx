import { Decorator } from '@storybook/react';
import { Provider as ReduxProvider } from 'react-redux';

import { storeWrapper } from '../app-store';
const { store, props } = storeWrapper.useWrappedStore([]);
export const withStore: Decorator = (StoryFn, context) => {
  return (
    <ReduxProvider store={store}>
      <StoryFn />
    </ReduxProvider>
  );
};
