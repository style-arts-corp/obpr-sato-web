import type { StorybookConfig } from '@storybook/react-vite';
import path from 'path';
import turbosnap from 'vite-plugin-turbosnap';
import { mergeConfig } from 'vite';

const config: StorybookConfig = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@chromatic-com/storybook',
    'storybook-addon-react-router-v6',
  ],
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
  features: {
    storyStoreV7: true,
  },
  staticDirs: ['../public'],
  viteFinal: async (config, { configType }) => {
    if (!config.resolve) return config;
    config.resolve.alias = {
      ...config.resolve.alias,
      '@': path.resolve(__dirname, '../src'),
      '.storybook': path.resolve(__dirname, './'),
    };

    const plugins = [
      ...(configType === 'PRODUCTION'
        ? [turbosnap({ rootDir: config.root ?? process.cwd() })]
        : []),
    ];

    return mergeConfig(config, {
      plugins,
    });
  },
  docs: {
    autodocs: true,
  },
};

export default config;
