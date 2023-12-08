describe("Login Bem-Sucedido", () => {
  it("Fluxo principal", async () => {
    cy.visit("https://seubarriga.wcaquino.me/login");

    cy.get(`#email`).click();

    cy.get(`#email`).type(`ana2silva@gmail.com`);

    cy.get(`#senha`).click();

    cy.get(`#senha`).type(`1234`);

    cy.get(`.btn`).click();

    // TODO: create instructions for 'submit'

    cy.get(`.alert`).should("be.visible").contains(`Bem vindo, Ana Silva!`)
  })
})