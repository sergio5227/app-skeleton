const { getDefaultConfig, mergeConfig } = require('@react-native/metro-config');

/**
 * Metro configuration
 * https://reactnative.dev/docs/metro
 *
 * @type {import('@react-native/metro-config').MetroConfig}
 */
const config = {
  transformer: {
    // Acelera la transformación de archivos
    minifierPath: 'metro-minify-terser',
    minifierConfig: {
      compress: {
        // Reduce optimizaciones en desarrollo
        toplevel: false,
        drop_console: false,
      },
    },
  },
  maxWorkers: 4, // Usa múltiples workers para procesamiento paralelo
};

module.exports = mergeConfig(getDefaultConfig(__dirname), config);
