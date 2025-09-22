// @ts-check
import { defineConfig } from 'astro/config';












// https://astro.build/config
export default defineConfig({
    build: {
        format: 'directory'
    }

// 不采用开发工具栏
    devToolbar: {
        enabled: false
    }    
});
