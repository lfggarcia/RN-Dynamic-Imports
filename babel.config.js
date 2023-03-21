module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    'import-glob',
    [
      'module-resolver',
      {
        root: ['./app'],
        extensions: [
          '.ios.ts',
          '.android.ts',
          '.ts',
          '.ios.tsx',
          '.android.tsx',
          '.tsx',
          '.jsx',
          '.js',
          '.json',
        ],
        alias: {
          features: './app/features',
          navigation: './app/navigation',
          API: './app/common/API',
          theme: './app/common/theme',
          components: './app/common/components',
          konst: './app/common/konst',
          utils: './app/common/utils',
          icons: './assets/icons',
          images: './assets/images',
        },
      },
    ],
    'react-native-reanimated/plugin',
  ],
};
