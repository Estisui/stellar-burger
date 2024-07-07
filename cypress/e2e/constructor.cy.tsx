/// <reference types="cypress" />

import ingredients from '../fixtures/ingredients.json';

describe('проверяем функциональность приложения', function () {
  it('Добавление ингредиента из списка ингредиентов в конструктор', function () {
    cy.intercept('GET', '/api/ingredients', ingredients);
    cy.visit('http://localhost:4000');
    cy.get(`[data-cy=constructor]`).contains('Выберите булки');
    cy.contains('Добавить').click();
    cy.get(`[data-cy=constructor]`)
      .contains('Выберите булки')
      .should('not.exist');
  });
});
