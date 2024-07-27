import React from 'react';
import type { Preview } from '@storybook/react';
import { withRouter } from 'storybook-addon-react-router-v6';
import MockDate from 'mockdate';
import { initialize, mswLoader } from 'msw-storybook-addon';
import { GlobalUtilityStoryMockProvider } from '../src/providers/GlobalUtilityProvider';

// Initialize MSW
initialize();

// NOTE: storybook内の時間を固定する(2023-07-01 = MVPリリース日)
MockDate.set(new Date('2023-07-01T00:00:00'));

const preview: Preview = {
  decorators: [
    (story) => (
      <GlobalUtilityStoryMockProvider>{story()}</GlobalUtilityStoryMockProvider>
    ),
    withRouter,
  ],
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    chromatic: {
      viewports: [1280],
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
  loaders: [mswLoader],
};

export default preview;
