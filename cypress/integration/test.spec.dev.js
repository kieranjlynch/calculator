"use strict";

describe('Basic operator tests', function () {
  it('Should check 1 + 1 equals', function () {
    // arrange  
    cy.visit("http://127.0.0.1:5502/index.html"); //act

    cy.get('[data-cy=one]').click();
    cy.get('[data-cy=plus]').click();
    cy.get('[data-cy=one]').click();
    cy.get('[data-cy=equals]').click(); // assert

    cy.get('[data-cy=display]').should("have.text", 2);
  });
  it('Should check 9 / 1 equals', function () {
    // arrange  
    cy.visit("http://127.0.0.1:5502/index.html"); //act

    cy.get('[data-cy=nine]').click();
    cy.get('[data-cy=divide]').click();
    cy.get('[data-cy=one]').click();
    cy.get('[data-cy=equals]').click(); // assert

    cy.get('[data-cy=display]').should("have.text", 9);
  });
  it('Should check 1 - 1 equals', function () {
    // arrange  
    cy.visit("http://127.0.0.1:5502/index.html"); //act

    cy.get('[data-cy=one]').click();
    cy.get('[data-cy=minus]').click();
    cy.get('[data-cy=one]').click();
    cy.get('[data-cy=equals]').click(); //assert

    cy.get('[data-cy=display]').should("have.text", 0);
  });
  it('Should check 2 * 5 equals', function () {
    // arrange  
    cy.visit("http://127.0.0.1:5502/index.html"); //act

    cy.get('[data-cy=two]').click();
    cy.get('[data-cy=multiply]').click();
    cy.get('[data-cy=five]').click();
    cy.get('[data-cy=equals]').click(); // assert

    cy.get('[data-cy=display]').should("have.text", 10);
  });
  it('Should check 20 + 30 equals', function () {
    // arrange  
    cy.visit("http://127.0.0.1:5502/index.html"); //act

    cy.get('[data-cy=two]').click();
    cy.get('[data-cy=zero]').click();
    cy.get('[data-cy=plus]').click();
    cy.get('[data-cy=three]').click();
    cy.get('[data-cy=zero]').click();
    cy.get('[data-cy=equals]').click(); // assert

    cy.get('[data-cy=display]').should("have.text", 50);
  });
  it('Should check 20 - 10 equals', function () {
    // arrange  
    cy.visit("http://127.0.0.1:5502/index.html"); //act

    cy.get('[data-cy=two]').click();
    cy.get('[data-cy=zero]').click();
    cy.get('[data-cy=minus]').click();
    cy.get('[data-cy=one]').click();
    cy.get('[data-cy=zero]').click();
    cy.get('[data-cy=equals]').click(); // assert

    cy.get('[data-cy=display]').should("have.text", 10);
  });
});