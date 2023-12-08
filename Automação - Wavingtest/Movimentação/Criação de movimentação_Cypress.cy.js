describe("Criação de movimentação", () => {

    before(() => {
        cy.visit("https://seubarriga.wcaquino.me/login");
        cy.get(`#email`).click().type(`sallesagatasalles19@gmail.com`);
        cy.get(`#senha`).click().type(`Lorena25!`);
        cy.get(`.btn`).click();
        cy.get(`.alert`).should("be.visible").contains(`Bem vindo, Agata Sales!`);
        cy.get(`.dropdown-toggle`).click();
        cy.get(`.dropdown-menu > :nth-child(1) > a`).click();
        cy.get(`#nome`).click().type(`Aluguel 02`);
        cy.get(`.btn`).click();
        cy.get(`.alert`).should("be.visible").contains(`Conta adicionada com sucesso!`);
    })

    beforeEach(() => {
        cy.visit("https://seubarriga.wcaquino.me/login");
        cy.get(`#email`).click().type(`sallesagatasalles19@gmail.com`);
        cy.get(`#senha`).click().type(`Lorena25!`);
        cy.get(`.btn`).click();
        cy.get(`.alert`).should("be.visible").contains(`Bem vindo, Agata Sales!`);
    })

    it("Criação de movimentação - Fluxo principal", () => {
        cy.get(`:nth-child(3) > a`).click();
        cy.get(`#data_transacao`).click().type(`01/12/2023`);
        cy.get(`#data_pagamento`).click().type(`30/12/2023`);
        cy.get(`#descricao`).click().type(`Pagamento Aluguel`);
        cy.get(`#interessado`).click().type(`eu`);
        cy.get(`#valor`).click().type(`1200`);
        cy.get(`#conta`).select(`Aluguel 02`);
        cy.get(`#status_pendente`).click();
        cy.get(`.btn`).click();
        cy.get(`.alert`).should("be.visible").contains(`Movimentação adicionada com sucesso!`);
    })

    it("Criação de movimentação - Fluxo alternativo", () => {
        cy.get(`.dropdown-toggle`).click();
        cy.get(`.dropdown-menu > :nth-child(1) > a`).click();
        cy.get(`#nome`).click().type(`Aluguel 03`);
        cy.get(`.btn`).click();
        cy.get(`.alert`).should("be.visible").contains(`Conta adicionada com sucesso!`);
        cy.get(`:nth-child(3) > a`).click();
        cy.get(`#data_transacao`).click().type(`04/12/2023`);
        cy.get(`#data_pagamento`).click().type(`31/12/2023`);
        cy.get(`#descricao`).click().type(`Pagamento Aluguel 02`);
        cy.get(`#interessado`).click().type(`eu`);
        cy.get(`#valor`).click().type(`850`);
        cy.get(`#conta`).select(`Aluguel 03`);
        cy.get(`#status_pendente`).click();
        cy.get(`.btn`).click();
        cy.get(`.alert`).should("be.visible").contains(`Movimentação adicionada com sucesso!`);
    })

    it("Criação de movimentação com valor inválido - Fluxo de exceção", () => {
        cy.get(`:nth-child(3) > a`).click();
        cy.get(`#data_transacao`).click().type(`04/12/2023`);
        cy.get(`#data_pagamento`).click().type(`31/12/2023`);
        cy.get(`#descricao`).click().type(`Pagamento Aluguel 02`);
        cy.get(`#interessado`).click().type(`eu`);
        cy.get(`#valor`).click().type(`85,00`);
        cy.get(`#conta`).select(`Aluguel 02`);
        cy.get(`#status_pendente`).click();
        cy.get(`.btn`).click();
        cy.get(`.alert > ul > :nth-child(1)`).should("be.visible").contains(`Valor deve ser um número`);
    })

    
    after(() => {
        cy.visit("https://seubarriga.wcaquino.me/login");
        cy.get(`#email`).click().type(`sallesagatasalles19@gmail.com`);
        cy.get(`#senha`).click().type(`Lorena25!`);
        cy.get(`.btn`).click();
        cy.get(`.alert`).should("be.visible").contains(`Bem vindo, Agata Sales!`);
        cy.get(`:nth-child(4) > a`).click();
        cy.get(`#mes`).select(`Dezembro`);
        cy.get(`#ano`).select(`2023`);
        cy.get(`.btn`).click();
        cy.contains(`tr`,`Pagamento Aluguel`).find(`td:nth-child(6) > a > span`).click({force: true});
        cy.get(`.alert`).should("be.visible").contains(`Movimentação removida com sucesso!`);
        cy.contains(`tr`,`Pagamento Aluguel 02`).find(`td:nth-child(6) > a > span`).click({force: true});
        cy.get(`.alert`).should("be.visible").contains(`Movimentação removida com sucesso!`);
        cy.get(`.dropdown-toggle`).click();
        cy.get(`.dropdown-menu > :nth-child(2) > a`).click();
        cy.contains(`tr`,`Aluguel 02`).find(`td:nth-child(2) > a:nth-child(2) > span`).click({force: true});
        cy.get(`.alert`).should("be.visible").contains(`Conta removida com sucesso!`);
        cy.contains(`tr`,`Aluguel 03`).find(`td:nth-child(2) > a:nth-child(2) > span`).click({force: true});
        cy.get(`.alert`).should("be.visible").contains(`Conta removida com sucesso!`);
    })

  })