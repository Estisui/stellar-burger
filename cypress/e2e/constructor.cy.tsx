/// <reference types="cypress" />

import ingredients from '../fixtures/ingredients.json';

beforeEach(() => {
  cy.intercept('GET', '/api/ingredients', ingredients);
});

describe('Проверяем функциональность приложения', function () {
  it('Добавление ингредиента из списка ингредиентов в конструктор', function () {
    cy.visit('http://localhost:4000');
    cy.get(`[data-cy=constructor]`).contains('Выберите булки');
    cy.contains('Добавить').click();
    cy.get(`[data-cy=constructor]`)
      .contains('Выберите булки')
      .should('not.exist');
  });

  it('Открытие модального окна', function () {
    cy.visit('http://localhost:4000');
    cy.contains('булка').click();
    cy.contains('Калории');
    cy.get(`[data-cy=modal] button`).click();
    cy.contains('Калории').should('not.exist');
  });
});
