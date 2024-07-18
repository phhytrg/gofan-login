import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react-swc';

export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom',
    setupFiles: './src/__tests__/setupTests.ts',
    globals: true,
    reporters: ['html', 'default'],
    coverage: {
      reporter: ['text', 'html', 'json'],
      enabled: true,
      provider: 'istanbul',
    },
  },
});
