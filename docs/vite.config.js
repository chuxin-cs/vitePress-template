import { defineConfig } from "vite";

export default defineConfig(() => {
  return {
    server: {
      hmr: {
        overlay: false,
      },
    },
  };
});
