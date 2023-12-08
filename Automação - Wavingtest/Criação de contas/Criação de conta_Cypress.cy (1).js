describe("Criação de conta", () => {

    beforeEach(() => {
        cy.visit("https://seubarriga.wcaquino.me/login");
        cy.get(`#email`).click().type(`caiquetester@email.com`);
        cy.get(`#senha`).click().type(`qualitribo1234`);
        cy.get(`.btn`).click();
        cy.get(`.alert`).should("be.visible").contains(`Bem vindo, caique testador!`);
    })

    it("Criação de conta com nome válido - fluxo principal", () => {
        cy.get(`.dropdown-toggle`).click();
        cy.get(`.dropdown-menu > :nth-child(1) > a`).click();
        cy.get(`#nome`).click().type(`minhanovaconta`);
        cy.get(`.btn`).click();
        cy.get(`.alert`).should("be.visible").contains(`Conta adicionada com sucesso!`);
    })

    it("Criação de conta - fluxo alternativo", () => {
        cy.get(`.dropdown-toggle`).click();
        cy.get(`.dropdown-menu > :nth-child(2) > a`).click();
        cy.contains(`tr`,`minhanovaconta`).find(`td:nth-child(2) > a:nth-child(2) > span`).click({force: true});
        cy.get(`.alert`).should("be.visible").contains(`Conta removida com sucesso!`);
        cy.get(`.dropdown-toggle`).click();
        cy.get(`.dropdown-menu > :nth-child(1) > a`).click();
        cy.get(`#nome`).click().type(`minhanovaconta`);
        cy.get(`.btn`).click();
        cy.get(`.alert`).should("be.visible").contains(`Conta adicionada com sucesso!`);
      })

    it("Criação de conta com nome já existente - fluxo de exceção", () => {
        cy.get(`.dropdown-toggle`).click();
        cy.get(`.dropdown-menu > :nth-child(1) > a`).click();
        cy.get(`#nome`).click().type(`minhanovaconta`);
        cy.get(`.btn`).click();
        cy.get(`.alert`).should("be.visible").contains(`Já existe uma conta com esse nome!`);
      })

    after(() => {
        cy.visit("https://seubarriga.wcaquino.me/login");
        cy.get(`#email`).click().type(`caiquetester@email.com`);
        cy.get(`#senha`).click().type(`qualitribo1234`);
        cy.get(`.btn`).click();
        cy.get(`.alert`).should("be.visible").contains(`Bem vindo, caique testador!`);
        cy.get(`.dropdown-toggle`).click();
        cy.get(`.dropdown-menu > :nth-child(2) > a`).click();
        cy.contains(`tr`,`minhanovaconta`).find(`td:nth-child(2) > a:nth-child(2) > span`).click({force: true});
        cy.get(`.alert`).should("be.visible").contains(`Conta removida com sucesso!`);
    })

  })