import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    resolve: {
        alias: {
            Root: path.resolve(__dirname, 'src'),
            Assets: path.resolve(__dirname, 'src/assets'),
            UI: path.resolve(__dirname, 'src/UI'),
        },
    },
});
