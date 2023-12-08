

describe("Login com campos em branco", () => {
  it("Fluxo de exceção", async () => {
    cy.visit("https://seubarriga.wcaquino.me/login");

    cy.get(`#email`).click();

    cy.get(`#senha`).click();

    cy.get(`.btn`).click();

    // TODO: create instructions for 'submit'

    cy.get(`.body-index > :nth-child(2)`).should("be.visible").contains(`Email é um campo obrigatório`)

    cy.get(`.body-index > :nth-child(3)`).should("be.visible").contains(`Senha é um campo obrigatório`)
  })
})