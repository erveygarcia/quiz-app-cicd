import { defineConfig } from 'cypress';

export default defineConfig({
  component: {
    devServer: {
      framework: 'react',
      bundler: 'vite',
      viteConfig: {
        configFile: 'vite.config.ts',
      },
    },
    specPattern: 'cypress/component/**/*.{cy.js,cy.jsx,cy.ts,cy.tsx}',
  },
});
