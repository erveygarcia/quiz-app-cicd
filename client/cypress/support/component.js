import { mount } from '@cypress/react' // ✅ usa @cypress/react, no "cypress/react18"

Cypress.Commands.add('mount', mount)

declare global {
  namespace Cypress {
    interface Chainable {
      mount: typeof mount
    }
  }
}
