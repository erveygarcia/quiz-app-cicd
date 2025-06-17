import { mount } from '@cypress/react'

// Agrega el comando personalizado "mount" a Cypress
Cypress.Commands.add('mount', mount)

declare global {
  namespace Cypress {
    interface Chainable {
      mount: typeof mount
    }
  }
}
