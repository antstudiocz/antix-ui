import path from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { resolve } from "path";
import dts from "vite-plugin-dts";

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
  const isLib = mode === "lib";

  return {
    // Nastavení root na examples adresář pro development
    root: command === "serve" ? "examples" : undefined,
    plugins: [
      react(),
      tailwindcss(),
      isLib &&
        dts({
          include: ["src"],
          exclude: [
            "src/**/*.test.ts",
            "src/**/*.test.tsx",
            "src/**/*.stories.tsx",
          ],
          rollupTypes: true,
          insertTypesEntry: true,
        }),
    ].filter(Boolean),
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
    build: {
      ...(isLib
        ? {
            lib: {
              entry: resolve(__dirname, "src/index.ts"),
              name: "AntixUI",
              fileName: (format) => `index.${format}.js`,
              formats: ["es", "cjs"],
            },
            rollupOptions: {
              external: ["react", "react-dom"],
              output: {
                globals: {
                  react: "React",
                  "react-dom": "ReactDOM",
                },
                assetFileNames: "style.css",
              },
            },
            cssCodeSplit: false,
            sourcemap: true,
            emptyOutDir: true,
          }
        : {
            outDir: "../dist/examples",
            emptyOutDir: true,
            rollupOptions: {
              input: {
                main: resolve(__dirname, "examples/index.html"),
              },
            },
          }),
    },
    server: {
      port: 5173,
      open: true,
    },
  };
});
