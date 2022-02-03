module.exports = function config(api) {
  api.cache(true);
  return {
    presets: [
      'babel-preset-expo',
      '@babel/preset-typescript',
    ],
    plugins: ['react-native-reanimated/plugin'],
  };
};
