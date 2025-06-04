module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        extensions: [
          '.ios.js',
          '.android.js',
          '.js',
          '.jsx',
          '.ts',
          '.tsx',
          '.json',
        ],
        alias: {
          '@Redux': './ProductApp/src/redux',
          '@Languages': './ProductApp/assets/languages',
          '@Utils': './ProductApp/src/utils',
          '@Assets': './ProductApp/assets',
          '@Views': './ProductApp/src/views',
          '@Components': './ProductApp/src/components',
          '@Navigation': './ProductApp/src/navigation',
          '@Api': './ProductApp/src/api',
          '@Services': './ProductApp/src/services',
        },
      },
    ],
  ],
};
