import { fileURLToPath, URL } from "node:url";

import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
    root: fileURLToPath(new URL("./client", import.meta.url)),
    cacheDir: fileURLToPath(new URL("./node_modules/.vite", import.meta.url)),
    plugins: [react()],
    resolve: {
        alias: {
            "@": fileURLToPath(new URL("./client/src", import.meta.url)),
        },
    },
    server: {
        host: "127.0.0.1",
        port: 0,
    },
    build: {
        outDir: fileURLToPath(new URL("./dist", import.meta.url)),
        emptyOutDir: true,
    },
});
