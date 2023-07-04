// vite.config.js
export default {
  css: {
    preprocessorOptions: {
      scss: {
        quietDeps: true,
      },
    },
  },
  define: {
    'process.env': {},
  },

  base: './',
  build: {
    rollupOptions: {
      output: {
        entryFileNames: `assets/[name].js`,
        chunkFileNames: `assets/[name].js`,
        assetFileNames: `assets/[name].[ext]`,
      },
    },
  },
};
