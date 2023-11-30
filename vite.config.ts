import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig((commit) => {
  
  console.log('commit',commit)
  return {
    plugins: [vue()],

    resolve: {
      alias: {
        "/@": path.resolve(__dirname, "src"),
      },
    },
    server: {
      proxy: {
        "/api": {
          target: "http://127.0.0.1:5000",
          changeOrigin: true,
        },
      },
    },
  };
});
