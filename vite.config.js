import { defineConfig } from 'vite';
import { resolve } from 'path';
import * as path from 'path';

const pages = {
    index: resolve(__dirname, "index.html"),
    index2: resolve(__dirname, "index2.html"),
}

export default defineConfig({
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src')
        }
    },
    build: {
        rollupOptions: {
            input: {
                ...pages,
            },
        },
    },
})