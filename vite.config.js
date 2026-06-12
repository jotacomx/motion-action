import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { fileURLToPath } from "node:url";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: [
      {
        // @splinetool/loader importa o nome antigo `mergeBufferGeometries`,
        // removido do three >= r151 (virou `mergeGeometries`). Redirecionamos
        // esse módulo para um shim que reexporta com o nome antigo.
        find: /^three\/examples\/jsm\/utils\/BufferGeometryUtils\.js$/,
        replacement: fileURLToPath(
          new URL("./src/three-bgu-shim.js", import.meta.url)
        ),
      },
    ],
  },
});
