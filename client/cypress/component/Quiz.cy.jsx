import React from "react";
import Quiz from "../../src/components/Quiz";

describe('Quiz Component', () => {
  beforeEach(() => {
    cy.intercept(
      {
        method: 'GET',
        url: '/api/questions/random'
      },
      {
        fixture: 'questions', // ✅ sin ".json"
        statusCode: 200
      }
    ).as('getRandomQuestion');
  });

  it('should start the quiz and display the first question', () => {
    cy.mount(<Quiz />);
    cy.get('button').contains('Start Quiz').click();
    cy.get('.card').should('be.visible');
    cy.get('h2').should('not.be.empty');
  });

  it('should answer questions and complete the quiz', () => {
    cy.mount(<Quiz />);
    cy.get('button').contains('Start Quiz').click();

    // Answer a question (click option 1)
    cy.get('button').contains('1').click();

    // Verify completion message
    cy.get('.alert-success')
      .should('be.visible')
      .and('contain', 'Your score');
  });

  it('should restart the quiz after completion', () => {
    cy.mount(<Quiz />);
    cy.get('button').contains('Start Quiz').click();

    // Answer a question (click option 1)
    cy.get('button').contains('1').click();

    // Click on restart button
    cy.get('button').contains('Take New Quiz').click();

    // Verify quiz restarted
    cy.get('.card').should('be.visible');
    cy.get('h2').should('not.be.empty');
  });
});
