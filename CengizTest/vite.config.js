import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  // Temel proje ayarları
  root: 'src',
  base: process.env.NODE_ENV === 'production' ? '/dist/' : '/',
  
  // Build ayarları
  build: {
    // Build çıktı klasörü
    outDir: '../wwwroot/dist',
    emptyOutDir: true,
    manifest: true,
    
    // JS ve CSS dosyaları için çıktı ayarları
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'src/main.js'),
      },
      output: {
        entryFileNames: 'js/[name].js',
        chunkFileNames: 'js/[name]-[hash].js',
        assetFileNames: (assetInfo) => {
          const info = assetInfo.name.split('.');
          const ext = info[info.length - 1];
          if (/\.(css|scss|sass)$/.test(assetInfo.name)) {
            return 'css/[name][extname]';
          }
          if (/\.(png|jpe?g|gif|svg|webp|ico)$/.test(assetInfo.name)) {
            return 'img/[name][extname]';
          }
          if (/\.(woff2?|eot|ttf|otf)$/.test(assetInfo.name)) {
            return 'fonts/[name][extname]';
          }
          return 'assets/[name][extname]';
        },
      },
    },
  },
  
  // Dev server ayarları
  server: {
    port: 5173,
    strictPort: true,
    // ASP.NET Core'un CORS politikası için
    cors: true,
    // Otomatik sayfa yenileme için
    hmr: {
      host: 'localhost',
      protocol: 'ws',
    },  
  },
  
  // Diğer özellikler
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
    },
  }
  
  // css preprocessorOptions kısmını kaldırdık
});